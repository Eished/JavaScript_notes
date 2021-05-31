
// 封装获取计算后元素样式函数，返回小数
function getStyle(obj, name) {
  if (obj.currentStyle) {
    return obj.currentStyle[name];
  } else {
    return getComputedStyle(obj, '') [name];
  }
}
        // 任意值运动框架
function startMove(obj, name, iTarget ) {
  clearInterval(obj.timer);
  obj.timer = setInterval(move, 30);
  function move() {
    var current = 0;
    if (name === 'opacity') {
      // 用 parseFloat 保留小数并去掉后面 px ，从左至右提取数字，遇到不是数字跳出
      // Math.round() 四舍五入取整 
      current = Math.round(parseFloat(getStyle(obj, name))*100);
    } else {
      // 用 parseInt 去掉后面 px ，从左至右提取数字，遇到不是数字跳出
      current = parseInt(getStyle(obj, name));
    }
    var speed = (iTarget - current)/3;  
    if (speed < 0) {
      speed = Math.floor(speed);
    } else {
      speed = Math.ceil(speed);
    }
    if (iTarget === current) {
      clearInterval(obj.timer);
    } else {
      if (name === 'opacity') {
        obj.style[name] = (current + speed)/100;
        obj.style.filter = "alpha("+[name]+ "=" + (current + speed) + ")"; 
      } else {
        obj.style[name] = current + speed + 'px'; 
      }
    }
    // console.log('iTarget',iTarget,'current',current,'getStyle',getStyle(obj, name),speed)
  }
}