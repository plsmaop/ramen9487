import express from 'express';
import functions from '../functions';
import models from '../db/models/index';

const { UserModel } = models;
const { hash, response } = functions;

const router = express.Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username) {
    response(res, 200, 2, '帳號不可為空');
    return;
  }
  if (!password) {
    response(res, 200, 2, '密碼不可為空');
    return;
  }
  UserModel.findOne({ username }).then((userInfo) => {
    if (!userInfo) {
      response(res, 200, 1, '帳號或密碼錯誤');
      return;
    }
    hash.matchPassword(password, userInfo.password).then((isMatch) => {
      if (isMatch) {
        const data = {};
        data.username = userInfo.username;
        data.userType = userInfo.type;
        data.userId = userInfo._id;
        data.email = userInfo.email;
        // setting session
        req.session.userInfo = data;
        // console.log(req.session);
        response(res, 200, 0, '登入成功', data);
      } else response(res, 200, 1, '帳號或密碼錯誤');
    });
  }).catch((err) => {
    console.log(err);
    response(res);
  });
});

router.post('/register', (req, res) => {
  const { username, password, email } = req.body;
  if (!username) {
    response(res, 200, 2, '帳號不可為空');
    return;
  }
  if (!password) {
    response(res, 200, 2, '密碼不可為空');
    return;
  }
  if (!email) {
    response(res, 200, 2, '信箱不可為空');
    return;
  }
  UserModel.findOne({ $or: [{ username }, { email }] })
    .then((data) => {
      if (data) {
        response(res, 200, 1, '帳號或信箱已存在');
        return;
      }
      hash.hashPassword(password).then((hashPwd) => {
        const user = new UserModel({
          username,
          password: hashPwd,
          email,
          type: username === 'admin' ? 'admin' : 'user',
        });
        user.save()
          .then(() => {
            UserModel.findOne({ username })
              .then((userInfo) => {
                const data = {};
                data.username = userInfo.username;
                data.userType = userInfo.type;
                data.userId = userInfo._id;
                data.email = userInfo.email;
                if (userInfo) response(res, 200, 0, '註冊成功，請使用這組帳密登入', data);
                else response(res, 200, 2, '註冊失敗');
              });
          });
      });
    }).catch((err) => {
      console.log(err);
      response(res, 200, 2, '註冊失敗');
    });
});

router.get('/userInfo', (req, res) => {
  if (req.session.userInfo) {
    response(res, 200, 0, '', req.session.userInfo);
  } else {
    response(res, 200, 1, '請重新登入', req.session.userInfo);
  }
});

router.get('/logout', (req, res) => {
  if (req.session.userInfo) console.log(`${req.session.userInfo.username} logout`);
  req.session.destroy();
  response(res, 200, 0, '登出成功');
});

export default router;
