import React, { Component } from 'react'
import Item from './Item'


class ClothesCollection extends Component {
    render() {
        const { items, delItem } = this.props
        return (
            <div>
            <h2>Here's your inventory:</h2>
            { items.length === 0 && <p>Sorry, you don't have any items.</p>}
            {
              items.map(item =>
                <Item key={item.id} item={item} delItem={delItem}/>
              )
            }
            {/* <button onClick={handleClick}>Add a new item</button> */}
            </div>    
        )
    }

}

export default ClothesCollection