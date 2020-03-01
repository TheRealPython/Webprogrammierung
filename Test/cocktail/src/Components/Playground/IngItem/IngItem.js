import React from 'react';
import './style.css';

class IngItem extends React.Component{

    render(){

        const { ingredient } = this.props;
    return(<div className= {'IngItem' + (ingredient.completed ? ' completed': '')} onClick={this.toggleIng}> {ingredient.text} </div>)
    }
    toggleIng = () => {
        this.props.updateIngFunction(this.props.ingredient);
    }
}



export default IngItem;