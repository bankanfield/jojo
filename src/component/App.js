import React, { Component } from 'react';
import '../App.css';
import AppHeader from './appHeader.js'
import SideBarr from './sideBar.js'

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <AppHeader />
        </div>
        <div className='container'>
          <aside>
            <SideBarr />
            </aside>
        </div>
      </div>
    );
  }
}

export default App;
