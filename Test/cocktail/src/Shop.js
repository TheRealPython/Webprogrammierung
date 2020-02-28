import React from 'react';
import './App.css';

// function Shop(){

//     return(
//         <div>
//             <h1>Shop Page</h1>
//         </div>
//     )
// }

class Shop extends React.Component {
    constructor(props) {
      super(props);}
//       this.state = {value: 'coconut'};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('Your favorite flavor is: ' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Pick your ingredients:
//             <select multiple={true} value={this.state.value} onChange={this.handleChange}>
//               <option value="grapefruit">Grapefruit</option>
//               <option value="lime">Lime</option>
//               <option value="coconut">Coconut</option>
//               <option value="mango">Mango</option>
//             </select>
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }

  //On the change event for the select box pass the selected value back to the parent
  handleChange = (event) =>
  {
      let selectedValue = event.target.value;
      this.props.onSelectChange(selectedValue);
  }

  render(){
      let arrayOfData = this.props.arrayOfData;
      let options = arrayOfData.map((data) =>
              <option 
                  key={data.id}
                  value={data.id}
              >
                  {data.name}
              </option>
          );
      
          return (
          <select name="customSearch" className="custom-search-select" onChange={this.handleChange}>
              <option>Select Item</option>
              {options}
         </select>
      )
  }
}
export default Shop;