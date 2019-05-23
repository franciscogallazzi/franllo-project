'use strict';

module.exports = function (app, cb) {
  let Board = app.models.Board;
  let List = app.models.List;
  let Activity = app.models.Activity;


  Board.create({
      name: 'Insane Board'
  })
  .then(board => {
    return List.create(
      [{
          name: 'Backlog',
          boardId: board.id
      },
      {
        name: 'Doing',
        boardId: board.id
      },
      {
        name: 'Test',
        boardId: board.id
      },
      {
        name: 'Finalized',
        boardId: board.id
      }
    ])
  })
  .then(list => {
      return Activity.create([{
          title: 'Make a coffe',
          listId: 1
      },{
        title: 'Buy a coffe maker',
        listId:2
      }])
  })
  .then(activity => {
    cb();
  })
  .catch(err => {
      cb(err);
  })
};
