import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MRTLine extends React.Component{
  constructor(props){
    super(props);

    this.onLineClicked = this.onLineClicked.bind(this);
    this.switchLineName = this.switchLineName.bind(this);
    this.switchStations = this.switchStations.bind(this);
  }

  onLineClicked(){
    const selectedLine = this.props.selectedLine === this.props.line ? '' : this.props.line;
    this.props.onLineClicked(selectedLine);
  }

  switchLineName(line){
    switch(line){
      case 'blue':
        return '板南線';
      case 'yellow':
        return '中和新蘆線';
      case 'brown':
        return '文湖線';
      case 'red':
        return '淡水信義線';
      case 'green':
        return '松山新店線';
    }
  }

  switchStations(line){
    switch(line){
      case 'blue':
        return ['市政府','國父紀念館','忠孝敦化','忠孝復興','台北車站'];
      case 'yellow':
        return ['古亭'];
      case 'brown':
        return ['忠孝復興','西湖'];
      case 'red':
        return ['中正紀念堂','台北車站','中山'];
      case 'green':
        return ['台北小巨蛋','古亭','公館','中正紀念堂','中山'];
    }
  }

  render(){

    return(
      <div className="frontpage__multiselect--list flex__container--col justifycontent--sb alignitems--center cursor--pt " >
          <div className="frontpage__multiselect--lineWrap flex__container--row justifycontent--fs alignitems--center cursor--pt" onClick={this.onLineClicked}>
            <span className={'span--'+this.props.line}></span>
            <div className="frontpage__multiselect--subtitle flex__container--col justifycontent--center">{this.switchLineName(this.props.line)}</div>
            {this.props.selectedLine === this.props.line ? (<FontAwesomeIcon icon="sort-up" />) : (<FontAwesomeIcon icon="sort-down" />)}   
            {/* <i className={["frontpage__multiselect--arrow","flex-container--col", this.props.selectedLine === this.props.line ? "up" : "down"].join(' ')}></i> */}
          </div>
          <ul className={["flex__container--col","justifycontent--fs","alignitems--fs", this.props.selectedLine === this.props.line ? "display--block" : "display--none"].join(' ')}>           
            {this.switchStations(this.props.line).map((station, index)=>{
              return(
                <li
                  key={index}
                  onClick={() => this.props.onStationClicked(station)}
                  className={["flex__container--row","justifycontent--sb","alignitems--center",this.props.selectedStations.indexOf(station) === -1 ? '' : 'fontcolor--tomato'].join(' ')}
                >
                  {station}
                  <FontAwesomeIcon icon="times" className={this.props.selectedStations.indexOf(station) === -1 ? "display--none" : "display--block"}/>
                </li>
              )
            })}
          </ul> 
          
      </div>
    )
  }
}

export default MRTLine