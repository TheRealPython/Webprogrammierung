import React from 'react';
import './CSS/App.css';

import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import About from "./Components/Playground/About.js";
import Cocktail from "./Components/Cocktail.js"
import Recepie from './Components/Recepie';

//list of ingredients stored in an object
const selectCocktail = [
  {
    id: 1,
    label: "Rum",
    value: "Rum",
    checked: false
  },
  {
    id: 2,
    label: "Asbach",
    value: "Asbach",
    checked: false

  },
  {
    id: 3,
    label: "Stroh80",
    value: "Stroh80",
    checked: false

  },
  {
    id: 4,
    label: "Absinth",
    value: "Absinth",
    checked: false

  },
  {
    id: 5,
    label: "Vodka",
    value: "Vodka",
    checked: false
  },
  {
    id: 6,
    label: "OrangeJuice",
    value: "OrangeJuice",
    checked: false
  },
  {
    id: 7,
    label: "Coke",
    value: "Coke",
    checked: false
  },
  {
    id: 8,
    label: "PineappleJuice",
    value: "PineappleJuice",
    checked: false
  },
  {
    id: 9,
    label: "Milk",
    value: "Milk",
    checked: false
  },
  {
    id: 10,
    label: "PassionFruit",
    value: "PassionFruit",
    checked: false
  }

]

let jsonObjectOfClicked = Array();


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      testArr: [
        {
          label: "h",
          value: "",
          checked: false

        }]
    }
  }

  //set State on selection in multiselect box
  handleChangex = (event) => {
    jsonObjectOfClicked = event;
    //console.log(jsonObjectOfClicked)
    //console.log(typeof jsonObjectOfClicked)

    this.setState((state) => { 
      return { testArr: jsonObjectOfClicked } 
    })
    return jsonObjectOfClicked

  }
  
  //TEST STATE
  // handleSubmit(event) {
  //   alert('Your favorite flavor is: ' + this.state.value);
  //   event.preventDefault();
  // }

  render() {

    return (
      <div>
        <Router>  
          <div className="Navigon">
            <nav className="white">
              <div className="nav-wrapper">
                <h3 className="black-text">Cocktail</h3>
                <ul className='nav-links' id="nav-mobile" className="right">

                {/* Links/Routes:
                      Cocktails: 
                      Recepie:    standard
                      Playground: standard
                      Reset:      button automatically refreshs the page onClick */}
                  <li><a href="/cocktails"><Link to={{
                    pathname: "/cocktails",
                    state: { jsonObjectOfClicked: this.state }
                  }}>Cocktails</Link></a></li>
                  <li><a href="/recepie"><Link to="/recepie">Recepies</Link></a></li>
                  <li><a href="/about" ><Link to="/about">*Playground*</Link></a></li>
                  <li><a href="/"><Link onClick={() => window.location.reload(false)} to="/" >Reset</Link></a></li>
                </ul>
                {/* state: {jsonObjectOfClicked: this.state.jsonObjectOfClicked} */}
              </div>
            </nav>

            <Switch>
              <Route path='/' exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/recepie" component={Recepie} />
              <Route path="/cocktails" exact component={Cocktail} />
            </Switch>

          </div>
        </Router>

      {/* Best Multiselect in React :) */}
        <div className="row">
          <div className="card">
            <div>
              <form>
                <ReactMultiSelectCheckboxes id="finallyfckncheckbox" options={selectCocktail} onChange={this.handleChangex} /><br /><br />
              </form>
            </div>
          </div>
        </div>

        <div className="Cocktail">
          <Cocktail myArray={this.state} />
        </div>

      </div>
    );
  }
}

// Header on Landing Page / Start Page / Home Page / Welcome Page
const Home = () => (
  <div>
    <h1 className="white-text">Welcome to YOUR Cocktail</h1>
  </div>
)


export default App;


