import React from 'react'
import Arrow from './Arrow'
import AllOptions from './AllOptions'
import ChosenOptions from './ChosenOptions'

class ResultDisplay extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <AllOptions options={this.props.options}/>
        <Arrow chosen={this.props.chosen} OnArrowClicked={this.props.OnArrowClicked}/>
        <ChosenOptions chosen={this.props.chosen} OnCrossClicked={this.props.OnCrossClicked}/>
      </div>
    )
  }
}

export default ResultDisplay