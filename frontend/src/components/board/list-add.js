import React from 'react';

import {
    Button,
    
} from 'reactstrap';
import ListForm from './list-form';

const style = {
    width: '272px',
    margin: '0 4px',
    boxSizing: 'border-box',
    display: 'inline-flex',
    verticalAlign: 'top',
    whiteSpace: 'nowrap',
}

class ActivityAdd extends React.Component {

    state = {
        viewForm: false
    }

    constructor(props){
        super(props);

        this.element = React.createRef();
        this.addList = this.addList.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
        this.onDimiss = this.onDimiss.bind(this);
    }

    componentDidUpdate(){
        if (this.state.viewForm){
            this.element.current.scrollIntoView()
        }
    }

    addList(){
        this.setState({
            viewForm: true
        })
    }

    onSubmit(data){
        this.props.onAddList({
            name: data
        })

    }

    onDimiss(){
        this.setState({
            viewForm: false
        })
        
    }

    render(){
        const {viewForm} = this.state;
        return (
            <div style={style} ref={this.element}>
                {!viewForm ? 
                <Button onClick={this.addList}>+</Button>
                :
                <ListForm 
                    initialValue="" 
                    autoFocus={true}
                    onSubmit={this.onSubmit}
                    onDimiss={this.onDimiss}/>
                }
            </div>
        )        
    }
}

export default ActivityAdd;