figure{
  border-radius: 5px;
  word-break: break-all;
  color: transparent;
  position: relative;
  float: left;
  overflow: hidden;
  margin: 0 auto;
 
  width: 30%;
  height: 100%;
  color: #000000;
  text-align: center;
  align-items: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.6s ease;
  transition: all 0.6s ease;
  /* box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4); */
}

figure:after {
  background: #ffffff;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  content: '';
  opacity: 0.75;
  -webkit-transform: scaleY(0);
  transform: scaleY(0);
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

figure figcaption {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

figure span{
  margin: 0 auto;
  position: absolute;
  width: 81%;
  left: 0;
  opacity: 0;
  padding: 0 30px;
  display: inline-block;
  font-weight: 400;
  text-transform: uppercase;
  bottom: 50%;
}

figure:hover .diary-favorite-element,
figure.hover .diary-favorite-element {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}
figure:hover:after,
figure.hover:after {
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
}
figure:hover figcaption span,
figure.hover figcaption span{
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}
figure:hover figcaption span,
figure.hover figcaption span {
  opacity: 1;
}