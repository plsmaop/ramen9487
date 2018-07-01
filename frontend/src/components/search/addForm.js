import React, { Component } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class AddForm extends Component {
  render(){
    return(
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
                  <select className="addForm-select">
                    <optgroup label="淡水信義線">
                      <option>象山</option>
                      <option>台北101/世貿</option>
                      <option>信義安和</option>
                      <option>大安</option>
                      <option>大安森林公園</option>
                      <option>東門</option>
                      <option>中正紀念堂</option>
                      <option>台大醫院</option>
                      <option>台北車站</option>
                      <option>中山</option>
                      <option>雙連</option>
                      <option>民權西路</option>
                      <option>圓山</option>
                      <option>劍潭</option>
                      <option>士林</option>
                      <option>芝山</option>
                      <option>明德</option>
                      <option>石牌</option>
                      <option>唭哩岸</option>
                      <option>奇岩</option>
                      <option>北投</option>
                      <option>復興崗</option>
                      <option>忠義</option>
                      <option>關渡</option>
                      <option>竹圍</option>
                      <option>紅樹林</option>
                      <option>淡水</option>
                    </optgroup>
                    <optgroup label="板南線">
                      <option>南港展覽館</option>
                      <option>南港</option>
                      <option>昆陽</option>
                      <option>後山埤</option>
                      <option>永春</option>
                      <option>市政府</option>
                      <option>國父紀念館</option>
                      <option>忠孝敦化</option>
                      <option>忠孝復興</option>
                      <option>忠孝新生</option>
                      <option>善導寺</option>
                      <option>台北車站</option>
                      <option>西門</option>
                      <option>龍山寺</option>
                      <option>江子翠</option>
                      <option>新埔</option>
                      <option>板橋</option>
                      <option>府中</option>
                      <option>亞東醫院</option>
                      <option>海山</option>
                      <option>土城</option>
                      <option>永寧</option>
                      <option>頂埔</option>
                    </optgroup>
                    <optgroup label="文湖線">
                      <option>南港展覽館</option>
                      <option>南港軟體園區</option>
                      <option>東湖</option>
                      <option>葫洲</option>
                      <option>大湖公園</option>
                      <option>內湖</option>
                      <option>中正紀念堂</option>
                      <option>台大醫院</option>
                      <option>台北車站</option>
                      <option>中山</option>
                      <option>雙連</option>
                      <option>民權西路</option>
                      <option>圓山</option>
                      <option>劍潭</option>
                      <option>士林</option>
                      <option>芝山</option>
                      <option>明德</option>
                      <option>石牌</option>
                      <option>唭哩岸</option>
                      <option>奇岩</option>
                      <option>北投</option>
                      <option>復興崗</option>
                      <option>忠義</option>
                      <option>關渡</option>
                      <option>竹圍</option>
                      <option>紅樹林</option>
                      <option>淡水</option>
                    </optgroup>
                  </select>
                  
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
                <h4>Payment Details</h4>
                <div className="input-group"><input className="addForm-input" type="radio" name="payment-method" value="card" id="payment-method-card" checked="true" /><label htmlFor="payment-method-card"><span><i className="fa fa-cc-visa"></i>Credit Card</span></label><input className="addForm-input" type="radio" name="payment-method" value="paypal"
                        id="payment-method-paypal" /><label htmlFor="payment-method-paypal"> <span><i className="fa fa-cc-paypal"></i>Paypal</span></label></div>
                <div className="input-group input-group-icon"><input className="addForm-input" type="text" placeholder="Card Number" />
                    <div className="input-icon"><i className="fa fa-credit-card"></i></div>
                </div>
                <div className="col-half">
                    <div className="input-group input-group-icon"><input className="addForm-input" type="text" placeholder="Card CVC" />
                        <div className="input-icon"><i className="fa fa-user"></i></div>
                    </div>
                </div>
                <div className="col-half">
                    <div className="input-group"><select className="addForm-select"><option>01 Jan</option><option>02 Jan</option></select><select className="addForm-select"><option>2015</option><option>2016</option></select></div>
                </div>
            </div>
            <div className="row">
                <h4>Terms and Conditions</h4>
                <div className="input-group"><input type="checkbox" id="terms" /><label htmlFor="terms">I accept the terms and conditions for signing up to this service, and hereby confirm I have read the privacy policy.</label></div>
            </div>
        </form>
    </div>
    )
  }
}