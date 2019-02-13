import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'

class NewItem extends Component {
    render() {
        const { item, delItem } = this.props
        return(
            <Container>
                <Card.Group>
                    <Card image={item.image_url} />
                    <button onClick={() => delItem(item)}>Delete</button>
                    <button onClick={() => delItem(item)}>Keep</button>
                </Card.Group>
          </Container>
        )
    }
}

export default NewItem;