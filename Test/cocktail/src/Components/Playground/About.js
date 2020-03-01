import React from 'react';
import '../../CSS/App.css';

import IngList from './IngList/IngList';
import AddIng from './AddIng/addIng';

class About extends React.Component {
    constructor() {
        super();
        this.state = {
            ingredients: []
        };
    }

    // Hier befindet sich die Spielwiese des Entwicklers
    render() {
        return (
            <div className="row">
                <div className="card col s12">
                    <div>
                        --NOTE--<br></br>
                        This page is in development.
                        <br/>
                        <br/>
                        Diese Seite ist noch in Bearbeitung und ein zusätzliches Add-on.
                        Sie geht über die Anforderungen des Projektes hinaus und ist eine Spielwiese des Entwicklers.
                        Alle geforderten Funktionalitäten haben vollständig funktioniert und sind in anderen Komponenten der Webseite implementiert.
                        Hier wird der localStorage und async Funktionen getestet, die manuell Zutaten hinzufügen soll. 
                        <br/>
                        Daher ist dieser Ordner auch nicht Teil der Doku.
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
            this.setState({ ingredients: savedIng }); //asynchronous function
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

export default About;