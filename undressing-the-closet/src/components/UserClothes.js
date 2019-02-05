import React, { Component } from 'react'
import Item from './Item'

class UserClothes extends Component {

    render() {
        const { items, delItem } = this.props
        return (
            <div>
                <h3>Your Outfit:</h3>
                {
              items.map(item =>
                <Item key={item.id} item={item} delItem={null}/>
              )
            }
            </div>
        )
    }
}

export default UserClothes