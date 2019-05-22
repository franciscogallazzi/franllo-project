'use strict';

module.exports = function (app, cb) {
  let User = app.models.User;

  User.create({
      email: 'franciscogallazzi@gmail.com',
      password: '123456',
      name: 'Francisco',
      lastname: 'Gallazzi'
  })
  .then(user => {
      console.log("user", user);
      cb();
  })
  .catch(err => {
      cb(err);
  })
};
