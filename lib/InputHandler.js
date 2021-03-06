'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcTouchable = require('rc-touchable');

var _rcTouchable2 = _interopRequireDefault(_rcTouchable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var InputHandler = function (_Component) {
  (0, _inherits3["default"])(InputHandler, _Component);

  function InputHandler() {
    (0, _classCallCheck3["default"])(this, InputHandler);
    return (0, _possibleConstructorReturn3["default"])(this, _Component.apply(this, arguments));
  }

  InputHandler.prototype.render = function render() {
    var _props = this.props,
        prefixCls = _props.prefixCls,
        disabled = _props.disabled,
        otherProps = (0, _objectWithoutProperties3["default"])(_props, ['prefixCls', 'disabled']);

    return _react2["default"].createElement(
      _rcTouchable2["default"],
      { disabled: disabled, activeClassName: prefixCls + '-handler-active' },
      _react2["default"].createElement('span', otherProps)
    );
  };

  return InputHandler;
}(_react.Component);

InputHandler.propTypes = {
  prefixCls: _react.PropTypes.string,
  disabled: _react.PropTypes.bool
};

exports["default"] = InputHandler;
module.exports = exports['default'];