import React, { Component } from 'react';
import Cat from './Cat/index'
import Dog from './Dog/index'
import ChangeFamily from './ChangeFamily/index'
import { AppContextProvider } from './AppContext'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <AppContextProvider initialState={{family: 'this is an happy family'}}>
          <div className='container'>
            <div className='left-column'>
              <Cat name={'Fuffy'}/>
              <Dog name={'Doggo'}/>
            </div>
            <div className='right-column'>
              <ChangeFamily />
            </div>
          </div>
        </AppContextProvider>
      </div>
    );
  }
}

export default App;
