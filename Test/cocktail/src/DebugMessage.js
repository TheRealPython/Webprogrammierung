import React from 'react';
import './App.css';
import { render } from '@testing-library/react';


class DebugMessage extends React.Component{
    checkForCocktail() {
        let returnCocktails = Array()
        if(this.getElementArray()[0].label == "No Data") {
            return returnCocktails 
        }
        if(this.props.cocktailDesc) {
            let data = this.props.cocktailDesc
            let checkedIndregents = this.getElementArray()
            data.map(cocktail => {
                let percentage = 0
                let ids = cocktail.req_id
                let amount = ids.length
                let matching = 0
                checkedIndregents.map(data => {
                    if(ids.includes(data.id)) {
                        matching += 1
                    }
                })
                if(matching == 0) {
                    percentage = 0
                } else {
                    percentage = (matching / amount) * 100
                }
                returnCocktails.push({
                    name : cocktail.name,
                    alcohol : cocktail.alcohol,
                    Description : cocktail.Description,
                    percentage : percentage
                })
            })
        }
        returnCocktails.sort(function(a,b) {
            return  parseFloat(b.percentage) - parseFloat(a.percentage)
        })
        return returnCocktails
    }
    getElementArray() {
        if(this.props.cocktailData) {
            if(this.props.cocktailData.myArray) {
            if(Array.isArray(this.props.cocktailData.myArray.testArr)) {
                return this.props.cocktailData.myArray.testArr
            }
        }
    }
    return [ { label : "No Data", value : "No Data", checked: false }]
    }

    render() {
    return (
                <div className="row">
                        {this.checkForCocktail().map(label => {
                            console.log(label)
                            if(label.label == "No Data") {
                                return( <div></div> )
                            } else {
                            return (
                                <div className="row">
                                    <div className="card">
                                    <div className="card-content">
                            <span className="card-title">{label.name}</span>
                            <p>Percentage matching: {label.percentage}</p>
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
    export default DebugMessage;