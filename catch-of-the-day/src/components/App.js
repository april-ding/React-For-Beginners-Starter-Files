import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  
  state = {
    fishes: {}, // fish data needs to be used across the app, so we need to keep the data here
    order: {}
  };

  // the logic of adding a fish is defined here, but called at lower level in addFishForm
  addFish = fish => {
    // 1. make a copy of the state obj so we don't mutate it
    const fishes = {...this.state.fishes};
    // 2. add the new fish to the fishes obj in the state
    fishes[`fish${Date.now()}`] = fish;
    // 3. set state, or you can just say this.setState({ fishes })
    this.setState({
      fishes: fishes,
    });
  }; 

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
            <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order />
        <Inventory addFish={this.addFish}/>
    
      </div>
    );
  }
}

export default App;
