import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class AddIng extends React.Component{

    constructor(){
        super();
        this.state ={
            ingredient: ''
        };
    }
    render(){
        return(<div className='addIngContainer'>
            <form onSubmit={(event)=> this.submitIng(event)}>
                <input id ='addIngInput' onChange={(event) => this.updateInput(event)} type='text'></input>
                {/* <button type ='submit'>Add ingredient</button>                 */}
                <Button variant="contained" color="primary"type ='submit'>Add ingredient
                </Button>
            </form>
           
            </div>);
    
}


updateInput = (event) => {
    this.setState({ingredient: event.target.value });
}

submitIng = (event) => {
    event.preventDefault();
    this.props.addIngFunction(this.state.ingredient);
    document.getElementById('addIngInput').value = '';
}
}

export default AddIng;