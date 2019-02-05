import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import './App.css';

import Header from './components/Header'
import SignInForm from './components/SignInForm'
import SignUpForm from './components/SignUpForm'
import Wardrobe from './components/Wardrobe'
import HomePage from './components/HomePage'
import PageNotFound from './components/PageNotFound'

import API from './API'

class App extends Component {

  state = {
    username: ''
  }

  signin = (username, token) => {
    this.setState({ username })
    localStorage.setItem('token', token)
  }

  signout = () => {
    this.setState({
      username: ''
    })
    localStorage.removeItem('token')
    // this.props.history.push('/signin')
  }

  componentDidMount() {
    API.validate()
    .then(data => {
      if (data.error) {
        this.props.history.push('/signin')
        console.log('error', data)
      } else {
        this.signin(data.username, data.token)
        this.props.history.push('/wardrobe')
        console.log('success', data)
      }
    })
  }

  render() {
    const { signin, signout } = this
    const { username } = this.state
    return (
      <div className="App">
        <Header username={username} signout={signout} />
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/signin' component={props => < SignInForm {...props} signin={signin} />} />
        <Route path='/signup' component={props => <SignUpForm {...props} signin={signin} />} />
        <Route path='/wardrobe' component={props => < Wardrobe {...props} username={username} />} /> 
        <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App)
