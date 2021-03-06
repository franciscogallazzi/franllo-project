
import React from 'react';

import {
    Form,
    Input
} from 'reactstrap';

class SimpleInputForm extends React.Component {

    state = {
        value: ""
    }

    constructor(props){
        super(props);
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

    onSubmit(event) {
        event.preventDefault();
        if (this.state.value.trim().length) {
            this.props.onSubmit(this.state.value);
            this.setState({
                value: ''
            })
        }
    }

    onDimiss(){
        this.props.onDimiss()
    }

    render(){

        const {value} = this.state;
        return(
            <Form onSubmit={this.onSubmit} autoComplete={"off"} style={{width:'100%'}}>
                <Input 
                    autoComplete={"off"}
                    name="value"
                    value={value}
                    onChange={ event => this.setState({value : event.target.value})}
                    innerRef={this.textInput}
                    onBlur={this.onDimiss}
                />
            </Form>

        )
    }
}

export default SimpleInputForm;