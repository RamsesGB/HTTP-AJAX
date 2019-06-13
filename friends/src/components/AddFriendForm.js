import React from 'react';
import '../App.css';

class NewFriendForm extends React.Component {
    state = {
        friend: {
            id: '',
            name: '',
            age: '',
            email: ''
        }
    };

    render() {
        return(
           <div>
               <h2>Add New Friend</h2>
               <form onSubmit={this.handleSubmit}>
                   <input 
                    type='number' 
                    name='id' 
                    onChange={this.changeHandler} 
                    placeholder='ID' value={this.state.id} 
                   />

                   <input 
                   type='text' 
                   name='name' 
                   onChange={this.changeHandler} 
                   placeholder='Name' 
                   value={this.state.name} 
                   />

                   <input 
                   type='number' 
                   name='age' 
                   onChange={this.changeHandler} 
                   placeholder='Age' 
                   value={this.state.age} 
                   />

                   <input 
                   type='text' 
                   name='email' 
                   onChange={this.changeHandler} 
                   placeholder='E-mail' 
                   value={this.state.email} 
                   />
                   <button className='friendButton'>Add Friend!</button>
               </form>
           </div> 
        );
    }
}

export default NewFriendForm;