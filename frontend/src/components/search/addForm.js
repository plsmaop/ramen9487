import React, { Component } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MRT from './mrtSelect';
import BusinessHours from './timeSelect';

export default class AddForm extends Component {
  render(){
    return(
      <div>
        <div className="addForm-header">
          <h1>新增你的推薦拉麵給我們！</h1>
          <h3>請詳細填寫以下資訊 ...</h3>
        </div>
        
        <div className="container">
          <form>
              <div className="row">
                  <h4>店名</h4>
                  <div className="input-group input-group-icon"><input className="addForm-input" type="text" />
                    <div className="input-icon"><FontAwesomeIcon icon="store" /></div>
                  </div>
                  <h4>地址</h4>
                  <div className="input-group input-group-icon"><input className="addForm-input" type="text"/>
                    <div className="input-icon"><FontAwesomeIcon icon="map-marker-alt" /></div>
                  </div>

                  <h4>鄰近捷運站 (可複選至多4個)</h4>
                  <div className="input-group">
                    <MRT/>
                    <MRT/>
                    <MRT/>
                    <MRT/>
                  </div>
                  
                  <h4>電話</h4>
                  <div className="input-group input-group-icon"><input className="addForm-input" type="tel" />
                    <div className="input-icon"><FontAwesomeIcon icon="phone" /></div>
                  </div>
                  <h4>粉專/官網連結</h4>
                  <div className="input-group input-group-icon"><input className="addForm-input" type="url" />
                    <div className="input-icon"><FontAwesomeIcon icon="paperclip" /></div>
                  </div>
              </div>

              <div className="row">
                  <h4>拉麵分類</h4>
                  <div className="input-group">
                    <input className="addForm-input" type="checkbox" name="ramen-kind-豚骨" value="豚骨" id="ramen-kind-豚骨"/><label htmlFor="ramen-kind-豚骨"><span>豚骨</span></label>
                    <input className="addForm-input" type="checkbox" name="ramen-kind-醬油" value="醬油" id="ramen-kind-醬油" /><label htmlFor="ramen-kind-醬油"> <span>醬油</span></label>
                    <input className="addForm-input" type="checkbox" name="ramen-kind-味噌" value="味噌" id="ramen-kind-味噌" /><label htmlFor="ramen-kind-味噌"> <span>味噌</span></label>
                    <input className="addForm-input" type="checkbox" name="ramen-kind-煮干" value="煮干" id="ramen-kind-煮干" /><label htmlFor="ramen-kind-煮干"> <span>煮干</span></label>
                    <input className="addForm-input" type="checkbox" name="ramen-kind-家系" value="家系" id="ramen-kind-家系" /><label htmlFor="ramen-kind-家系"> <span>家系</span></label>
                    <input className="addForm-input" type="checkbox" name="ramen-kind-鷄白湯" value="鷄白湯" id="ramen-kind-鷄白湯" /><label htmlFor="ramen-kind-鷄白湯"> <span>鷄白湯</span></label>
                    <input className="addForm-input" type="checkbox" name="ramen-kind-沾麵" value="沾麵" id="ramen-kind-沾麵" /><label htmlFor="ramen-kind-沾麵"> <span>沾麵</span></label>
                  </div>
              </div>

              <div className="row">
                <h4>營業時間</h4>
                <div className="col-half">
                  <div className="wrap-h5"><h5>Mon</h5></div>
                  <BusinessHours/>
                  <BusinessHours/>
                </div>
                <div className="col-half">
                  <div className="wrap-h5"><h5>Tue</h5></div>
                  <BusinessHours/>
                  <BusinessHours/>
                </div>
                <div className="col-half">
                  <div className="wrap-h5"><h5>Wed</h5></div>
                  <BusinessHours/>
                  <BusinessHours/>
                </div>
                <div className="col-half">
                  <div className="wrap-h5"><h5>Thr</h5></div>
                  <BusinessHours/>
                  <BusinessHours/>
                </div>
                <div className="col-half">
                  <div className="wrap-h5"><h5>Fri</h5></div>
                  <BusinessHours/>
                  <BusinessHours/>
                </div>
                <div className="col-half">
                  <div className="wrap-h5"><h5>Sat</h5></div>
                  <BusinessHours/>
                  <BusinessHours/>
                </div>
                <div className="col-half">
                  <div className="wrap-h5"><h5>Sun</h5></div>
                  <BusinessHours/>
                  <BusinessHours/>
                </div>
              </div>

              <div className="row">
                <h4>主要菜單</h4>
                <div className="input-group input-group-icon menu"><input className="addForm-input menu-dish" type="text" />
                    <div className="input-icon"><FontAwesomeIcon icon="utensils" /></div>
                </div>
                <div className="input-group input-group-icon menu"><input className="addForm-input menu-price" type="number" />
                  <div className="input-icon"><FontAwesomeIcon icon="dollar-sign" /></div>
                </div>

                <div className="input-group input-group-icon menu"><input className="addForm-input menu-dish" type="text" />
                    <div className="input-icon"><FontAwesomeIcon icon="utensils" /></div>
                </div>
                <div className="input-group input-group-icon menu"><input className="addForm-input menu-price" type="number" />
                  <div className="input-icon"><FontAwesomeIcon icon="dollar-sign" /></div>
                </div>

                <div className="input-group input-group-icon menu"><input className="addForm-input menu-dish" type="text" />
                    <div className="input-icon"><FontAwesomeIcon icon="utensils" /></div>
                </div>
                <div className="input-group input-group-icon menu"><input className="addForm-input menu-price" type="number" />
                  <div className="input-icon"><FontAwesomeIcon icon="dollar-sign" /></div>
                </div>

                <div className="input-group input-group-icon menu"><input className="addForm-input menu-dish" type="text" />
                    <div className="input-icon"><FontAwesomeIcon icon="utensils" /></div>
                </div>
                <div className="input-group input-group-icon menu"><input className="addForm-input menu-price" type="number" />
                  <div className="input-icon"><FontAwesomeIcon icon="dollar-sign" /></div>
                </div>

                <div className="input-group input-group-icon menu"><input className="addForm-input menu-dish" type="text" />
                    <div className="input-icon"><FontAwesomeIcon icon="utensils" /></div>
                </div>
                <div className="input-group input-group-icon menu"><input className="addForm-input menu-price" type="number" />
                  <div className="input-icon"><FontAwesomeIcon icon="dollar-sign" /></div>
                </div>
              </div>

              <div className="row">
                  <div className="col-half">
                  <h4>可預約</h4>
                      <div className="input-group"><input className="addForm-input" type="radio" name="reservation" value="yes" id="reservation-yes" /><label htmlFor="reservation-yes">Yes</label><input className="addForm-input" type="radio" name="reservation" value="no" id="reservation-no" /><label htmlFor="reservation-no">No</label></div>
                  </div>
                  <div className="col-half">
                      <h4>可外帶</h4>
                      <div className="input-group"><input className="addForm-input" type="radio" name="take-out" value="yes" id="take-out-yes" /><label htmlFor="take-out-yes">Yes</label><input className="addForm-input" type="radio" name="take-out" value="no" id="take-out-no" /><label htmlFor="take-out-no">No</label></div>
                  </div>
              </div>

              <div className="row">
                  <div className="col-half">
                  <h4>可刷卡</h4>
                      <div className="input-group"><input className="addForm-input" type="radio" name="credit-card" value="yes" id="credit-card-yes" /><label htmlFor="credit-card-yes">Yes</label><input className="addForm-input" type="radio" name="credit-card" value="no" id="credit-card-no" /><label htmlFor="credit-card-no">No</label></div>
                  </div>
                  <div className="col-half">
                      <h4>可親子</h4>
                      <div className="input-group"><input className="addForm-input" type="radio" name="children" value="yes" id="children-yes" /><label htmlFor="children-yes">Yes</label><input className="addForm-input" type="radio" name="children" value="no" id="children-no" /><label htmlFor="children-no">No</label></div>
                  </div>
              </div>

              <div className="row">
                  <h4>上傳圖片</h4>
                  <div className="input-group input-group-icon submit-image-url">
                    <input className="addForm-input submit-image-url" type="text" />
                  </div>
                  <button className="submit-images">Upload</button>
              </div>

              <div className="row">
                  <h4>備註</h4>
                  <textarea className="addForm-textarea" rows="10" cols="50"></textarea>
              </div>

              <div className="row">
                <div className="submit-result">
                  Submit
                  <svg className="submit-svg" width="130" height="65" viewBox="0 0 130 65" xmlns="http://www.w3.org/2000/svg">
                    <rect x='0' y='0' fill='none' width='130' height='65'/>
                  </svg>
                </div>
              </div>
          </form>
      </div>
    </div>
    )
  }
}


/* 
<div className="input-group"><input type="checkbox" id="terms" /><label htmlFor="terms">I accept the terms and conditions for signing up to this service, and hereby confirm I have read the privacy policy.</label></div>
*/