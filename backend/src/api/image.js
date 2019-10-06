import express from 'express';
import fs from 'fs';
import functions from '../functions';
import models from '../db/models';

const router = express.Router();
const { ImageModel } = models;
const { response } = functions;

router.post('/:id/newImage', (req, res) => {
  const { id } = req.params;
  if (!req.session.userInfo) {
    response(res, 200, 1, '登入逾期，請重新登入');
    return;
  } else if (req.session.userInfo.userId !== id) {
    response(res, 200, 1, '權限不足');
    return;
  }
  const { data, type } = req.body;
  /* const img = data.replace(/^data:image\/\w+;base64,/, '');
  const buf = new Buffer(img, 'base64');
  fs.open(`./pic/${id}.png`, 'w+', (err, fd) => {
    if (err) {
      console.log(err);
      response(res, 200, 2, '上傳失敗');
      return;
    }
  });
  fs.writeFile(`./pic/${id}.png`, buf, (err) => {
    if (err) {
      console.log(err);
      response(res, 200, 2, '上傳失敗');
      return;
    }
  });
  response(res, 200, 0, 'OK'); */
  console.log('saving');
  const tempImage = new ImageModel({ id });
  tempImage.image.contentType = req.body.type;
  tempImage.image.data = req.body.data;
  tempImage.save().then((result) => {
    console.log('ya');
    if (result) response(res, 200, 0, '上傳圖片成功', { imgId: result._id });
    else response(res, 200, 2, '上傳圖片失敗');
  }).catch((err) => {
    response(res, 200, 2, '上傳圖片失敗');
    console.log(err);
  });
});
const mongoose = require('mongoose');
router.get('/:id', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    response(res, 200, 2, '獲取圖片失敗');
    return;
  }
  if (!req.params.id) {
    response(res, 200, 2, '獲取圖片失敗');
    return;
  }
  ImageModel.findOne({ _id: req.params.id }).then((result) => {
    if (result) response(res, 200, 0, '獲取圖片成功', result);
    else response(res, 200, 2, '獲取圖片失敗');
  }).catch((err) => {
    response(res, 200, 2, '獲取圖片失敗');
    console.log(err);
  });
});

export default router;
