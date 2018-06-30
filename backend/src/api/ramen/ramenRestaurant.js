import express from 'express';
import functions from '../../functions';
import models from '../../db/models';

const router = express.Router();
const { RamenModel, ReviewModel } = models;
const { response } = functions;

router.post('/newRamenRestaurant', (req, res) => {
  if (!req.session.userInfo) {
    response(res, 200, 1, '登入逾期，請重新登入');
    return;
  }
  const isPublish = req.session.userInfo.type === 'admin';
  const ramenData = {
    ...req.body, isPublish,
  };
  const tempRamenRestaurant = new RamenModel(ramenData);
  tempRamenRestaurant.save().then((data) => {
    response(res, 200, 0, '已收到您提供的新拉麵店資訊，我們會在審核完成後放上網站', data);
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
  if (req.session.userInfo.type !== 'admin') {
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
    console.log(result);
    if (!result) response(res, 200, 2, '更新失敗');
    else response(res, 200, 0, '更新成功', result);
  }).catch((err) => {
    console.log(err);
    response(res, 200, 2, '更新失敗');
  });
});

router.get('/ramenRestaurantList/:page', (req, res) => {
  const { page, searchConditions } = req.params;
  const { sortType } = searchConditions;
  const pageNum = page ? page : 1;
  const skip = pageNum === 1 ? 0 : (pageNum - 1) * 8;
  const limit = 8;
  const requestNumber = {
    skip, limit,
  };
  const searchCondition = {
    isPublish: true,
    
  };
  const responseData = {
    data: [],
    total: 0,
  };
  RamenModel.count(searchCondition).then((count) => {
    responseData.total = count;
    RamenModel.find(searchCondition, '_id name totalScore address tag popularity', {})
    .sort(`-${sortType}`).then((result) => {
      if (!result) {
        response(res, 200, 2, '獲取拉麵店列表失敗');
        return;
      }
      const end = skip + limit <= result.length ? skip + limit : result.length;
      const resultData = result.slice(skip, end);
      responseData.data = resultData.map(item => ({ id: item._id, ...result }));
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
  ReviewModel.findOne({ _id: id })
    .then((result) => {
      if (result) {
        response(res, 200, 0, '成功載入麵店評論', result);
      } else response(res, 200, 2, '目前無評論');
    }).catch((err) => {
      response(res, 200, 2, '載入麵店評論失敗');
      console.log(err);
    });
});

export default router;
