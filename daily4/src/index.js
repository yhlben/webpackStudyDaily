import _ from 'lodash'
import printMe from './print'
import './style.css'
function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack2'], ' ');
  element.classList.add('hello');
  element.setAttribute("id","123");
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);
  
  return element;
}

document.body.appendChild(component());

console.log($('#123').css('background-color','skyblue'));
