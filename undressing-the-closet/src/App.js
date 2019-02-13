import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import './App.css';
import 'semantic-ui-css/semantic.min.css'

import API from './API'

import Header from './components/Header'
import SignInForm from './components/SignInForm'
import SignUpForm from './components/SignUpForm'
import Wardrobe from './components/Wardrobe'
import HomePage from './components/HomePage'
import PageNotFound from './components/PageNotFound'
import UserOutfits from './components/UserOutfits';

class App extends Component {

  state = {
    username: '',
    display: false
  }

  showDisplay = () => {
    this.setState({
      display: !this.state.display
    })
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
    const { signin, signout, showDisplay } = this
    const { username, display } = this.state
    return (
      <div className="App">
        <Header username={username} signout={signout} display={display} showDisplay={showDisplay} />
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/signin' component={props => < SignInForm {...props} signin={signin} />} />
        <Route path='/signup' component={props => <SignUpForm {...props} signin={signin} />} />
        <Route path='/wardrobe' component={props => < Wardrobe {...props} username={username} />} /> 
        <Route path='/outfits' component={props => < UserOutfits />} />
        <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App)
