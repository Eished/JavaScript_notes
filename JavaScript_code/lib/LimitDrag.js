// 继承属性
function LimitDrag(id) {
  Drag.call(this, id);
}
// 继承原型
for (var i in Drag.prototype) {
  LimitDrag.prototype[i] = Drag.prototype[i];
}

LimitDrag.prototype.mouseMove = function(ev) {
  // 不断获取Event 对象，坐标才会不断更新
  var ev = event||ev;
  // console.log('可视区鼠标X：', ev.clientX, '鼠标Y：',ev.clientY);
  // div位置 = 鼠标可视区新的位置 - 鼠标与div的距离
  var l = ev.clientX - this.disX;
  var t = ev.clientY - this.disY; 
  if (l < 0) {
    l = 0;
  } else if (l > document.documentElement.clientWidth - this.oDiv.offsetWidth) {
    l = document.documentElement.clientWidth - this.oDiv.offsetWidth;
  }
  if ( t < 0) {
    t = 0;
  } else if (t > document.documentElement.clientHeight - this.oDiv.offsetHeight) {
    t = document.documentElement.clientHeight - this.oDiv.offsetHeight;
  }
  this.oDiv.style.top = t + 'px';
  this.oDiv.style.left = l + 'px';
}