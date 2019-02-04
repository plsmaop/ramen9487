import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Categories extends React.Component{
  constructor(props){
    super(props);

    this.state={
      categories: ["豚骨", "醬油", "味噌", "煮干", "家系", "鷄白湯", "沾麵", "拌麵"]
    }
  }

  render(){
    return(
      <div className="frontpage__multiselect--list flex__container--col justifycontent--sb alignitems--center cursor--pt " >
        <ul className="flex__container--col justifycontent--fs alignitems--fs">           
            {this.state.categories.map((category, index)=>{
              return(
                <li
                  key={index}
                  onClick={() => this.props.onCategoryClicked(category)}
                  className={["flex__container--row","justifycontent--sb","alignitems--center",this.props.selectedCategories.indexOf(category) === -1 ? '' : 'fontcolor--tomato'].join(' ')}
                >
                  {category}
                  <FontAwesomeIcon icon="times" className={this.props.selectedCategories.indexOf(category) === -1 ? "display--none" : "display--block"}/>
                </li>
              )
            })}
          </ul> 
      </div>
    )
  }
}

export default Categories;