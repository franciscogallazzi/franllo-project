import React from 'react';

import {ListGroupItem} from 'reactstrap';

export default ({data}) => (
    <ListGroupItem>{data.title}</ListGroupItem>
)