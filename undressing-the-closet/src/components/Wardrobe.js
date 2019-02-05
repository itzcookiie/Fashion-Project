import React from 'react'
import API from '../API'
import ClothingForm from './ClothingForm'
import ClothesCollection from './ClothesCollection';
import UserClothes from './UserClothes';

class Wardrobe extends React.Component {
  state = {
    items: [],
    userItems: [],
    // top: [],
    // trousers: [],
    // shoes: [],
    // accessories: [],
    category: '',
    colour: '',
    value: ''
    // garmentID: ''
  }

  handleChange = (e) => this.setState({ value: e.target.value })

  handleGarment = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  //Tried keep ID in state but just made state in item instead
  // getID = (id) => {
  //   // console.log(e)
  //   // console.log(this.props.item.id)
  //   this.setState({
  //     garmentID: id
  //   })
  // }

  singleGarments = () => {
    const allItems = this.state.items 
    let top = []
    top = allItems.filter(item => item.category === 'top')
    let trousers = []
    trousers = allItems.filter(item => item.category === 'trousaurs')
    let shoes = []
    shoes = allItems.filter(item => item.category === 'shoes')
    let accessories = []
    accessories = allItems.filter(item => item.category === 'accessories')
    this.setState({
      userItems: [
      top[Math.floor(Math.random() * top.length)],
      trousers[Math.floor(Math.random() * trousers.length)],
      shoes[Math.floor(Math.random() * shoes.length)],
      accessories[Math.floor(Math.random() * accessories.length)]
    ]
  })
  }

  handleSubmit = () => {
    const { garment, colour, value } = this.state
    API.addGarments(value, colour, garment)
    .then(item => this.setState({items: [...this.state.items, item]}))
  }

  //Changed function to singleGarments because I didn't want to store too many things in state
  // pickOutfit = () => {
  //   let top = this.state.top
  //   let trousers = this.state.trousers
  //   let shoes = this.state.shoes
  //   let accessories = this.state.accessories
  //   // let userItems = this.state.userItems
  //   this.setState({
  //     userItems: [
  //     top[Math.floor(Math.random() * top.length)],
  //     trousers[Math.floor(Math.random() * trousers.length)],
  //     shoes[Math.floor(Math.random() * shoes.length)],
  //     accessories[Math.floor(Math.random() * accessories.length)]
  //   ]
  //   //   [
  //   //   top[Math.floor(Math.random() * top.length)], 
  //   //   trousers[Math.floor(Math.random() * top.length)], 
  //   //   shoes[Math.floor(Math.random() * top.length)],
  //   //   accessories[Math.floor(Math.random() * top.length)],
  //   // ]
  //   })
  // }
  
  delItem = (id) => {
    // console.log(this.props.item)
    const filtered = this.setState({
      items: this.state.items.filter(item => item.id !== id)
    })
    API.deleteGarment(id)
    .then(console.log) 
  }

  getWardrobe () {
    API.getWardrobe()
    .then(items => 
      this.setState({
        // {
      items: items
        //This is how I used my pickOutfit function making the categories in state and setting them here
      // top: items.filter(item => item.category === 'top'),
      // trousers: items.filter(item => item.category === 'trousaurs'),
      // shoes: items.filter(item => item.category === 'shoes'),
      // accessories: items.filter(item => item.category === 'accessories')
    })
  // }
    )
  }

  style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap'
  }

componentDidMount() {
  const { username, history } = this.props
  if (!username) {
    history.push('/signin')
  } else {
  this.getWardrobe()
  }
}

  render () {
    const { items, value, garment, colour, userItems } = this.state
    const { handleClick, handleChange, handleGarment, handleSubmit, delItem } = this

    return (
      <div style={this.style} className='user-list'>
      <h4>Add new garment</h4>
        <ClothingForm 
        handleChange={handleChange} 
        value={value} 
        garment={garment} 
        colour={colour}
        handleGarment={handleGarment}
        handleSubmit={handleSubmit} />
        <ClothesCollection items={items} delItem={delItem} />
        <button onClick={this.singleGarments}>Randomizer</button>
        <UserClothes items={userItems} delItem={null} />
        </div>
    )
  }
}

export default Wardrobe

// getID={getID} 