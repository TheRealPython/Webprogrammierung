import React from 'react';

class AddIng extends React.Component{

    constructor(){
        super();
        this.state ={
            ingredient: ''
        };
    }
    render(){
        return(<div className='addIngContainer'>
            <form>
                <input onChange={(event) => this.updateInput(event)} type='text'></input>
            </form>
            <button onSubmit={(event)=> this.submitIng(event)} type = 'submit'>Add ingredient</button>
            
            </div>);
    }


updateInput = (event) => {
    this.setState({ingredient: event.target.value });
}

submitIng = (event) => {
    event.preventDefault();
    this.props.addIngFunction(this.state.ingredient)
}
}

export default AddIng;