import React from 'react'

class Tags extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="front-page__tags">
        {this.props.tags.map((tag, index) => {
          return(
            <a>
              <span
                key={index}
                className="front-page__tag"
                onClick={this.props.OnTagClicked}
              >
                {tag}
              </span>
            </a>
          )
        })

        }
      </div>

      
    )
  }
}

export default Tags