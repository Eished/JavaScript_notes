function Drag(id) {
  this.disX = '';
  this.disY = '';
  this.oDiv = document.getElementById(id);
  var _this = this;
  this.oDiv.onmousedown = function (ev) {
    _this.fnDown(ev);
    return false;
  };
}
Drag.prototype.fnDown = function (ev) {
  var ev = event||ev;
  var _this = this;
  // 鼠标可视区位置 - div左边距 = 鼠标在div内的位置
  this.disX = ev.clientX - this.oDiv.offsetLeft;
  this.disY = ev.clientY - this.oDiv.offsetTop;
  console.log(this.disX,'可视区鼠标X：', ev.clientX, '鼠标Y：',ev.clientY);
  document.onmousemove = function (ev) {
    _this.mouseMove(ev);
  }
  document.onmouseup = function (ev) {
    _this.mouseUp(ev);
  }
}
Drag.prototype.mouseMove = function(ev) {
    // 不断获取Event 对象，坐标才会不断更新
    var ev = event||ev;
    // console.log('可视区鼠标X：', ev.clientX, '鼠标Y：',ev.clientY);
    // div位置 = 鼠标可视区新的位置 - 鼠标与div的距离
    this.oDiv.style.left = ev.clientX - this.disX + 'px';
    this.oDiv.style.top = ev.clientY - this.disY + 'px';
  }
Drag.prototype.mouseUp = function () {
  document.onmousemove = '';
  document.onmouseup = ''; 
}