import moment from 'moment';
/**
 * 格式化 日期或时间
 * @param {* 时间戳} date
 * @param {* 显示格式} type
 * @param {* 日期连接符合} connector
 */
export function formDateAndTime(date, type='YMDHms', connector='-') {
  if (!date) return '--';
  switch (type) {
    case 'YMDHms':
      const YMDHms = getFormatStyle('YYYY-MM-DD', connector) + ' HH:mm:ss';
      return moment(date).format(YMDHms);
    case 'YMDHm':
      const YMDHm = getFormatStyle('YYYY-MM-DD', connector) + ' HH:mm';
      return moment(date).format(YMDHm);
    case 'YMD':
      const YMD = getFormatStyle('YYYY-MM-DD', connector);
      return moment(date).format(YMD);
    case 'MD':
      const MD = getFormatStyle('MM-DD', connector);
      return moment(date).format(MD);
    case 'Hms':
      return moment(date).format('HH:mm:ss');
    case 'Hm':
      return moment(date).format('HH:mm');
    case 'ms':
      return moment(date).format('mm:ss');
    default:
      const format = getFormatStyle('YYYY-MM-DD', connector) + ' HH:mm:ss';
      return moment(date).format(format);
  }

  function getFormatStyle(format, connector) {
    return format.replace(/\-/g, connector);
  }
}
