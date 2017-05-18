Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./../src/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by xingxiao05 on 17/5/17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Carousel = function (_React$Component) {
    _inherits(Carousel, _React$Component);

    function Carousel(props) {
        _classCallCheck(this, Carousel);

        return _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));
    }

    _createClass(Carousel, [{
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                var _this2 = this;

                var swiper = this.refs.swiper;
                var Imgs = swiper.querySelectorAll('img');
                var count = 1;
                var valForTransformY = this.getTransformY(Imgs[0]);

                setInterval(function () {

                    Imgs.forEach(function (img) {
                        if (count > 3) {
                            img.style.transform = 'translateY(' + 0 + 'px)';
                        } else {
                            var _valForTransformY = _this2.getTransformY(img);
                            img.style.transform = 'translateY(' + (_valForTransformY - 100) + 'px)';
                        }
                    });
                    if (count > 3) {
                        count = 0;
                    }
                    count++;
                }, 3000);
            }

            return componentDidMount;
        }()
    }, {
        key: 'getTransformY',
        value: function () {
            function getTransformY(element) {

                var imgStyleSplit = window.getComputedStyle(element).transform.split(',');

                var imgStyleTransformY = imgStyleSplit[imgStyleSplit.length - 1];

                var realTransformY = imgStyleTransformY.trim();

                var realValForTransformY = realTransformY.substring(0, realTransformY.length - 1);

                return realValForTransformY;
            }

            return getTransformY;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                return _react2['default'].createElement(
                    'div',
                    { className: ['swiperImg'], ref: 'swiper' },
                    this.props.srcs.map(function (src, index) {
                        if (index === 0) {
                            return _react2['default'].createElement('img', { className: ['firstImg'], src: require('' + String(src)), key: index, alt: index });
                        }
                        return _react2['default'].createElement('img', { src: require('' + String(src)), key: index, alt: index });
                    })
                );
            }

            return render;
        }()
    }]);

    return Carousel;
}(_react2['default'].Component);

exports['default'] = Carousel;
