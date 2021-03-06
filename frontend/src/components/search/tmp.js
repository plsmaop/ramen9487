import Pagination from "react-js-pagination";

showCheckboxes() {
  if(!expanded){
    this.refs.checkboxes.style.display = "block";
    expanded = true;
  }
  else{
    this.refs.checkboxes.style.display = "none";
    expanded = false;
  }
}
        <form className="search-multiselect-form">
        <div className="multiselect">
          <div  className="selectBox" onClick={this.showCheckboxes}>
            <select>
              <option>鄰近捷運站</option>
            </select>
            <div className="overSelect"></div>
          </div>
          <div ref="checkboxes" id="checkboxes">
            <label htmlFor="one">
              <input type="checkbox" id="one" />First checkbox</label>
            <label htmlFor="two">
              <input type="checkbox" id="two" />Second checkbox</label>
            <label htmlFor="three">
              <input type="checkbox" id="three" />Third checkbox</label>
          </div>
        </div>
      </form>



/* multiselect */
.search-multiselect-form{
  width: 10%;
  height: 40%;
  border-radius: 4.2px;
  display: inline-block;
}

.multiselect {
  width:100%;
  height: 100%;
}

.selectBox {
  position: relative;
}

.selectBox select {
  width: 100%;
  font-weight: bold;
  color: tomato;
}

.overSelect {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

#checkboxes {
  display: none;
  border: 1px #dadada solid;
  background-color: white;
}

#checkboxes label {
  display: block;
}

#checkboxes label:hover {
  background-color: tomato;
}



/*Pagination*/
<div className="pagination-wrapper">
          <ul className="search-pagination">
            <li className="search-pagination__item"><a ref="page" href="#" className="search-pagination__link is_active" /* onClick={this.changePage} */>1</a></li>
            <li className="search-pagination__item"><a ref="page" href="#" className="search-pagination__link" /* onClick={this.changePage} */>2</a></li>
            <li className="search-pagination__item"><a ref="page" href="#" className="search-pagination__link" /* onClick={this.changePage} */>3</a></li>
            <li className="search-pagination__item"><a ref="page" href="#" className="search-pagination__link" /* onClick={this.changePage} */>4</a></li>
            <li className="search-pagination__item"><a ref="page" href="#" className="search-pagination__link" /* onClick={this.changePage} */>5</a></li>
            <li className="search-pagination__item"><a ref="page" href="#" className="search-pagination__link" /* onClick={this.changePage} */>6</a></li>
          </ul>
        </div>