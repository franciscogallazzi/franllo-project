import React from 'react';

import {
    Card,
    CardTitle,
    CardText,
    Button,
    Row,
    Col
} from 'reactstrap';

import {Link} from 'react-router-dom';

import utils from '../../utils';

const Item = ({board, md}) => (
    <Col 
        md={md}>
        <Card 
            body 
            className="d-flex justify-content-center align-items-center"
            style={{height:100}}>
            <Link to={`/board/${board.id}`}>
                {board.name}
            </Link>
        </Card>
    </Col>
) 

const BoardRow = ({items}) => (
    <Row style={{marginTop: 20}}>
        {items.map(item => item)}
    </Row>
)

export default ({boards,children}) =>   {

    const items = boards.map( (board, i) => <Item board={board} md={4} key={i}/>);

    const md = (items.length % 3 === 0) ? {size:4, offset:4} : 4;

    items.push(<Col md={md} key={items.length}>{children}</Col>)
    
    const boardRows = utils.chunkArray(items, 3);

    return boardRows.map((boardRow, i) => <BoardRow items={boardRow} key={i}/>)
}