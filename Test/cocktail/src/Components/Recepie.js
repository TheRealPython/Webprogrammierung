import React from 'react';
import '../CSS/App.css';
import DebugMessage from './DebugMessage';
import IngList from './Playground/IngList/IngList';





class Recepie extends React.Component {
    state = {}
    // constructor() {
    //     super();
    //     this.state = {
    //         ingredients: []
    //     };
    
        
    // console.log(this.props.cocktailDescr);
    getDescription(){
        if (this.props.location) {
            if (this.props.location.test){
                   return this.props.location.test.description
            }
         
        }
    }

    render() {
        console.log(this.props.location.test);
    return(
        
        <div className = "row">
         
             <div className="card-content">
               {this.getDescription()}
                
                </div>
            
        {/* </div>
        </div>
        <div className = "recipe">HAsldkasdljasdl</div> */}
         </div>
    )
    }
}

export default Recepie;