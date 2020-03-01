import React from 'react';
import '../CSS/App.css';
import Logic from './Logic';

// Full recepie description
const CocktailDescription = [
  {
    req_id: [6, 8, 10],
    name: "FruitSplash",
    alcohol: "No",
    Description: "Mix Pineapple, Orange and Milk"
  },
  {
    req_id: [1, 7],
    name: "RumBle",
    alcohol: "Yes",
    Description: "Mix 200ml Rum and 300ml Coke"
  },
  {
    req_id: [1, 2, 4, 5],
    name: "KillBill",
    alcohol: "Yes",
    Description: "Mix 100ml Rum, 100ml Vodka, 100ml Absinth and 100ml Asbach"
  },
  {
    req_id: [9, 8, 1],
    name: "Pina Colada",
    alcohol: "Yes",
    Description: "Mix 200ml Milk, 200ml Pineapple Juice and 100ml Rum"
  },
  {
    req_id: [9, 8, 1],
    name: "Virgin Colada",
    alcohol: "No",
    Description: "Mix 300 ml Milk and 200ml Pineapple Juice"
  },
  {
    req_id: [3, 5],
    name: "VodEng",
    alcohol: "Yes",
    Description: "Mix 300 ml Vodka and 200ml RBull"
  },
  {
    req_id: [11],
    name: "Beer4Epedemia",
    alcohol: "Yes",
    Description: "500ml Corona"
  }
]

class Cocktail extends React.Component {
  render() {

    // Some Logs on Console for Error Handling

    // console.log(this.props.myArray.testArr)
    // console.log(this.props.jsonObjectOfClicked)
    // console.log(this.props.checkedArray)
    // console.log(this.prps.)
    // console.log(jsonObjectOfClicked)
    // const data = JSON.parse(this.props.testArr);
    // console.log(CocktailDescription[0].req_id)
    // console.log(this.props)
    // const data = this.props.myArray;
    // console.log(JSON.stringify(data))
    // const strng = JSON.stringify(data);
    // const news = strng;
    // console.log(strng)


    return (

      //   This component (Logic) contains complete logic of matching Cocktails.
      //   Results are rendered per Cocktail in a <div> box.

      <div className="row">
        <Logic cocktailData={this.props} cocktailDesc={CocktailDescription} />
      </div>
    )
  }
}

export default Cocktail;