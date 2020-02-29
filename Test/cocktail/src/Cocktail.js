import React from 'react';
import './App.css';
import DebugMessage from './DebugMessage';
import IngList from './IngList/IngList';
// 
import AddIng from './AddIng/addIng';
//import { render } from '@testing-library/react';

// function About(){

    // }


    const CocktailDescription = [
      { 
        req_id: [6, 8, 10],
        name : "FruitSplash",
        alcohol : "No",
        Description : "Mix Pineapple, Orange and Milk"
      },
      { req_id: [1, 7],
        name : "RumBear",
        alcohol : "Yes",
        Description : "Mix Rum and Coke"
      } ,
      { req_id: [1, 2, 3, 4, 5],
        name : "KillBill",
        alcohol : "Yes",
        Description : "Mix Rum, Vodka, Absinth, ..."
      } ,
      { req_id: [9, 8, 1],
        name : "Pina Colada",
        alcohol : "Yes",
        Description : "Mix Rum and Coke"
      },
      { req_id: [9, 8, 1],
        name : "Virgin Colada",
        alcohol : "Yes",
        Description : "Mix Rum and Coke"
      }
    ]




class Cocktail extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         ingredients: []
    //     };


    render() {

        
        //console.log(this.props.myArray.testArr)
        //console.log(this.props.jsonObjectOfClicked)
        //console.log(this.props.checkedArray)
        // console.log(this.prps.)
        // console.log(jsonObjectOfClicked)
        //const data = JSON.parse(this.props.testArr);
        console.log(CocktailDescription[0].req_id)
        console.log(this.props)
        const data = this.props.myArray;
        console.log(JSON.stringify(data))
        const strng = JSON.stringify(data);
        const news = strng;
        console.log(strng)

        // console.log(JSON.parse(news));
        //strng.myArray
        //  JSON.stringify(propsx.propsx.myArray.testArr)
        // if(this.) {
        //     if(this.props.myArray) {
        //     if(Array.isArray(this.propsx.myArray.testArr)) {
        //         console.log("Next Step")}}}
    
    // function match()

    function CocktailName(CocktailDescription){
            var l = CocktailDescription.length;
            var name = CocktailDescription.name;
            var alcohol = CocktailDescription.alcohol;

            console.log(name)
            
     
        //     name = CocktailDescription[]
        ;
        return (name)
    }

    function Frames(CocktailDescription){
        CocktailDescription.forEach(element => {console.log(element)
       return(element.name)})
    }

    return(
        <div className="row">
        <DebugMessage cocktailData = {this.props} cocktailDesc = {CocktailDescription}/>
        </div>
        )
        
        //this.props.myArray.testArr.map((todo) => ( <h3>{1 + 1}</h3>));
        
        
        
        //<div color= 'white'>HELLOOOOOOO</div>
        // <div color='green'>Hi</div>
        // </div>
        // );
    }
}

export default Cocktail;