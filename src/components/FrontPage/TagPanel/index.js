import React from 'react'
import Tags from './Tags';
import './style.scss'

class TagPanel extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="front-page__panel">
        <h3>{this.props.title}</h3>
        <hr/>
        <Tags
          tags={this.props.tags}
          OnTagClicked={this.props.OnTagClicked}
          />
        <div className="front-page__space"></div>
      </div>
    )
  }
}

export default TagPanel