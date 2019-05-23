import React from 'react';

import {
    Input,
    Form
} from 'reactstrap';

class ActivityFormTitle extends React.Component {

    state={
        value:""
    }

    constructor(props){
        super(props)
        this.textInput = React.createRef();
        this.onSubmit = this.onSubmit.bind(this);
        this.onDimiss = this.onDimiss.bind(this);
    }

    componentDidMount(){
        if (this.props.autoFocus) {
            this.textInput.current.focus();
        }
        this.setState({
            value: this.props.initialValue
        })
    }

    onSubmit(event){
        event.preventDefault();
        if (this.state.value.trim().length > 0) {
            this.props.onSubmit(this.state.value);
        }
        this.setState({
            value:""
        })
        
    }

    onDimiss(){
        this.props.onDimiss();
    }

    render(){
        const {value} = this.state;
        return (
            <Form onSubmit={this.onSubmit}>
                <Input 
                    type="text" 
                    name="title" 
                    value={value}
                    onChange={(event) => this.setState({value:event.target.value})}
                    innerRef={this.textInput}
                    onBlur={this.onDimiss}
                />
            </Form>
            
        )
    }

}

export default ActivityFormTitle;