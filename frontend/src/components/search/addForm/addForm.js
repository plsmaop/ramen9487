import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MRT from './mrtSelect';
import BusinessHours from './timeSelect';
import ButtonProgress from '../../buttonProgress';

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      location: [],
      phone: '',
      tag: [],
      others: '',
      bussinessHours: [[], [], [], [], [], [], []],
      img: [],
      menu: [],
      url: '',
    };
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.handleInputUpdate = this.handleInputUpdate.bind(this);
  }

  handleFileUpload(e) {
    const { updateImage } = this.props;
    const data = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(data);
    reader.onload = () => updateImage({ data: reader.result, type: data.type });
  }

  handleInputUpdate(type, e, index = 0, i = 0) {
    const { state } = this;
    const data = e.target.value;
    if (!data || data.length === 0) return;
    const newState = {};
    switch (type) {
      case 'tag': {
        const { tag } = state;
        if (tag.includes(data)) newState.tag = tag.filter(item => item !== data);
        else newState.tag = state.tag.concat([data]);
        break;
      }
      case 'menu': {
        const { menu } = state;
        menu[index] = data;
        newState.menu = menu;
        break;
      }
      case 'location': {
        const { location } = state;
        if (data === '--') location[index] = null;
        else location[index] = data;
        break;
      }
      case 'bussinessHours': {
        const { bussinessHours } = state;
        if (data === '--') bussinessHours[index][i] = null;
        else bussinessHours[index][i] = data;
        break;
      }
      default:
        newState[type] = data;
        break;
    }
    this.setState(newState);
  }

  render() {
    const { handleFileUpload, handleInputUpdate, state } = this;
    const { uploadImage, isFetching, postNewRestaurant } = this.props;
    console.log(this.state);
    const menu = [];
    const mrt = [];
    for (let i = 0; i < 4; i += 1) {
      menu.push(
        <div className="input-group input-group-icon menu">
          <input className="addForm-input menu-dish" type="text" onChange={e => handleInputUpdate('menu', e, i)} />
          <div className="input-icon">
            <FontAwesomeIcon icon="utensils" />
          </div>
        </div>,
      );
      mrt.push(
        <MRT handleInputUpdate={e => handleInputUpdate('location', e, i)} />,
      );
    }
    // const { fetchedData } = this.props;
    // const data = fetchedData.image ? (<img src={fetchedData.image.data} />) : null;
    return (
      <div>
        <div className="addForm-header">
          <h1>
            新增你的推薦拉麵給我們！
          </h1>
          <h3>
            請詳細填寫以下資訊 ...
          </h3>
        </div>
        <div className="addForm-container">
          <form>
            <div className="row">
              <h4>
                店名
              </h4>
              <div className="input-group input-group-icon">
                <input className="addForm-input" type="text" onChange={e => handleInputUpdate('name', e)} />
                <div className="input-icon">
                  <FontAwesomeIcon icon="store" />
                </div>
              </div>
              <h4>
                地址
              </h4>
              <div className="input-group input-group-icon">
                <input className="addForm-input" type="text" onChange={e => handleInputUpdate('address', e)} />
                <div className="input-icon">
                  <FontAwesomeIcon icon="map-marker-alt" />
                </div>
              </div>
              <h4>
                鄰近捷運站 (可複選至多4個)
              </h4>
              <div className="input-group">
                { mrt }
              </div>
              <h4>
                電話
              </h4>
              <div className="input-group input-group-icon">
                <input className="addForm-input" type="tel" onChange={e => handleInputUpdate('phone', e)} />
                <div className="input-icon">
                  <FontAwesomeIcon icon="phone" />
                </div>
              </div>
              <h4>
                粉專/官網連結
              </h4>
              <div className="input-group input-group-icon">
                <input className="addForm-input" type="url" onChange={e => handleInputUpdate('url', e)} />
                <div className="input-icon">
                  <FontAwesomeIcon icon="paperclip" />
                </div>
              </div>
            </div>
            <div className="row">
              <h4>
                拉麵分類
              </h4>
              <div className="input-group">
                <input className="addForm-input" type="checkbox" name="ramen-kind-豚骨" value="豚骨" id="ramen-kind-豚骨" onChange={e => handleInputUpdate('tag', e)} />
                <label htmlFor="ramen-kind-豚骨">
                  <span>
                    豚骨
                  </span>
                </label>
                <input className="addForm-input" type="checkbox" name="ramen-kind-醬油" value="醬油" id="ramen-kind-醬油" onChange={e => handleInputUpdate('tag', e)} />
                <label htmlFor="ramen-kind-醬油">
                  <span>
                    醬油
                  </span>
                </label>
                <input className="addForm-input" type="checkbox" name="ramen-kind-味噌" value="味噌" id="ramen-kind-味噌" onChange={e => handleInputUpdate('tag', e)} />
                <label htmlFor="ramen-kind-味噌">
                  <span>
                    味噌
                  </span>
                </label>
                <input className="addForm-input" type="checkbox" name="ramen-kind-煮干" value="煮干" id="ramen-kind-煮干" onChange={e => handleInputUpdate('tag', e)} />
                <label htmlFor="ramen-kind-煮干">
                  <span>
                    煮干
                  </span>
                </label>
                <input className="addForm-input" type="checkbox" name="ramen-kind-家系" value="家系" id="ramen-kind-家系" onChange={e => handleInputUpdate('tag', e)} />
                <label htmlFor="ramen-kind-家系">
                  <span>
                    家系
                  </span>
                </label>
                <input className="addForm-input" type="checkbox" name="ramen-kind-鷄白湯" value="鷄白湯" id="ramen-kind-鷄白湯" onChange={e => handleInputUpdate('tag', e)} />
                <label htmlFor="ramen-kind-鷄白湯">
                  <span>
                    鷄白湯
                  </span>
                </label>
                <input className="addForm-input" type="checkbox" name="ramen-kind-沾麵" value="沾麵" id="ramen-kind-沾麵" onChange={e => handleInputUpdate('tag', e)} />
                <label htmlFor="ramen-kind-沾麵">
                  <span>
                    沾麵
                  </span>
                </label>
              </div>
            </div>
            <div className="row">
              <h4>
                營業時間
              </h4>
              <div className="col-half">
                <div className="wrap-h5">
                  <h5>
                    Mon
                  </h5>
                </div>
                <BusinessHours handleInputUpdate={e => handleInputUpdate('bussinessHours', e, 1, 0)} />
                <BusinessHours handleInputUpdate={e => handleInputUpdate('bussinessHours', e, 1, 1)} />
              </div>
              <div className="col-half">
                <div className="wrap-h5">
                  <h5>
                    Tue
                  </h5>
                </div>
                <BusinessHours handleInputUpdate={e => handleInputUpdate('bussinessHours', e, 2, 0)} />
                <BusinessHours handleInputUpdate={e => handleInputUpdate('bussinessHours', e, 2, 1)} />
              </div>
              <div className="col-half">
                <div className="wrap-h5">
                  <h5>
                    Wed
                  </h5>
                </div>
                <BusinessHours handleInputUpdate={e => handleInputUpdate('bussinessHours', e, 3, 0)} />
                <BusinessHours handleInputUpdate={e => handleInputUpdate('bussinessHours', e, 3, 1)} />
              </div>
              <div className="col-half">
                <div className="wrap-h5">
                  <h5>
                    Thr
                  </h5>
                </div>
                <BusinessHours handleInputUpdate={e => handleInputUpdate('bussinessHours', e, 4, 0)} />
                <BusinessHours handleInputUpdate={e => handleInputUpdate('bussinessHours', e, 4, 1)} />
              </div>
              <div className="col-half">
                <div className="wrap-h5">
                  <h5>
                    Fri
                  </h5>
                </div>
                <BusinessHours handleInputUpdate={e => handleInputUpdate('bussinessHours', e, 5, 0)} />
                <BusinessHours handleInputUpdate={e => handleInputUpdate('bussinessHours', e, 5, 1)} />
              </div>
              <div className="col-half">
                <div className="wrap-h5">
                  <h5>
                    Sat
                  </h5>
                </div>
                <BusinessHours handleInputUpdate={e => handleInputUpdate('bussinessHours', e, 6, 0)} />
                <BusinessHours handleInputUpdate={e => handleInputUpdate('bussinessHours', e, 6, 1)} />
              </div>
              <div className="col-half">
                <div className="wrap-h5">
                  <h5>
                    Sun
                  </h5>
                </div>
                <BusinessHours handleInputUpdate={e => handleInputUpdate('bussinessHours', e, 0, 0)} />
                <BusinessHours handleInputUpdate={e => handleInputUpdate('bussinessHours', e, 0, 1)} />
              </div>
            </div>
            <div className="row">
              <h4>
                主要菜單
              </h4>
              {menu}
            </div>
            <div className="row">
              <h4>
                上傳圖片
              </h4>
              <div className="input-group input-group-icon submit-image-url">
                <input
                  size={10485760}
                  className="addForm-input submit-image-url"
                  type="file"
                  accept="image/png, image/jpeg, image/PNG, image/JPG, image/JEPG, image/jpg"
                  onChange={e => handleFileUpload(e)}
                />
              </div>
            </div>

            <div className="row">
              <h4>
                備註
              </h4>
              <textarea className="addForm-textarea" rows="10" cols="50" onChange={e => handleInputUpdate('others', e)} />
            </div>

            <div className="row" style={{ textAlign: 'center' }}>
              <ButtonProgress type="submit" color="#FF4081" isFetching={isFetching} handleClick={() => postNewRestaurant(state)} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

AddForm.propTypes = {
  updateImage: PropTypes.func.isRequired,
  uploadImage: PropTypes.func.isRequired,
  postNewRestaurant: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  // fetchedData: PropTypes.objectOf(String).isRequired,
};

export default AddForm;

/*  <button className="submit-images" onClick={uploadImage}>Upload</button>
<div className="input-group"><input type="checkbox" id="terms" /><label htmlFor="terms">I accept the terms and conditions for signing up to this service, and hereby confirm I have read the privacy policy.</label></div>
<div className="submit-result">
                Submit
                <svg className="submit-svg" width="130" height="65" viewBox="0 0 130 65" xmlns="http://www.w3.org/2000/svg">
                  <rect x='0' y='0' fill='none' width='130' height='65'/>
                </svg>
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
                <div className="input-group input-group-icon menu">
                <input className="addForm-input menu-price" type="number" />
                <div className="input-icon">
                  <FontAwesomeIcon icon="dollar-sign" />
                </div>
              </div>
*/