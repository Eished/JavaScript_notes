// ./lib/move.js
// 封装获取计算后元素样式函数，返回小数
function getStyle(obj, name) {
  if (obj.currentStyle) {
    return obj.currentStyle[name];
  } else {
    return getComputedStyle(obj, '') [name];
  }
}
        // 任意值运动框架
function startMove(obj, json, fnEnd ) {
  clearInterval(obj.timer);
  obj.timer = setInterval(move, 30);
  function move() {
    var current = 0;
    var stop = true;
    for (const attr in json) {
      if (attr === 'opacity') {
        // 用 parseFloat 保留小数并去掉后面 px ，从左至右提取数字，遇到不是数字跳出
        // Math.round() 四舍五入取整 
        current = Math.round(parseFloat(getStyle(obj, attr))*100);
      } else {
        // 用 parseInt 去掉后面 px ，从左至右提取数字，遇到不是数字跳出
        current = parseInt(getStyle(obj, attr));
      }
      var speed = (json[attr] - current)/4;  
      if (speed < 0) {
        speed = Math.floor(speed);
      } else {
        speed = Math.ceil(speed);
      }
      if (json[attr] === current) {
        stop = true;
      } else {
        stop = false;
        if (attr === 'opacity') {
          obj.style[attr] = (current + speed)/100;
          obj.style.filter = "alpha("+[attr]+ "=" + (current + speed) + ")"; 
        } else {
          obj.style[attr] = current + speed + 'px'; 
        }
      }
      console.log('json[attr]:',json[attr],'attr:', attr,'current:',current,'getStyle:',getStyle(obj, attr),'speed:',speed);
    }
    if (stop === true) {
      clearInterval(obj.timer);
      if (fnEnd) {
        fnEnd()
      }
    }
  }
}