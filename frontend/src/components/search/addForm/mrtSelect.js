import React from 'react';
import PropTypes from 'prop-types';

const MRT = ({ handleInputUpdate }) => (
  <select className="addForm-select" onChange={e => handleInputUpdate(e)}>
    <option>--</option>
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
      <option>文德</option>
      <option>港墘</option>
      <option>西湖</option>
      <option>劍南路</option>
      <option>大直</option>
      <option>松山機場</option>
      <option>中山國中</option>
      <option>南京復興</option>
      <option>忠孝復興</option>
      <option>大安</option>
      <option>科技大樓</option>
      <option>六張犁</option>
      <option>麟光</option>
      <option>辛亥</option>
      <option>萬芳醫院</option>
      <option>萬芳社區</option>
      <option>木柵</option>
      <option>動物園</option>
    </optgroup>
    <optgroup label="松山新店線">
      <option>松山</option>
      <option>南京三民</option>
      <option>台北小巨蛋</option>
      <option>南京復興</option>
      <option>松江南京</option>
      <option>中山</option>
      <option>北門</option>
      <option>西門</option>
      <option>小南門</option>
      <option>中正紀念堂</option>
      <option>古亭</option>
      <option>台電大樓</option>
      <option>公館</option>
      <option>萬隆</option>
      <option>景美</option>
      <option>大坪林</option>
      <option>七張</option>
      <option>新店區公所</option>
      <option>新店</option>
    </optgroup>
    <optgroup label="中和新蘆線">
      <option>南勢角</option>
      <option>景安</option>
      <option>永安市場</option>
      <option>頂溪</option>
      <option>古亭</option>
      <option>東門</option>
      <option>忠孝新生</option>
      <option>松江南京</option>
      <option>行天宮</option>
      <option>中山國小</option>
      <option>民權西路</option>
      <option>大橋頭</option>
      <option>三重國小</option>
      <option>三和國中</option>
      <option>徐匯中學</option>
      <option>三民高中</option>
      <option>蘆洲</option>
      <option>台北橋</option>
      <option>菜寮</option>
      <option>三重</option>
      <option>先嗇宮</option>
      <option>頭前庄</option>
      <option>新莊</option>
      <option>輔大</option>
      <option>丹鳳</option>
      <option>迴龍</option>
    </optgroup>
    <optgroup label="小碧潭線">
      <option>小碧潭</option>
    </optgroup>
    <optgroup label="新北投線">
      <option>新北投</option>
    </optgroup>
  </select>
);

MRT.propTypes = {
  handleInputUpdate: PropTypes.func.isRequired,
};

export default MRT;
