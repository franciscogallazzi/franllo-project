import React from 'react';
import { Button, Card} from 'reactstrap';
import SimpleInputForm from '../simple-input-form/simple-input-form';



class BoardCreate extends React.Component {

    state={
        viewForm: false
    }
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        
    }

    onSubmit(name){
        this.setState({
            viewForm: false
        })
        this.props.createAndRedirectToBoard({name:name})
        console.log("data", name);
    } 

    render() {
        const {viewForm} = this.state;
        return (
            <div>
                <Card 
                    body 
                    className="d-flex justify-content-center align-items-center"
                    style={{height:100}}>
                    {!viewForm ? 
                    <Button 
                        color="primary" 
                        onClick={() => this.setState({viewForm:true})} 
                        style={{width:'100%'}}>
                        Add Board
                    </Button>
                    :
                    <SimpleInputForm
                        autoFocus={true}
                        initialValue=""
                        onDimiss={()=>this.setState({viewForm:false})}
                        onSubmit={this.onSubmit}/>}
                </Card>
            </div>
        );
    }
}

export default BoardCreate;