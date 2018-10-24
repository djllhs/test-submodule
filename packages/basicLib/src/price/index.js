// 将金额从分转换为元
export function convertToYuan(amount) {
  if (isNaN(amount)) return;
  return (amount / 100).toFixed(2);
}

// 金额转换成分
export function convertToFen(amount) {
  if (!amount) return;
  let temp = amount + '', index = temp.indexOf('.'), newAmount;
  if (index === -1) {
      newAmount = amount * 100;
  } else {
      temp += '00000';
      temp = temp.replace('.', '');
      temp = temp.substring(0, index + 2);
      newAmount = parseInt(temp, 10);
  }
  return newAmount;
}

// 将金额从分转换为元 千位打点
export function formatMoney(num) {
  var ms, l, t = "",
      i;
  var m = (num + "");
  ms = m.substr(0, m.length - 2);
  l = ms.split("").reverse();
  if (m.length < 2) {
      return "0.0" + num;
  }
  if (m.length < 3) {
      return "0." + num;
  }
  for (i = 0; i < l.length; i++) {
      t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
  }
  return t.split("").reverse().join("") + "." + m.substr(m.length - 2, m.length);
}
