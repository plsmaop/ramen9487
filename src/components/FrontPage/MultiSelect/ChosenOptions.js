import React from 'react'

class ChosenOptions extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const chosenArray = this.props.chosen || []
    if(chosenArray === 0) return null

    return(
      <div className="tags">
        {chosenArray.map((option, index) => {
          return(
            <a>
              <em>
                {option}
              </em>
              <i key={index} onClick={() => this.props.OnCrossClicked(index)}></i>
            </a>
          )
        })}
      </div>
    )
  }
}

export default ChosenOptions