import express from 'express';
import functions from '../functions';
import models from '../db/models';

const router = express.Router();
const { ImageModel } = models;
const { response } = functions;

router.post('/:id/newImage', (req, res) => {
  console.log(req.files);
  console.log(req.body);
  const { id } = req.params;
  if (!req.session.userInfo) {
    response(res, 200, 1, '登入逾期，請重新登入');
    return;
  } else if (req.session.userInfo.userId !== id) {
    response(res, 200, 1, '權限不足');
    return;
  }
  const tempImage = new ImageModel({ id });
  tempImage.image.contentType = 'image/jpg';
  tempImage.image.data = req.files.file;
  tempImage.save().then((result) => {
    if (result) response(res, 200, 0, '上傳圖片成功', { imgId: result._id });
    else response(res, 200, 2, '上傳圖片失敗');
  }).catch((err) => {
    response(res, 200, 2, '上傳圖片失敗');
    console.log(err);
  });
});

router.get('/:id', (req, res) => {
  ImageModel.find({ _id: req.params.id }).then((result) => {
    if (result) response(res, 200, 0, '獲取圖片成功', result);
    else response(res, 200, 2, '獲取圖片失敗');
  }).catch((err) => {
    response(res, 200, 2, '獲取圖片失敗');
    console.log(err);
  });
});

export default router;
