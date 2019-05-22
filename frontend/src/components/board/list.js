import React from 'react';

import {
    Card,
    CardHeader,
    ListGroup,
    Button
} from 'reactstrap';

import Activity from './activijty';

const style = {
    width: '272px',
    margin: '0 4px',
    boxSizing: 'border-box',
    display: 'inline-flex',
    verticalAlign: 'top',
    whiteSpace: 'nowrap',
}

export default ({data, activities}) => (
    <Card style={style}>
        <CardHeader>{data.name}</CardHeader>
            <ListGroup style={{maxHeight:'65vh', overflow:'auto'}}>
                {activities.map((activity, i)=>(
                    <Activity key={i} data={activity} />
                ))}
            </ListGroup>
            <Button>+</Button>
    </Card>
)