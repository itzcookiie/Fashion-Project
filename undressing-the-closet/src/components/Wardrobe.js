import React from 'react'
import API from '../API'
import ClothingForm from './ClothingForm'
import ClothesCollection from './ClothesCollection';
import UserClothes from './UserClothes';

class Wardrobe extends React.Component {
  state = {
    items: [],
    userItems: [],
    top: [],
    bottom: [],
    shoes: [],
    accessories: [],
    category: '',
    colour: '',
    counter1: 0,
    counter2: 0,
    counter3: 0,
    counter4: 0,
    display: false,
    topKeep: false,
    bottomKeep: false,
    shoesKeep: false,
    accessoriesKeep: false
    // value: ''
    // garmentID: ''
  }


  handleChange = (e, { value }) => this.setState({ value })

  handleGarment = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = () => {
    const { garment, colour, value } = this.state

    API.addGarments(value, colour, garment)
    .then(item => {
      const category = item.category
    this.setState({
      [category]: [...this.state[item.category], item]
    })
  }
      )

  }

  showDisplay = () => {
    this.setState({
      display: true
    })
  }

  hideDisplay = () => {
    this.setState({
      display: false
    })
  }

  //Trying to only show 4 garments and have a button with these methods that renders
  // 4 more aka sushi saga
  nextFour = (category, counter) => {
    // console.log(this.state['top'].length)
    if (this.state[counter] < this.state[category].length) {
    //this.state.top
    return this.state[category].slice(this.state[counter], this.state[counter] + 4)
    } else if (this.state[category].length % 4 === 0 ) {
      let lowerNum = this.state[category].length - 4
      return this.state[category].slice(lowerNum, this.state[category].length)
    } else {
      let diff = this.state[category].length % 4
      let totalDiff = this.state[category].length - diff
      return this.state[category].slice(totalDiff, this.state[category].length)
    }
    // else {
    //   let totalDiff = counter - this.state[category]
    //   let newDiff = this.state[category].length - totalDiff
    //   return this.state[category].slice(newDiff, this.state[category].length)
    // }
  }

  lessFour = (category, counter) => {
    if (this.state[counter] > this.state[category].length) {

    }
  }

  //Train of thought
  //If counter goes beyound category.length array in state
  //Make counter = the closest number that is divisible by 4
  //E.g. for an array of length 10 that will be 12
  //Then work from 12 and be able to minus by 4
  decrementCounter = (category, counter) => {
    if (this.state[counter] - this.state[category].length > 4) {
      let diff = this.state[category].length % 4
      let newDiff = 4 - diff 
      let totalDiff = this.state[category].length + newDiff
    this.setState({
      [counter]: totalDiff - 8
    })
    } else if (this.state[counter] % 4 === 0 && this.state[counter] > 0) {
    this.setState({
      [counter]: this.state[counter] - 4
    }) 
  } else if (this.state[counter] === 0) {
    this.setState({
      [counter]: 0
    })
  } else {
    this.setState({
      [counter]: this.state[counter] - 4
    })
  }
  }

  incrementCounter = (category, counter) => {
  //   if (this.state[counter] > this.state[category].length) {
  //     this.setState({
  //       [counter]: this.state[category].length
  //     })

  // } else {
    this.setState({
      [counter]: this.state[counter] + 4
    })
  // }
  }

  arrayCounter = () => {
    this.state.top.length = 10
    [0,4] [4,8] [8,10]
  }

  // pickOutfit = () => {
  //   let array = this.state.userItems
  //   let arrayOutfits = [];
  //   for (let i = 0; i < array.length; i++) {
  //     for (let key in array[i]) {
  //       // console.log(array[i][key])
  //       arrayOutfits = array[i][key]
  //     }
  //   }
  //   return arrayOutfits
  // }

  //Changed function to singleGarments because I didn't want to store too many things in state
  // displayOutfit = (item, keepItemFunction) => {
  //   let top = this.state.top
  //   let bottom = this.state.bottom
  //   let shoes = this.state.shoes
  //   let accessories = this.state.accessories

  //   switch(this.state[`${item.category}Keep`]) {
  //     case false:
  //     return this.setState({
  //       userItems: [
  //       top[Math.floor(Math.random() * top.length)],
  //       bottom[Math.floor(Math.random() * bottom.length)],
  //       shoes[Math.floor(Math.random() * shoes.length)],
  //       accessories[Math.floor(Math.random() * accessories.length)]
  //     ]
  //     }) 
  //     break;
  //     case true:
  //     return keepItemFunction
  //     break;
  //     default: console.log('Error') 


  //   // if (this.state.keepTop) {

  //   // }
      
  //   }
  //   // let userItems = this.state.userItems

  // }

  setOutfit = () => {
    let top = this.state.top
    let bottom = this.state.bottom
    let shoes = this.state.shoes
    let accessories = this.state.accessories

    let userItems = this.state.userItems
    this.setState({
      userItems: this.keepItem()
    }) 
  }

  keepItem = () => {
    let top = this.state.top
    let bottom = this.state.bottom
    let shoes = this.state.shoes
    let accessories = this.state.accessories

    let userOutfit = []
    let userItems = this.state.userItems
    if (this.state.topKeep) {
      userOutfit.push(userItems[0])
    } else {
      userOutfit.push(top[Math.floor(Math.random() * top.length)] )
    }

    if (this.state.bottomKeep) {
      userOutfit.push(userItems[1])
    } else {
      userOutfit.push(bottom[Math.floor(Math.random() * bottom.length)] )
    }

    if (this.state.shoesKeep) {
      userOutfit.push(userItems[2])
    } else {
      userOutfit.push(shoes[Math.floor(Math.random() * shoes.length)] )
    }

    if (this.state.accessoriesKeep) {
      userOutfit.push(userItems[3])
    } else {
      userOutfit.push(accessories[Math.floor(Math.random() * accessories.length)] )
    }

    return userOutfit
  }

  selectItem = (item) => {
    switch(item.category) {
      case 'top':
      this.setState({ topKeep: !this.state.topKeep })
      break;
      case 'bottom':
      this.setState({ bottomKeep: !this.state.bottomKeep })
      break;
      case 'shoes':
      this.setState({ shoesKeep: !this.state.shoesKeep })
      break;
      case 'accessories':
      this.setState({ accessoriesKeep: !this.state.accessoriesKeep })
      break;
      default:
      console.log('Error: Item not found')
    }
    console.log(item)
  }

  findRandomItem = (category) => {
    let categoryItems = this.state[category]
    let userOutfit = [...this.state.userItems]
    let randomItem = categoryItems[Math.floor(Math.random() * categoryItems.length)]
    console.log(randomItem)
    switch (category) {
      case 'top':
      userOutfit.splice(0, 1 ,randomItem)
      this.setState({ userItems: userOutfit })
      break;
      case 'bottom':
      userOutfit.splice(1, 1 ,randomItem)
      this.setState({ userItems: userOutfit })
      break;
      case 'shoes':
      userOutfit.splice(2, 1 ,randomItem)
      this.setState({ userItems: userOutfit })
      break;
      case 'accessories':
      userOutfit.splice(3, 1 ,randomItem)
      this.setState({ userItems: userOutfit })
      break;
      default: 
      console.log('Error: category not found')
    }

  }

  createOutfit = (outfit) => {
    API.createOutfit(outfit)
  }

  
  delItem = (garment) => {
    // console.log(this.props.item)
    const filtered = this.setState({
      [garment.category]: this.state[garment.category].filter(item => item.id !== garment.id)
    })
    API.deleteGarment(garment.id)
    .then(console.log) 
  }

  // componentDidUpdate() {
  //   this.setOutfit()
  // }


  getWardrobe () {
    API.getWardrobe()
    .then(items => 
      this.setState({
      items: items,
        //This is how I used my pickOutfit function making the categories in state and setting them here
      top: items.filter(item => item.category === 'top'),
      bottom: items.filter(item => item.category === 'bottom'),
      shoes: items.filter(item => item.category === 'shoes'),
      accessories: items.filter(item => item.category === 'accessories')
    })
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
    const { 
      items, value, garment, colour, userItems, 
      top, trousers, shoes, accessories, display, 
        } = this.state
    const { handleClick, handleChange, handleGarment, handleSubmit, delItem,
     incrementCounter, nextFour, findRandomItem, findItem, displayOutfit,
    keepItem, selectItem, decrementCounter} = this

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
        <ClothesCollection 
        items={items} delItem={delItem} 
        top={nextFour('top', 'counter1')} bottom={nextFour('bottom', 'counter2')}
        shoes={nextFour('shoes', 'counter3')} accessories={nextFour('accessories', 'counter4')} 
        incrementCounter={incrementCounter} decrementCounter={decrementCounter}/>
        <br />
        <button onClick={() => {this.setOutfit(); this.showDisplay()} }>Randomizer</button>
        <button onClick={() => { this.createOutfit(this.state.userItems); this.hideDisplay()} }>Select Outfit</button>
    {display ? <UserClothes findItem={findItem} randomItem={findRandomItem}
    items={userItems} delItem={null} displayOutfit={displayOutfit} keepItem={keepItem}
    selectItem={selectItem} /> : null }
        </div>
    )
  }
}

export default Wardrobe

// getID={getID} 

  //Tried keep ID in state but just made state in item instead
  // getID = (id) => {
  //   // console.log(e)
  //   // console.log(this.props.item.id)
  //   this.setState({
  //     garmentID: id
  //   })
  // }

  // singleGarments = () => {
  //   const allItems = this.state.items 
  //   let top = []
  //   top = allItems.filter(item => item.category === 'top')
  //   let trousers = []
  //   trousers = allItems.filter(item => item.category === 'trousaurs')
  //   let shoes = []
  //   shoes = allItems.filter(item => item.category === 'shoes')
  //   let accessories = []
  //   accessories = allItems.filter(item => item.category === 'accessories')
  //   this.setState({
  //     userItems: [
  //     top[Math.floor(Math.random() * top.length)],
  //     trousers[Math.floor(Math.random() * trousers.length)],
  //     shoes[Math.floor(Math.random() * shoes.length)],
  //     accessories[Math.floor(Math.random() * accessories.length)]
  //   ]
  // })
  // }