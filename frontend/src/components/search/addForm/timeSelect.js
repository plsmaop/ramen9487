import React from 'react';
import PropTypes from 'prop-types';

const BusinessHours = ({ handleInputUpdate }) => (
  <select className="addForm-select" onChange={e => handleInputUpdate(e)}>
    <option>--</option>
    <option>公休</option>
    <option>0:00</option>
    <option>1:00</option>
    <option>2:00</option>
    <option>3:00</option>
    <option>4:00</option>
    <option>5:00</option>
    <option>6:00</option>
    <option>7:00</option>
    <option>8:00</option>
    <option>9:00</option>
    <option>10:00</option>
    <option>11:00</option>
    <option>12:00</option>
    <option>13:00</option>
    <option>14:00</option>
    <option>15:00</option>
    <option>16:00</option>
    <option>17:00</option>
    <option>18:00</option>
    <option>19:00</option>
    <option>20:00</option>
    <option>21:00</option>
    <option>22:00</option>
    <option>23:00</option>
    <option>24:00</option>
  </select>
);

BusinessHours.propTypes = {
  handleInputUpdate: PropTypes.func.isRequired,
};

export default BusinessHours;
