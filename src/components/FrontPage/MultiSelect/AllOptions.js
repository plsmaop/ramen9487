import React from 'react'

class AllOptions extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const options = this.props.options.map((option, index) => 
      <option key={index}>{option}</option>
    )

    return(
      <span className="hide">
        <select multiple data-placeholder="Add tools">
          {this.props.options.map((option, index) => {return(
              <option key={index}>{option}</option>)
          })}
        </select>
      </span>
    )
  }
}

export default AllOptions