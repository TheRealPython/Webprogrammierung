import React from 'react';
import IngItem from '../IngItem/IngItem';

class IngList extends React.Component{

    render(){

        const { ingredients } = this.props;
        return(<div className='ingList'>
            {
                ingredients.map((_ingredient, _index) =>{
                    return(
                        <IngItem updateIngFunction={this.updateIng} key = {_index}>{_ingredient}</IngItem>
                    )
                })
            }
        </div>)
    }
    updateIng = (ingredient) => {
        this.props.updateIngFunction(ingredient);
    }
}

export default IngList;