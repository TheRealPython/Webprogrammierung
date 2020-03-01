import React from 'react';
import '../CSS/App.css';

import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Recepie from './Recepie';

//This Component contains the logic for calculating the percentage 
//and recommending a cocktail

class Logic extends React.Component {


    // Function calculates percentage of matching ingredients
    checkForCocktail() {

        let returnCocktails = Array()

        // handles the case of no selection
        if (this.getElementArray().length == 0) {
            returnCocktails.push({
                name: "Please choose ingredients",
                alcohol: '',
                Description: 'Please select ingredients first',
                percentage: '-',
                output: ''
            })
            return returnCocktails
        }

        if (this.getElementArray()[0].label == "No Data") {
            return returnCocktails
        }

        // Caculates percentage of ingredients matching the recepies and suggests shopping
        if (this.props.cocktailDesc) {
            let data = this.props.cocktailDesc
            let checkedIndregents = this.getElementArray()
            data.map(cocktail => {

                let percentage = 0
                let ids = cocktail.req_id
                let amount = ids.length
                let matching = 0
                let output = ''
                checkedIndregents.map(data => {

                    if (ids.includes(data.id)) {
                        matching += 1
                    }
                })

                if (matching == 0) {
                    percentage = 0
                }
                else {
                    percentage = (matching / amount) * 100
                }

                if (percentage < 100) {
                    output = "Please go shopping"
                }

                returnCocktails.push({
                    name: cocktail.name,
                    alcohol: cocktail.alcohol,
                    Description: cocktail.Description,
                    percentage: percentage,
                    output: output
                })
            })
        }

        // sorts output: best match first
        returnCocktails.sort(function (a, b) {
            return parseFloat(b.percentage) - parseFloat(a.percentage)
        })

        return returnCocktails
    }

    // Error handling of an undefined/empty prop
    getElementArray() {
        if (this.props.cocktailData) {
            if (this.props.cocktailData.myArray) {
                if (Array.isArray(this.props.cocktailData.myArray.testArr)) {
                    return this.props.cocktailData.myArray.testArr
                }
            }
        }
        return [{ label: "No Data", value: "No Data", checked: false }]
    }

    render() {
        return (
            <div className="row">
                {this.checkForCocktail().map(label => {
                    console.log(label)

                    //render if unsuccessful
                    if (label.label == "No Data") {
                        return (<div></div>)
                    }

                    //render if successful matching
                    else {

                        return (
                            // some content
                            <div className="row">
                                <div className="card">
                                    <div className="card-content">
                                        <span className="card-title">{label.name}</span>
                                        <p>Matching ingredients: {label.percentage} %</p>
                                        <p>{label.output}</p>

                                        {/* renders a button with link to recepie */}
                                        <Router>
                                            <div><a href="/recepie"><Link to={{
                                                pathname: "/recepie",
                                                // pushes state (in fact the description constant from cocktail.js) to recepie
                                                state: { description: label.Description },
                                                test: { description: label.Description }
                                            }}>
                                                <Button cocktailDescr={label.Description}>Recepie</Button> </Link></a>
                                            </div>
                                            <Switch>
                                                <Route path="/recepie" component={Recepie} cocktailDescr={label.Description} cocktailName={label.name} />
                                            </Switch>
                                        </Router>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}

            </div>
        )
    }

}
export default Logic;