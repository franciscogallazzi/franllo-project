'use strict';

module.exports = function (app, cb) {
  return cb();
  let Board = app.models.Board;
  let List = app.models.List;
  let Activity = app.models.Activity;


  Board.create({
      name: 'Insane Board',
      userId:1
  })
  .then(board => {
    return List.create(
      [{
          name: 'Backlog',
          boardId: board.id,
          userId:1
      },
      {
        name: 'Doing',
        boardId: board.id,
        userId:1
      },
      {
        name: 'Test',
        boardId: board.id,
        userId:1
      },
      {
        name: 'Finalized',
        boardId: board.id,
        userId:1
      }
    ])
  })
  .then(list => {
      return Activity.create([{
          title: 'Make a coffe',
          listId: 1,
          userId:1
      },{
        title: 'Buy a coffe maker',
        listId:2,
        userId:1
      }])
  })
  .then(activity => {
    cb();
  })
  .catch(err => {
      cb(err);
  })
};
