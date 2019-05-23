'use strict';

module.exports = function (app, cb) {
  let User = app.models.User;

  User.create({
      email: 'demo@gmail.com',
      password: '123456',
      name: 'Demo',
      lastname: 'User'
  })
  .then(user => {
      console.log("user", user);
      cb();
  })
  .catch(err => {
      cb(err);
  })
};
