/* 
  消息通知类：
  1.传参默认值：消息，持续时间，重要性
  2.持续时间非数字时：为永久消息；
  3.初始化用 new messageBox() 参数为空时，调用 showMessage() 传参显示消息；用于增大作用域。
  4.重要性：0 = log；1 = log+自定义弹窗；2 = log+自定义弹窗+GM；默认 = 自定义弹窗；
  */
class MessageBox {
  constructor(text, setTime = 5000, important = 1) {
    this._box = null; // 永久显示标记，和元素地址
    this._text = text;
    this._setTime = setTime;
    this._important = important;
    this._timer = 0; // 计数器
    // 非空初始化，立即执行；
    if (text != undefined) {
      this.showMessage();
    }
  }

  // 消息盒子
  static genMessageBox() {
    // 添加 genBox 样式
    // GM_addStyle(`#messageBox {width: 222px;float: left;position: fixed;border-radius: 10px;left: auto;right: 5%;bottom: 20px;z-index:999}`);
    // GM_addStyle(`#messageBox div {width:100%;background-color:#64ce83;float:left;padding:5px 10px;margin-top:10px;border-radius:10px;color:#fff;box-shadow: 0px 0px 1px 3px #ffffff;}`);

    const b = document.createElement('div'); //创建类型为div的DOM对象
    b.id = 'messageBox';
    document.querySelector('body').appendChild(b); // 消息盒子添加到body
  };

  _genBox(text) {
    const box = document.createElement('div');
    box.textContent = text;
    return box;
  }

  // 显示消息
  showMessage(text = this._text, setTime = this._setTime, important = this._important) {
    if (this._box != null) {
      throw new Error("先移除上条消息，才可再次添加！");
    }
    this._text = text;
    this._setTime = setTime;
    this._important = important;

    const messageBox = document.querySelector('#messageBox'); // 消息插入位置

    switch (important) {
      case 0: {
        console.log(text);
        break;
      }
      case 1: {
        console.log(text);
        this._box = this._genBox(text); // 元素标记，删除用
        messageBox.appendChild(this._box); // 显示消息
        break;
      }
      case 2: {
        console.log(text);
        this._box = this._genBox(text); // 元素标记，删除用
        messageBox.appendChild(this._box); // 显示消息
        GM_notification(text);
        break;
      }

      default: {
        this._box = this._genBox(text); // 元素标记，删除用
        messageBox.appendChild(this._box); // 显示消息
        break;
      }
    }

    if (setTime && !isNaN(setTime) && important != 0) { // 默认5秒删掉消息，可设置时间，none一直显示
      setTimeout(() => {
        this.removeMessage();
      }, setTime);
    }
  }

  refreshMessage(text) {
    if (isNaN(this._setTime) && this._box != null) {
      switch (this._important) {
        case 0: {
          console.log(text);
          break;
        }
        case 1: {
          console.log(text);
          this._box.innerHTML = text;
          break;
        }
        case 2: {
          console.log(text);
          this._box.innerHTML = text;
          GM_notification(text);
          break;
        }

        default: {
          this._box.innerHTML = text;
          break;
        }
      }
    } else {
      throw new Error("只有弹窗永久消息支持刷新内容：" + this._setTime);
    }
  }

  // 移除方法，没有元素则等待setTime 5秒再试5次
  removeMessage() {
    if (this._box != null) {
      this._box.parentNode.removeChild(this._box);
      this._box = null; // 清除标志位
    } else {
      // 空初始化时，消息异步发送，导致先执行移除而获取不到元素，默认 setTime=5000
      // 消息发出后，box 非空，可以移除，不会执行 setTime="none"
      if (this._timer == 4) {
        throw new Error("移除的元素不存在：" + this._box);
      }
      this._timer++;
      setTimeout(() => {
        this.removeMessage();
      }, this._setTime);
    }
  }

  // 危险操作
  cleanMessage() {
    document.querySelector('#messageBox').innerHTML = "";
  }
}

MessageBox.genMessageBox();
// console.log(new MessageBox("hello"));

const ms = new MessageBox();
ms.showMessage("world", "none");
ms.showMessage("123", "none");
// ms.removeMessage();
// ms.removeMessage();
// ms.cleanMessage();
// 导致错误的清屏
// new MessageBox().cleanMessage();
// MessageBox.addMessage();

ms.refreshMessage("刷新内容");