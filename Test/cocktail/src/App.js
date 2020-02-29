import React from 'react';
//import { CheckBoxSelection, Inject, MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import './App.css';
import IngList from './IngList/IngList';
// 
import AddIng from './AddIng/addIng';
import {BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// Input Field
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// 
// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CheckboxContainer from './checkboxHandler';
import Nav from './Nav';
import About from "./About.js";
import Cocktail from "./Cocktail.js"
import Shop from './Shop';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// export default function App() {
//   return (

const whatYouNeedForCocktail = [
  { id: 1,
    label : "Rum",
    value : "Rum",
    checked : false
  },
  { id: 2,
    label : "Asbach",
    value : "Asbach",
    checked : false

  } ,
   { id: 3,
    label : "Stroh80",
    value : "Stroh80",
    checked : false

  } ,
   { id: 4,
    label : "Absinth",
    value : "Absinth",
    checked : false

  },
    {
      id: 5,
    label : "Vodka",
    value : "Vodka",
    checked : false
  },
  {
    id: 6,
  label : "OrangeJuice",
  value : "OrangeJuice",
  checked : false
},
{
  id: 7,
label : "Coke",
value : "Coke",
checked : false
},
{
  id: 8,
label : "PineappleJuice",
value : "PineappleJuice",
checked : false
},
{
  id: 9,
label : "Milk",
value : "Milk",
checked : false
},
{
  id: 10,
label : "PassionFruit",
value : "PassionFruit",
checked : false
}

]

  const arrayOfData = [
    {
      id: '1 - Jerry',
      name: 'Jerry'    
    },
    {
      id: '2 - Elaine',
      name: 'Elaine'    
    },
    {
      id: '3 - Kramer',
      name: 'Kramer'    
    },
    {
      id: '4 - George',
      name: 'George'    
    },
  ];

let jsonObjectOfClicked = Array();


// function getValueOfMultipleSelectBox() {
//   var select =this.refs.input.getInputDOMNode();
//   var options = select.options;
//   var firstIndex = select.selectedIndex;
//   var selectedValues = [];
//   var currentOption;
//   if (firstIndex === -1) return [];
//   for (var i = firstIndex; i < options.length; ++i) {
//     currentOption = options[i];
//     if (currentOption.selected) {
//       selectedValues.push(currentOption.value);
//     }
//   }
//   return selectedValues;
// }
   
class App extends React.Component {

  // constructor(){
  //   super();
  //   this.state = {
  //     ingredients: []
  //   };
  // }

  constructor(props){
    super(props)
    this.state={
      testArr: [
      {
        label : "h",
        value : "",
        checked : false
    
      }]
    
    //   fruites: [
    //     { label: 'Zitrone', value: 1, select: false },
    //     { label: 'Blaubeeren', value: 2, select: true},

    //     // '{id: 1, value: "banana", isChecked: false},
    //     // {id: 2, value: "apple", isChecked: false},
    //     // {id: 3, value: "mango", isChecked: false},
    //     // {id: 4, value: "grap", isChecked: false}'

    //   ]
    };
    this.handleChangex = this.handleChangex.bind(this);


  }
  // handleSelectChange = (selectedValue) =>{
  //   this.setState({
  //     selectedValue: selectedValue
  //   });
  // }

  handleChangex = (event) => {
    jsonObjectOfClicked = event;
    console.log(jsonObjectOfClicked)
    //console.log(typeof jsonObjectOfClicked)
    
    this.setState((state) => {return {testArr: jsonObjectOfClicked}})
    //const myObject = JSON.stringify(jsonObjectOfClicked) 
    //console.log(this.state.testArr)

    return jsonObjectOfClicked

}



handleSubmit(event) {
  alert('Your favorite flavor is: ' + this.state.value);
  event.preventDefault();
}
 

  render(){
   
    return(
      <div>
      <Router>
        <div className="Navigon">
          <nav className="white">
        <div className="nav-wrapper">
            <h3 className="black-text">Cocktail</h3>
            <ul className='nav-links' id="nav-mobile" className="right">
                <li><a href="/"><Link to="/">Home</Link></a></li>
                <li><a href="/about"><Link to="/about">About__</Link></a></li>
                <li><a href="/shop"><Link to="/shop">Recepies</Link></a></li>
                <li><a href="/cocktails"><Link to={{pathname: "/cocktails", 
                                                      state: {jsonObjectOfClicked: this.state}
                                                }}>Cocktails</Link></a></li>
            </ul>
           {/* state: {jsonObjectOfClicked: this.state.jsonObjectOfClicked} */}
        </div>
      </nav>
          <Switch>
          <Route path='/' exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/Shop" component={Shop} />
          <Route path="/cocktails" exact component={Cocktail} />
          </Switch>
          {/* <Route path="/about" component={About} /> */}
          </div>
      </Router>
<div className="row">
  <div className="card">
<div>
  <form><ReactMultiSelectCheckboxes id="ourfuckingcheckbox" options={whatYouNeedForCocktail} onChange={this.handleChangex} /> <br /><br />


  </form>
  <div>
    {/* Selected value: {this.jsonObjectOfClicked} */}
  </div>
  </div>
</div>
</div> 

<div className="Cocktail">

  <Cocktail myArray = {this.state} />

</div>

</div>

); }
}
    

const Home = () => (
  <div>
    <h1 className="white-text">Home Page: Create YOUR Cocktail</h1>
  </div>
)

const options = [
  { label: 'Zitrone', value: 1, select: false },
  { label: 'Blaubeeren', value: 2, select: true},
];


 
export default App;





// // import About from 
// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {open: false};
//   }

//   handleToggle = (event) => this.setState({open: !this.state.open});

//   render() {

//     const {styleFromProps} = this.props;
//     const contentStyle = {  ...styleFromProps, transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)' };

//     if (this.state.open) {
//       contentStyle.marginLeft = 256;
//     }

// const useStyles = makeStyles(theme => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// export default function SimpleSelect() {
//   const classes = useStyles();
//   const [age, setAge] = React.useState('');

//   const inputLabel = React.useRef(null);
//   const [labelWidth, setLabelWidth] = React.useState(0);
//   // React.useEffect(() => {
//   //   setLabelWidth(inputLabel.current.offsetWidth);
//   // }, []);

//   const handleChange = event => {
//     setAge(event.target.value);
//   };

//   return (
//     <Router>
          
//     <div>
    
//     <AppBar position="static" onLeftIconButtonTouchTap={this.handleToggle}>
//       <Toolbar>
//         <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//           <MenuIcon />
//         </IconButton>
//         <Typography variant="h6" className={classes.title}>
//           News
//         </Typography>
//         <Button color="inherit">Login</Button>
//       </Toolbar>
//     </AppBar>
  
//     <Drawer containerStyle={{height: 'calc(100% - 64px)', top: 64}} docked={true} width={200} open={this.state.open} zDepth={2}>
//               <Link to="/dashboard" style={{ textDecoration: 'none' }}><MenuItem>Dashboard</MenuItem></Link>
//               <Link to="/information" style={{ textDecoration: 'none' }}><MenuItem>Information</MenuItem></Link>
//             </Drawer>

//             <Route path="/dashboard" component={(props) => <Dashboard {...props} open={this.state.open}/>} />
//             <Route path="/information" component={(props) => <Information {...props} open={this.state.open}/>} />
//           </div>
//         </Router>





      {/* <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Some important helper text</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Select value={age} onChange={handleChange} displayEmpty className={classes.selectEmpty}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Without label</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Age
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={age}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Label + placeholder</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl} disabled>
        <InputLabel id="demo-simple-select-disabled-label">Name</InputLabel>
        <Select
          labelId="demo-simple-select-disabled-label"
          id="demo-simple-select-disabled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Disabled</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl} error>
        <InputLabel id="demo-simple-select-error-label">Name</InputLabel>
        <Select
          labelId="demo-simple-select-error-label"
          id="demo-simple-select-error"
          value={age}
          onChange={handleChange}
          renderValue={value => `⚠️  - ${value}`}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Error</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-readonly-label">Name</InputLabel>
        <Select
          labelId="demo-simple-select-readonly-label"
          id="demo-simple-select-readonly"
          value={age}
          onChange={handleChange}
          inputProps={{ readOnly: true }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Read only</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Auto width</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Select value={age} onChange={handleChange} displayEmpty className={classes.selectEmpty}>
          <MenuItem value="" disabled>
            Placeholder
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Placeholder</FormHelperText>
      </FormControl>
      <FormControl required className={classes.formControl}>
        <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={age}
          onChange={handleChange}
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
          Age
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          labelWidth={labelWidth}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl> */}

      // <FormControl variant="filled" className={classes.formControl}>
      //   <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
      //   <Select
      //     labelId="demo-simple-select-filled-label"
      //     id="demo-simple-select-filled"
      //     value={age}
      //     onChange={handleChange}
      //   >
      //     <MenuItem value="">
      //       <em>None</em>
      //     </MenuItem>
      //     <MenuItem value={10}>Ten</MenuItem>
      //     <MenuItem value={20}>Twenty</MenuItem>
      //     <MenuItem value={30}>Thirty</MenuItem>
      //   </Select>
      // </FormControl>
    
      // <Router>
      // <div>
      //   <nav>
      //     <ul>
      //       <li>
      //         <Link to="/">Home</Link>
      //       </li>
      //       <li>
      //         <Link to="/about">About</Link>
      //       </li>
      //       <li>
      //         <Link to="/users">Users</Link>
      //       </li>
      //     </ul>
      //   </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>); */}


{/* function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

// export default App; */}
