


import React from 'react';
import './App.css';

import IngList from './IngList/IngList';
// 
import AddIng from './AddIng/addIng';
//import { render } from '@testing-library/react';

// function About(){
class About extends React.Component {
    constructor() {
        super();
        this.state = {
            ingredients: []
        };
    }


    render() {
        return (
            <div className="row">
                <div className="card col s12">
            <div>
                <AddIng addIngFunction={this.addIng}></AddIng>
                <IngList updateIngFunction={this.updateIng} ingredients={this.state.ingredients}></IngList>
                {/* ingredient={this.updateIng} */}
            </div>
            </div>
            </div>
            );

    }

    componentDidMount = () => {
        const ingredients = localStorage.getItem('ingredients');
        if (ingredients) {
            const savedIng = JSON.parse(ingredients);
            this.setState({ ingredients: savedIng }); //asynchronos function
        } else {
            console.log('nadaIngredients');
        }
    }

    addIng = async (ingredient) => {
        await this.setState({
            ingredients: [...this.state.ingredients, {
                text: ingredient,
                completed: false
            }]
        });
        localStorage.setItem('ingredients', JSON.stringify(this.state.ingredients));
        console.log(localStorage.getItem('ingredients'));

    }

    updateIng = async (ingredient) => {
        const newIngredients = this.state.ingredients.map(_ingrdient => {
            if (ingredient === _ingrdient)
                return {
                    text: ingredient.text,
                    completed: !ingredient.completed
                }
            else
                return _ingrdient
        });
        await this.setState({ ingredients: newIngredients });
        localStorage.setItem('ingredients', JSON.stringify(this.state.ingredients));
    }

}

// return(
//     <div>
//         <h1>About Page</h1>
//     </div>
// )


export default About;