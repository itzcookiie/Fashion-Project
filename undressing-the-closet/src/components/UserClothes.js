import React, { Component } from 'react'
import Item from './Item'
import NewItem from './NewItem';

class UserClothes extends Component {

    render() {
        const { items, delItem, randomItem, findItem, selectItem, displayOutfit,
        keepItem } = this.props
        return (
            <div>
                <h3>Your Outfit:</h3>
                {
              items.map(item =>
                <Item findItem={findItem} randomItem={randomItem} shouldHaveButtons={true}
                 key={item.id} item={item} delItem={null} selectItem={selectItem}
                 displayOutfit={displayOutfit} keepItem={keepItem} noButtons={true} />
              )
            }
            </div>
        )
    }
}

export default UserClothes