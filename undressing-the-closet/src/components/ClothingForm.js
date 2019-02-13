import React, { Component } from 'react'
import { Form, Input, Select } from 'semantic-ui-react'

const FormData = require('form-data');

const options = [
  { key: 'b', text: 'Bottoms', value: 'bottoms' },
  { key: 't', text: 'Top', value: 'top' },
  { key: 's', text: 'Shoes', value: 'shoes' },
  { key: 'a', text: 'Accessories', value: 'accessories' },
]

class ClothingForm extends Component {

  render() {
    

    const { value, garment, colour } = this.props
    const { handleChange, handleGarment, handleSubmit } = this.props
    return (
      <div>
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Garment' name='garment' placeholder='Image_url' onChange={handleGarment} value={garment} />
          <Form.Input fluid label='Colour' name='colour' placeholder='Colour' onChange={handleGarment} value={colour} />
          {/* <Form.Select fluid label='Category' options={options} placeholder='category' /> */}
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
            label='Bottoms'
            value='bottom'
            checked={value === 'bottom'}
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
      </div>
    )
  }
}

export default ClothingForm

  // handleClick = (e) => {
  //   e.preventDefault()
  //   const form = document.querySelector('#myform').files[0]
  //   const results = document.querySelector('#results')
  //   const image_upload = document.querySelector("#image_upload");
  //   console.log(form.files)
  //   const file = document.querySelector('#file')
  //   // console.log(file.files)
  //   let form_data = new FormData(form);
  //   // for (let key in form_data) {
  //   //   console.log(key)
  //   // }
  // }

//   <form id="my_form" onSubmit={this.handleClick}>
//   <input id='file' type="file" 
//          name="image" 
//          id="image_upload" 
//          accept="image/*" 
//   />
//   <input type="submit" value="Submit" />
// </form>