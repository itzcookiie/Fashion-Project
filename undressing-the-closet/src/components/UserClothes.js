import React, { Component } from 'react'
import Item from './Item'
import NewItem from './NewItem';

class UserClothes extends Component {

    render() {
        const { items, delItem } = this.props
        return (
            <div>
                <h3>Your Outfit:</h3>
                {
              items.map(item =>
                <NewItem key={item.id} item={item} delItem={null}/>
              )
            }
            </div>
        )
    }
}

export default UserClothes