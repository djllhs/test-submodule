'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formDateAndTime = formDateAndTime;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 格式化 日期或时间
 * @param {* 时间戳} date
 * @param {* 显示格式} type
 * @param {* 日期连接符合} connector
 */
function formDateAndTime(date) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YMDHms';
  var connector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '-';

  if (!date) return '--';
  switch (type) {
    case 'YMDHms':
      var YMDHms = getFormatStyle('YYYY-MM-DD', connector) + ' HH:mm:ss';
      return (0, _moment2.default)(date).format(YMDHms);
    case 'YMDHm':
      var YMDHm = getFormatStyle('YYYY-MM-DD', connector) + ' HH:mm';
      return (0, _moment2.default)(date).format(YMDHm);
    case 'YMD':
      var YMD = getFormatStyle('YYYY-MM-DD', connector);
      return (0, _moment2.default)(date).format(YMD);
    case 'MD':
      var MD = getFormatStyle('MM-DD', connector);
      return (0, _moment2.default)(date).format(MD);
    case 'Hms':
      return (0, _moment2.default)(date).format('HH:mm:ss');
    case 'Hm':
      return (0, _moment2.default)(date).format('HH:mm');
    case 'ms':
      return (0, _moment2.default)(date).format('mm:ss');
    default:
      var format = getFormatStyle('YYYY-MM-DD', connector) + ' HH:mm:ss';
      return (0, _moment2.default)(date).format(format);
  }

  function getFormatStyle(format, connector) {
    return format.replace(/\-/g, connector);
  }
}