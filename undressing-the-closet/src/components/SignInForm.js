import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import API from '../API'

class SignInForm extends React.Component {

    state = {
        username: '',
        password: ''
    }

    handleSubmit = () => {
        API.signin(this.state)
        .then(data => {
            if (data.error) {
                console.log(data.error)
            } else {
                this.props.signin(this.state.username, data.token,)
                this.props.history.push('/wardrobe')
            }
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const { handleChange, handleSubmit } = this
        return (
            <div>
                <TextField
                    id='usernameInput'
                    label='Username'
                    // value={username}
                    onChange={handleChange}
                    margin='normal'
                    name='username'
                />        
                <br />
                <TextField
                    id='passwordInput'
                    label='Password'
                    // value={password}
                    onChange={handleChange}
                    margin='normal'
                    name='password'
                    type='password'
                />
                <br />
                <Button onClick={handleSubmit} variant='contained' color='primary'>
                    SUBMIT
                </Button>
            </div>
        )
    }
}

export default SignInForm

