import express from 'express';
import functions from '../functions';
import models from '../db/models';

const router = express.Router();
const { UserModel, RamenModel } = models;
const { response } = functions;

router.post('/:id/newRamenRecord', (req, res) => {
  const { id } = req.params;
  if (!req.session.userInfo) {
    response(res, 200, 1, '登入逾期，請重新登入');
    return;
  } else if (req.session.userInfo.userId !== id) {
    response(res, 200, 1, '權限不足');
    return;
  }
  const ramenRecord = req.body;
  UserModel.update(
    { _id: id },
    {
      $push: { ramenRecords: ramenRecord },
    },
  ).then((result) => {
    if (result.n !== 1) {
      response(res, 200, 2, '上傳拉麵紀錄失敗');
      return;
    }
    RamenModel.find({ _id: req.body.id }, 'popularity').then((data) => {
      if (!data) {
        response(res, 200, 2, '上傳拉麵紀錄失敗');
        return;
      }
      RamenModel.update({ _id: req.body.id }, { popularity: data.popularity + 1 })
        .then((result) => {
          if (result.n !== 1) {
            response(res, 200, 2, '上傳拉麵紀錄失敗');
            return;
          }
          response(res, 200, 0, '上傳拉麵紀錄成功');
        }).catch((err) => {
          response(res, 200, 2, '上傳拉麵紀錄失敗');
          console.log(err);
        });
    }).catch((err) => {
      response(res, 200, 2, '上傳拉麵紀錄失敗');
      console.log(err);
    });
  }).catch((err) => {
    response(res, 200, 2, '上傳拉麵紀錄失敗');
    console.log(err);
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  if (!req.session.userInfo) {
    response(res, 200, 1, '登入逾期，請重新登入');
    return;
  } else if (req.session.userInfo.userId !== id) {
    response(res, 200, 1, '權限不足');
    return;
  }
  UserModel.find({ _id: id }, 'ramenRecords myRamen').then((data) => {
    if (data) response(res, 200, 0, '獲取拉麵紀錄成功', { ramenRecords: data.ramenRecords, myRamen: data.myRamen });
    else response(res, 200, 2, '獲取拉麵紀錄失敗');
  }).catch((err) => {
    response(res, 200, 2, '獲取拉麵紀錄失敗');
    console.log(err);
  });
});

export default router;
