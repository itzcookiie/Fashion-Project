import React, { Component } from 'react' 
import Item from './Item'

class OutfitsContainer extends Component {

    render() {
        return (
            <div>
                <h2>A single outfit</h2>
                {/* {console.log(this.props.outfit)} */}
                {this.props.outfit.map(outfit =>
                    < Item item={outfit} key={this.props.key} />)}
            </div>
        )
    }

}

export default OutfitsContainer