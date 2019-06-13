import React from 'react';
import './App.css';
import {
  Route,
  NavLink,
  withRouter
} from 'react-router-dom';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import NewFriendForm from './components/AddFriendForm';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(res => this.setState({ friends: res.data }))
    .catch(err => console.log(err));
  }

  render() {
    return(
      <div className='App'>
        <div className='nav'>
          <NavLink exact to='/Add-Friend'>Add Friend</NavLink>
        </div>
        <Route 
          exact 
          path='/' 
          render={props => (<FriendsList {...props} friendsData={this.state.friends} />)}
        />
        <Route
          path='/Add-Friend'
          render={props => (<NewFriendForm {...props} />)}
        />
      </div>
    );
  }
}

export default App;
