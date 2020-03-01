import React from 'react';
import '../CSS/App.css';

// import { Router } from 'react-router';
// import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// const LinkBehavior = React.forwardRef((props, ref) => (
//     <RouterLink ref={ref} to="/recepie" {...props} />
//   ));
import Recepie from './Recepie';

class DebugMessage extends React.Component{
    checkForCocktail() {
        let returnCocktails = Array()
        if(this.getElementArray().length == 0){
            returnCocktails.push({
                name : "Please choose ingredients",
                alcohol : '',
                Description : 'Please select ingredients first',
                percentage : '-',
                output : ''
            })
            return returnCocktails
        }
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
                let output = ''
                checkedIndregents.map(data => {
                    if(ids.includes(data.id)) {
                        matching += 1
                    }
                })
                if(matching == 0) {
                    percentage = 0
                }
                else {
                    percentage = (matching / amount) * 100
                }
                if (percentage < 100) {
                    output = "Please go shopping"
                }

                returnCocktails.push({
                    name : cocktail.name,
                    alcohol : cocktail.alcohol,
                    Description : cocktail.Description,
                    percentage : percentage,
                    output : output
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
                            <p>Matching ingredients: {label.percentage} %</p>
                            <p>{label.output}</p>


                            <Router>
        
               <div><a href="/recepie"><Link to={{pathname: "/recepie",
            state: {description: label.Description}, 
            test: {description: label.Description}}}>
                   <Button cocktailDescr={label.Description}>Recepie</Button> </Link></a>
               </div>
          <Switch>
   
          <Route path="/recepie" component={Recepie} cocktailDescr={label.Description} cocktailName = {label.name} />
         
          </Switch>
        
      </Router>
                            {/* <Router path="/recepie" component={Recepie}>
                                <div>
                            <li><a href="/recepie">
                            <Link to = '/recepie'>
                            
                            <Button variant = "contained" >Recepie</Button>
                            </Link></a></li>
                            </div>
                            </Router> */}
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