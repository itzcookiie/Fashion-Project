import React, { Component } from 'react'
import Item from './Item'
import NewItem from './NewItem';


class ClothesCollection extends Component {



    render() {
        const { items, delItem, top, trousers, shoes, accessories } = this.props
        return (
            <div>
            <h2>Here's your wardrobe:</h2>
            { items.length === 0 && <p>Sorry, you don't have any items.</p>}
                Tops:
            <div className='belt'>
            {
              top.map(item =>
                // <Item key={item.id} item={item} delItem={delItem}/>
                <NewItem key={item.id} item={item} delItem={delItem}/>
              )
            }
            </div>
            Trousers:
            <div className='belt'>
            {
              trousers.map(item =>
                // <Item key={item.id} item={item} delItem={delItem}/>
                <NewItem key={item.id} item={item} delItem={delItem}/>
              )
            }
                </div>
            Shoes:
            <div className='belt'>
            {
              shoes.map(item =>
                // <Item key={item.id} item={item} delItem={delItem}/>
                <NewItem key={item.id} item={item} delItem={delItem}/>
              )
            }
            </div>
            Accessories:
            <div className='belt'>
                <div className="sushi">
                    <div className="plate">
            {
              accessories.map(item =>
                // <Item key={item.id} item={item} delItem={delItem}/>
                <NewItem key={item.id} item={item} delItem={delItem}/>
              )
            }
            </div>
            </div>
            </div>

            {/* <button onClick={handleClick}>Add a new item</button> */}
            </div>    
        )
    }

}

export default ClothesCollection