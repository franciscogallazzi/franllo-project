import React from 'react';

import {
    ListGroupItem
} from 'reactstrap';

import ActivityFormTitle from './ativity-form-title'


class Activity extends React.Component {

    state={}

    constructor(props){
        super(props);
        
        this.addActity = this.addActity.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
    }

    addActity(title){
        /*this.props.edit(this.props.data.id, {title});
        this.setState({
            editMode: false,
            title: title
        })*/
        console.log("title", title);
        this.props.onSubmit({title});
        
    }

    cancelEdit(){
        this.props.onDimiss();
    }

    render(){
        
        return(
            <ListGroupItem >
                
                <ActivityFormTitle 
                    initialValue={""}
                    onSubmit={this.addActity}
                    onDimiss={this.cancelEdit}
                    autoFocus={true}
                    />
                
            </ListGroupItem>
        )
    }
}

export default Activity;