import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

  myInput = React.createRef();

  goToStore = (e) => {
    // 1. stop the form from submitting
    e.preventDefault();
    // 2. get the text from that input using state
    const storeName = this.myInput.current.value;  // first .value is a React thing that gives us the input
    // 3. change the page to whatever they entered
    this.props.history.push(`/store/${storeName}`);
    
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input 
          type="text" 
          ref={this.myInput} 
          required 
          placeholder="Store Name" 
          defaultValue={getFunName()} 
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
