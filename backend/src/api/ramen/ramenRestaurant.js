import express from 'express';
import functions from '../../functions';
import models from '../../db/models';

const router = express.Router();
const { RamenModel, ReviewModel, ImageModel } = models;
const { response, floor } = functions;

router.post('/newRamenRestaurant', (req, res) => {
  if (!req.session.userInfo) {
    response(res, 200, 1, '登入逾期，請重新登入');
    return;
  }
  const isPublish = req.session.userInfo.userType === 'admin';
  const ramenData = {
    ...req.body, isPublish, totalScore: 0, popularity: 1, reviewNumber: 0,
  };
  const tempRamenRestaurant = new RamenModel(ramenData);
  tempRamenRestaurant.save().then((data) => {
    if (!data) response(res, 200, 2, '新增失敗');
    else response(res, 200, 0, '已收到您提供的新拉麵店資訊，我們會在審核完成後放上網站', data);
  }).catch((err) => {
    console.log(err);
    response(res, 200, 2, '新增拉麵店失敗');
  });
});

// admin update info of a restaurant
router.patch('/:id', (req, res) => {
  if (!req.session.userInfo) {
    response(res, 200, 1, '登入逾期，請重新登入');
    return;
  }
  if (req.session.userInfo.userType !== 'admin') {
    response(res, 200, 1, '權限不足');
    return;
  }
  const { id } = req.params;
  if (!id) {
    response(res, 200, 2, '麵店不存在');
    return;
  }
  RamenModel.update(
    { _id: id },
    {
      ...req.body,
    },
  ).then((result) => {
    if (result.n !== 1) response(res, 200, 2, '更新失敗');
    else {
      RamenModel.find({ _id: id }).then((data) => {
        if (!data) response(res, 200, 2, '更新失敗');
        else response(res, 200, 0, '更新成功', data);
      });
    }
  }).catch((err) => {
    console.log(err);
    response(res, 200, 2, '更新失敗');
  });
});

router.get('/ramenRestaurantList', (req, res) => {
  const { page, number, searchConditions } = req.query;
  const { sortType } = searchConditions;
  const secondSortType = sortType === 'totalScore' ? 'popularity' : 'totalScore';
  const pageNum = Number(page) ? Number(page) : 1;
  const skip = pageNum === 1 ? 0 : (pageNum - 1) * Number(number);
  const limit = Number(number);
  const searchCondition = {
    isPublish: true,
  };
  Object.entries(searchConditions).forEach(([key, value]) => {
    if (key === 'location' && value.length > 0) {
      searchCondition.location = {
        $in: value,
      };
    } else if (key === 'tag' && value.length > 0) {
      searchCondition.tag = {
        $in: value,
      };
    } else if (key === 'keyWord' && value.length > 0) {
      const regex = new RegExp(value, 'ig');
      const regexQuery = { $regex: regex, $options: 'ig' };
      searchCondition.$or = [
        { address: regexQuery },
        { name: regexQuery },
        { location: { $in: [regex] } },
        { tag: { $in: [regex] } },
      ];
    }
  });
  const responseData = {
    data: [],
    total: 0,
  };
  RamenModel.count(searchCondition).then((count) => {
    responseData.total = count;
    RamenModel.find(searchCondition, 'img location _id name totalScore address tag popularity')
      .sort([[sortType, -1], [secondSortType, -1]]).then((result) => {
        if (!result) {
          response(res, 200, 2, '獲取拉麵店列表失敗');
          return;
        }
        if (result.length === 0) {
          response(res, 200, 2, '查無資訊，請確認關鍵字沒有打錯');
          return;
        }
        result.map((item) => {
          item.totalScore = floor(item.totalScore);
          return item;
        });
        console.log(result);
        const end = skip + limit <= result.length ? skip + limit : result.length;
        const resultData = result.slice(skip, end);
        responseData.data = resultData.map(item => ({ id: item._id, ...(item._doc) }));
        response(res, 200, 0, '成功獲取拉麵店列表', responseData);
      }).catch((err) => {
        response(res, 200, 2, '獲取拉麵店列表失敗');
        console.log(err);
      });
  }).catch((err) => {
    response(res, 200, 2, '獲取拉麵店列表失敗');
    console.log(err);
  });
});

router.get('/ramenRestaurantNameList', (req, res) => {
  RamenModel.find({}, '_id name').then((result) => {
    const responseData = result.map(item => ({ id: item._id, name: item.name }));
    response(res, 200, 0, '成功獲取拉麵店名列表', responseData);
  }).catch((err) => {
    response(res, 200, 2, '獲取拉麵店名列表失敗');
    console.log(err);
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  if (!id) {
    response(res, 200, 2, '該麵店不存在');
    return;
  }
  RamenModel.findOne({ _id: id })
    .then((result) => {
      if (result) response(res, 200, 0, '成功載入麵店', result);
      else response(res, 200, 2, '麵店不存在');
    }).catch((err) => {
      response(res, 200, 2, '載入麵店失敗');
      console.log(err);
    });
});

router.get('/:id/reviews', (req, res) => {
  const { id } = req.params;
  if (!id) {
    response(res, 200, 2, '該麵店不存在');
    return;
  }
  ReviewModel.find({ _id: id }).sort({ timeStamp: -1 })
    .then((result) => {
      if (result) {
        response(res, 200, 0, '成功載入麵店評論', result);
      } else response(res, 200, 2, '目前無評論');
    }).catch((err) => {
      response(res, 200, 2, '載入麵店評論失敗');
      console.log(err);
    });
});

router.post('/:id/review', (req, res) => {
  if (!req.session.userInfo) {
    response(res, 200, 1, '登入逾期，請重新登入');
    return;
  }
  const { userId } = req.session.userInfo;
  const { id } = req.params;
  if (!id) {
    response(res, 200, 2, '該麵店不存在');
    return;
  }
  const { food, env, service } = req.body.scores;
  let totalScore = (parseFloat(food) + parseFloat(env) + parseFloat(service)) / 3;
  RamenModel.findOne({ _id: id }, 'totalScore scores reviewNumber popularity').then((ramen) => {
    const scores = {
      food: Number(food),
      env: Number(env),
      service: Number(service),
    };
    totalScore = (totalScore + ramen.totalScore) / (1 + ramen.reviewNumber);
    if (ramen.scores.food) {
      scores.food = (Number(food) + ramen.scores.food) / (1 + ramen.reviewNumber);
      scores.env = (Number(env) + ramen.scores.env) / (1 + ramen.reviewNumber);
      scores.service = (Number(service) + ramen.scores.service) / (1 + ramen.reviewNumber);
    }
    RamenModel.update(
      { _id: id },
      {
        totalScore,
        scores,
        reviewNumber: ramen.reviewNumber + 1,
        popularity: ramen.popularity + 1,
      },
    ).then((result) => {
      if (result.n !== 1) {
        response(res, 200, 2, '上傳麵店評論失敗');
        return;
      }
    }).catch((err) => {
      response(res, 200, 2, '上傳麵店評論失敗');
      console.log(err);
    });
  }).catch((err) => {
    response(res, 200, 2, '上傳麵店評論失敗');
    console.log(err);
  });
  const tempReview = new ReviewModel({ ...req.body, authorId: userId });
  tempReview.save().then((data) => {
    if (!data) response(res, 200, 0, '上傳麵店評論失敗');
    else response(res, 200, 2, '上傳麵店評論成功', data);
  });
});

export default router;
