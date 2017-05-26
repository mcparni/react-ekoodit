import React, { Component } from 'react';

class Detail extends Component {
    constructor(props) {
    super(props);
    this._visible = this.props.visible;
    this.handleClick = this.handleClick.bind(this);
    this.url = 'https://evira.fi' + this.props.info.FriendlyUrl;
    this.ename = this.props.info.ENumberName;
    this.enumber = this.props.info.ENumber;
    this.ecolor = this.props.info.Color;
    this.edescription = this.props.info.Description;
    this.eADI = this.props.info.ADI;
    this.eGroups = this.props.info.AdditiveGroups;
    this.eprops = this.props.info.Properties;

    if(this.ecolor === null)
      this.ecolor = "-";

    if(this.eprops === null)
      this.eprops = "-";

    if(this.eGroups.length === 0)
      this.eGroups = "-";
    else
      this.eGroups = this.eGroups[0];

  }
  handleClick(e){
    
    if(this._visible) {
      this._visible = false;
      e.target.className = "e-info";
      
    }else{
      this._visible = true;
      e.target.className = "e-info open";
    }
  }
 


  render() {
    return (
      <div>
        <div className="e-info" onClick={this.handleClick}>
          {this.props.info.ENumberName} <b>{this.enumber}</b>
          <div className="e-info-detail">
              <p className="sub-head"><b>Väri:</b></p>
              <p className="ecolor">{this.ecolor}</p>
              <p className="sub-head"><b>Kuvaus:</b></p>
              <p className="edescription">{this.edescription}</p>
              <p className="sub-head"><b>Hyväksyttävä päivittäinen enimmäissaanti:</b></p>
              <p className="eADI">{this.eADI}</p>
              <p className="sub-head"><b>Lisäaineryhmä(t):</b></p>
              <p className="eGroups">{this.eGroups}</p>
              <p className="sub-head"><b>Lisätietoja:</b></p>
              <p className="eprops">{this.eprops}</p>
              <p className="elink"><a href={this.url} target="_blank" rel="noopener noreferrer">Tietoa Eviran sivuilta</a></p>
          </div>
        </div>
      </div>
    )
  }
  
}
    
export default Detail;
