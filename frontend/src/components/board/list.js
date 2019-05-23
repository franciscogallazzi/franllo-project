import React from 'react';

import {
    Card,
    CardHeader,
    ListGroup,
    Button
} from 'reactstrap';

import Activity from './activijty';

import ActivityAdd from './activijty-add';

const style = {
    width: '272px',
    margin: '0 4px',
    boxSizing: 'border-box',
    display: 'inline-flex',
    verticalAlign: 'top',
    whiteSpace: 'nowrap',
}

class List extends React.Component {
    state={
        addActivity: false
    }

    constructor(props){
        super(props);

        this.addActivity = this.addActivity.bind(this);
        this.onSubit = this.onSubit.bind(this);
        this.onDimiss = this.onDimiss.bind(this);
    }

    componentDidMount(){
        this.setState({
            activities: this.props.activities
        })
    }

    addActivity(){
        
        this.setState({
            addActivity: true
        })
    }

    onSubit(data){
        this.props.addActivity({
            listId:this.props.data.id,
            ...data
        });
        this.setState({
            addActivity: true
        })
    }

    onDimiss(){
        this.setState({
            addActivity: false
        })
    }

    render() {
        const {data, editActivity, activities} = this.props;
        const {addActivity} = this.state;

        return (
            <Card style={style}>
                <CardHeader>{data.name}</CardHeader>
                    <ListGroup style={{maxHeight:'65vh', overflow:'auto'}}>
                        {activities.map((activity, i)=>(
                            <Activity key={i} data={activity} edit={editActivity}/>
                        ))}

                        {addActivity && 
                        <ActivityAdd 
                            onSubmit={this.onSubit}
                            onDimiss={this.onDimiss}
                        />}
                    </ListGroup>

                    <Button onClick={this.addActivity}>+</Button>
            </Card>
        )
    }
}

export default List;