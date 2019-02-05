import React, { Component } from 'react'
import { Form, Input, Select } from 'semantic-ui-react'

const options = [
  { key: 'b', text: 'bottoms', value: 'bottoms' },
  { key: 't', text: 'Top', value: 'top' },
  { key: 's', text: 'Shoes', value: 'shoes' },
  { key: 'a', text: 'Accessories', value: 'accessories' },
]

class ClothingForm extends Component {

  render() {
    const { value, garment, colour } = this.props
    const { handleChange, handleGarment, handleSubmit } = this.props
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Garment' name='garment' placeholder='Image_url' onChange={handleGarment} value={garment} />
          <Form.Input fluid label='Colour' name='colour' placeholder='Colour' onChange={handleGarment} value={colour} />
        </Form.Group>
        <Form.Group inline>
        <label>Category</label>
        <Form.Radio
            label='Top'
            value='top'
            checked={value === 'top'}
            onChange={handleChange}
        />
        <Form.Radio
            label='Trousaurs'
            value='trousaurs'
            checked={value === 'trousaurs'}
            onChange={handleChange}
        />
        <Form.Radio
            label='Shoes'
            value='shoes'
            checked={value === 'shoes'}
            onChange={handleChange}
        />
        <Form.Radio
            label='Accessories'
            value='accessories'
            checked={value === 'accessories'}
            onChange={handleChange}
        />
        </Form.Group>
         <Form.Button onClick={handleSubmit}>Submit</Form.Button>
      </Form>
    )
  }
}

export default ClothingForm