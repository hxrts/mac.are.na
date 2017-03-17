import React from 'react'
import { Link } from 'react-router'

const Tooltip = require('rc-tooltip')
const Slider = require('rc-slider')
require('rc-slider/assets/index.css')
require('rc-tooltip/assets/bootstrap.css')

const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle {...restProps} />
    </Tooltip>
  );
};


class Header extends React.Component {
  render() {
    return (
      <div className="header-wrap">

        <h1 className="banner">
          <a href="https://are.na/mac-are-na/" target="_blank">
            <img className="logo dim black" src={require('../assets/logo.svg')} alt="logo" />
          </a>
          <Link className="link dim black" to={`/`}>
            mac.are.na
          </Link>
        </h1>

        <div className="volume-slider">
          <Slider min={0} max={100} defaultValue={50} handle={handle} />
        </div>

    </div>

    )
  }
}

export default Header