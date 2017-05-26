import React, { Component } from 'react';
import './App.css';
import Detail from './modules/Detail'
import SearchInput, {createFilter} from 'react-search-input/lib/index'
import ecodes from './ekoodit-small'

const KEYS_TO_FILTERS = ['ENumber', 'ENumberName']


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {searchTerm: '', detailVisible: false};
  }
  searchUpdated (e) {
    this.setState({searchTerm: e}) 
   
  }

  render() {
    const filteredENumbers = ecodes.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (

      <div className="App">
      <div className="App-header">
            <h2>Ekoodit</h2>
            <p>Tässä voit hakea ekoodia, jotta saat siitä lisää tietoa.</p>
          </div>
        <div className="AppContent">
          <div>
              <SearchInput className='search-input' placeholder="Hae" onChange={(e) => this.searchUpdated(e)} />
              {
              filteredENumbers.map(eNumbers => {
                return (
                 
                  <div className='list' key={eNumbers.ENumber}>
                    <div>
                      <Detail info={eNumbers} visible={this.state.detailVisible}></Detail>
                    </div>
                  </div>
                 
                )
              })}
          </div>
        </div>
      </div>
      
    )
  }
  
}

export default App;
