import React from 'react'

class Arrow extends React.Component{
  constructor(props){
    super(props)

    this.handleClicked=this.handleClicked.bind(this)
  }

  handleClicked(){
    this.props.OnArrowClicked()
  }

  render(){
    return(
      <div  
        className="arrow"
        onClick={this.handleClicked}
      >
      </div>
    )
  }
}

export default Arrow