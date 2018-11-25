import React from 'react'
import ResultDisplay from './ResultDisplay';
import './style.scss'

class MultiSelect extends React.Component{
  constructor(props){
    super(props)  

    this.state = {
      UpArrow: 0,
      chosenArray:  this.props.chosen || [],
      NotChosenArray: this.props.options 
    }

    this.insert = this.insert.bind(this)
    this.arrDiff = this.arrDiff.bind(this)
    this.OnArrowClicked = this.OnArrowClicked.bind(this)
    this.handleOptionClicked = this.handleOptionClicked.bind(this)
    this.cancelChosen = this.cancelChosen.bind(this)
  }

  OnArrowClicked(){
    this.setState({
      UpArrow: this.state.UpArrow ? 0 : 1
    })
  }

  handleOptionClicked(index){

    var newArr = this.state.chosenArray.slice() //create a new shallow copy of array , making it immutable
    newArr.push(this.state.NotChosenArray[index])

    var all = this.props.options

   this.setState({
      chosenArray:  newArr,
      NotChosenArray: this.arrDiff(newArr, all)
    }, (state) => {
      if(this.state.chosenArray.length === 11) 
        this.OnArrowClicked()
      }
    )
  }

  cancelChosen(index){

    var newArr = this.state.chosenArray.slice()
    var all = this.props.options
    newArr.splice(index, 1)
    //var resArr = this.insert(newArr, all.findIndex(value => value === currentChosen[index]), currentChosen[index])

    this.setState({
      chosenArray:  newArr,
      NotChosenArray: this.arrDiff(newArr, all),
    })
  }

  arrDiff(a1, a2){
    return a1.concat(a2).filter( (val, index, arr) => {
      return arr.indexOf(val) === arr.lastIndexOf(val)
    });
  }

  insert(arr, index, newItem){
    return [...arr.slice(0, index), newItem, ...arr.slice(index)]
  }

  render(){

    return(
      <div className={["selectMultiple", this.state.UpArrow ? "open" : ""].join(' ')}>
        <ResultDisplay 
          chosen={this.state.chosenArray} 
          options={this.props.options}
          OnArrowClicked={this.OnArrowClicked}
          OnCrossClicked={this.cancelChosen}  
        />
        <ul>
        {this.state.NotChosenArray.map((option, index) => {return(
              <li 
                key={index}
                onClick={() => this.handleOptionClicked(index)}
              >
                {option}
              </li>)
          })}
        </ul>
      </div>
    )
  }
}

export default MultiSelect