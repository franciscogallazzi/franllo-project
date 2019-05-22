'use strict';

module.exports = function (app, cb) {
  let Board = app.models.Board;
  let List = app.models.List;
  let Activity = app.models.Activity;


  Board.create({
      name: 'primer tablero'
  })
  .then(board => {
      console.log("board", board);
      return List.create([{
          name: 'Backlog',
          boardId: board.id
      },{
        name: 'Doing 1',
        boardId: board.id
    }
    ,{
        name: 'Doing 2',
        boardId: board.id
    },{
        name: 'Doing 3',
        boardId: board.id
    },{
        name: 'Doing 4',
        boardId: board.id
    },{
        name: 'Doing 5',
        boardId: board.id
    },{
        name: 'Doing 6',
        boardId: board.id
    }

    ])
  })
  .then(list => {
      console.log("list", list);
      return Activity.create([{
          title: 'Actividad A',
          listId: 1
      },{
        title: 'Actividad B',
        listId: 1
    },
    {
        title: 'Actividad A',
        listId: 1
    },{
      title: 'Actividad B',
      listId: 1
    },{
        title: 'Actividad A',
        listId: 1
    },{
      title: 'Actividad B',
      listId: 1
  },{
    title: 'Actividad A',
    listId: 1
},{
  title: 'Actividad B',
  listId: 1
},{
    title: 'Actividad A',
    listId: 1
},{
  title: 'Actividad B',
  listId: 1
},{
    title: 'Actividad A',
    listId: 1
},{
  title: 'Actividad B',
  listId: 1
},{
    title: 'Actividad A',
    listId: 1
},{
  title: 'Actividad B',
  listId: 1
},{
    title: 'Actividad A en lista 4',
    listId: 4
},{
  title: 'Actividad B',
  listId: 1
}
    ])
  })
  .then(activity => {
    console.log("activity", activity);
    cb();
  })
  .catch(err => {
      cb(err);
  })
};
