import React from 'react';
import '../CSS/App.css';


class Recepie extends React.Component {

    state = {}

    // passes description of cocktails to recepie
    getDescription() {
        if (this.props.location) {
            if (this.props.location.test) {
                return this.props.location.test.description
            }

        }
    }

    // renders description of cocktail (for every Cocktail beneath RECEPIE-button)
    // onClick of Button in Logic, there's a route to recepie
    render() {

        console.log(this.props.location.test);
        
        return (

            <div className="row">
                <div className="card-content">
                    {this.getDescription()}

                </div>
            </div>
        )
    }
}

export default Recepie;