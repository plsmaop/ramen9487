import React from 'react';
import './style.css';

const MRTmulti = () => {
  return (
    <div className="form-group">
      <div className="input-group" multiselect="multiselect">
        <label>Select your Location</label>
        <select name="eventLocations[]" multiple="multiple">
          <option selected="" value="">All</option>
          <optgroup label="California">
            <option value="6431">Berkeley</option>
            <option value="6453">Los Angeles</option>
            <option value="6473">San Francisco</option>
            <option value="6577">Santa Barbara</option>
          </optgroup>
          <optgroup label="Colorado">
            <option value="6442">Denver</option>
          </optgroup>
          <optgroup label="District of Columbia (DC)">
            <option value="6486">District of Columbia (DC)</option>
          </optgroup>
          <optgroup label="Florida">
            <option value="6460">Miami</option>
          </optgroup>
          <optgroup label="Illinois">
            <option value="6437">Chicago</option>
          </optgroup>
          <optgroup label="Louisiana">
            <option value="6465">New Orleans</option>
          </optgroup>
          <optgroup label="Massachusetts">
            <option value="6433">Boston</option>
            <option value="10342">Martha's Vineyard</option>
          </optgroup>
          <optgroup label="Michigan">
            <option value="6424">Ann Arbor</option>
            <option value="6445">Detroit</option>
            <option value="7166">East Lansing</option>
          </optgroup>
          <optgroup label="Minnesota">
            <option value="6481">Twin Cities</option>
          </optgroup>
          <optgroup label="New York">
            <option value="65">New York City</option>
          </optgroup>
          <optgroup label="North Carolina">
            <option value="6427">Asheville</option>
          </optgroup>
          <optgroup label="Oregon">
            <option value="66">Portland</option>
          </optgroup>
          <optgroup label="Pennsylvania">
            <option value="6469">Philadelphia</option>
            <option value="6470">Pittsburgh</option>
          </optgroup>
          <optgroup label="Texas">
            <option value="6451">Houston</option>
          </optgroup>
        </select>
      </div>
    </div>
  )
};
export default MRTmulti;