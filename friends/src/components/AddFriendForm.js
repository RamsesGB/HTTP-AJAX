import React from 'react';
import '../App.css';

class NewFriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: {
                name: '',
                age: '',
                email: ''
            }
        };
    }

    changeHandler = ev => {
        ev.persist();
        let value = ev.target.value;
        console.log(ev.target);
        // if (ev.target.name === 'price') {
        //   value = parseInt(value, 10);
        // }
        this.setState(prevState => ({
          friend: {
            ...prevState.friend,
            [ev.target.name]: value
          }
        }));
      };
    
    handleSubmit = e => {
        this.props.addFriend(e, this.state.friend);
        this.setState({
            friend: {
                name: '',
                age: '',
                email: ''
            }
        });
    }
    

    render() {
        return(
           <div>
               <h2>Add New Friend</h2>
               <form onSubmit={this.handleSubmit}>
                   <input 
                   type='string' 
                   name='name' 
                   onChange={this.changeHandler} 
                   placeholder='Name' 
                   value={this.state.friend.name} 
                   />

                   <input 
                   type='number' 
                   name='age' 
                   onChange={this.changeHandler} 
                   placeholder='Age' 
                   value={this.state.friend.age} 
                   />

                   <input 
                   type='string' 
                   name='email' 
                   onChange={this.changeHandler} 
                   placeholder='E-mail' 
                   value={this.state.friend.email} 
                   />
                   <button className='friendButton'>Add Friend!</button>
               </form>
           </div> 
        );
    }
}

export default NewFriendForm;