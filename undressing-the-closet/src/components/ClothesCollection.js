import React, { Component } from 'react'
import Item from './Item'
import NewItem from './NewItem';


class ClothesCollection extends Component {

  //To go back to OG copy, take of onClick for increment Counter

    render() {
        const { items, delItem, top, bottom, shoes, accessories, incrementCounter } = this.props
        return (
            <div>
            <h2>Here's your wardrobe:</h2>
            { items.length === 0 && <p>Sorry, you don't have any items.</p>}
                Tops:
            <div className='belt'>
            <button>Less</button>
            {
              top.map(item =>
                // <Item key={item.id} item={item} delItem={delItem}/>
                <Item key={item.id} item={item} delItem={delItem}/>
              )
            }
            <button onClick={() => incrementCounter('counter1')}>More</button>
            </div>
            Bottom:
            <div className='belt'>
            <button>Less</button>
            {
              bottom.map(item =>
                // <Item key={item.id} item={item} delItem={delItem}/>
                <Item key={item.id} item={item} delItem={delItem}/>
              )
            }
              <button onClick={() => incrementCounter('counter2')}>More</button>
                </div>
            Shoes:
            <div className='belt'>
            <button>Less</button>
            {
              shoes.map(item =>
                // <Item key={item.id} item={item} delItem={delItem}/>
                <Item key={item.id} item={item} delItem={delItem}/>
              )
            }
            <button onClick={() => incrementCounter('counter3')}>More</button>
            </div>
            Accessories:
            <div className='belt'>
            <button>Less</button>
            {
              accessories.map(item =>
                // <Item key={item.id} item={item} delItem={delItem}/>
                <Item key={item.id} item={item} delItem={delItem}/>
              )
            }
            <button onClick={() => incrementCounter('counter4')}>More</button>
            </div>

            {/* <button onClick={handleClick}>Add a new item</button> */}
            </div>    
        )
    }

}

export default ClothesCollection