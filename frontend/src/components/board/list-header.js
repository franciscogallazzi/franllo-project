import React from 'react';
import ListForm from './list-form';

import { FaPenSquare } from 'react-icons/fa';

import {
    Button
} from 'reactstrap';


class ListHeader extends React.Component {

    state={
        visibleEditButton: false,
        editMode: false,
        name: ''
    }

    componentDidMount(){
        this.setState({
            name: this.props.name
        })
    }

    onSubmit(data){
        this.props.onSubmit(data);
        this.setState({
            editMode: false,
            name: data
        })
    }



    render(){
        const {editMode, visibleEditButton, name} = this.state;

        return(
            <div
                onMouseOver={()=> this.setState({visibleEditButton:true})}
                onMouseLeave={() => this.setState({visibleEditButton:false})}>
                
                {!editMode ? 
                <span>{name}</span> :
                <ListForm   
                    initialValue={name}
                    autoFocus={true}
                    onSubmit={this.onSubmit.bind(this)}
                    onDimiss={() => this.setState({editMode:false})}
                    />
                }
                
                <Button 
                    hidden={!(visibleEditButton && !editMode)}
                    close
                    onClick={() => this.setState({editMode: true})}>
                    <FaPenSquare size={20}/>
                </Button>
            </div>
        )
    }
}

export default ListHeader;