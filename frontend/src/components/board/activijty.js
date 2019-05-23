import React from 'react';
import { FaPenSquare } from 'react-icons/fa';

import {
    ListGroupItem,
    Button
} from 'reactstrap';

import ActivityFormTitle from './ativity-form-title'


class Activity extends React.Component {

    state={
        visibleEditButton: false,
        editMode: false
    }

    constructor(props){
        super(props);

        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onClickEditButton = this.onClickEditButton.bind(this);
        this.editTitle = this.editTitle.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
    }

    componentDidMount(){
        this.setState({
            title: this.props.data.title
        })
    }

    onMouseOver(){
        this.setState({
            visibleEditButton: true
        })
    }

    onMouseLeave(){
        this.setState({
            visibleEditButton: false
        })
    }

    onClickEditButton(){
        this.setState({
            editMode: true,
            title: this.props.data.title
        })
    }

    editTitle(title){
        this.props.edit(this.props.data.id, {title});
        this.setState({
            editMode: false,
            title: title
        })
    }

    cancelEdit(){
        this.setState({
            title: this.props.data.title,
            editMode: false
        })
    }

    render(){
        const {visibleEditButton, editMode, title} = this.state;
        
        return(
            <ListGroupItem 
                onMouseOver={this.onMouseOver}
                onMouseLeave={this.onMouseLeave}>
                
                {!editMode ? title : 
                <ActivityFormTitle 
                    initialValue={title}
                    onSubmit={this.editTitle}
                    onDimiss={this.cancelEdit}
                    autoFocus={true}
                    />}
                
                <Button 
                    hidden={!(visibleEditButton && !editMode)}
                    close
                    onClick={this.onClickEditButton}>
                    <FaPenSquare size={20}/>
                </Button>
            </ListGroupItem>
        )
    }
}

export default Activity;