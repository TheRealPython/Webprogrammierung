import React from 'react';

class IngItem extends React.Component{

    render(){

        const { ingredient } = this.props;
    return(<div onClick={this.toggleIng}> {ingredient.text} </div>)
    }
    toggleIng = () => {
        this.props.updateIngFunction(this.props.ingredient);
    }
}



export default IngItem;