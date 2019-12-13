import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';

import App from './App'

//如果想要全局的扩展React.Component的protype，比如：想把ajax的方法全局挂载组件的this上，就可以使用下面的方式

//引入所有的ajax的请求
// import * as services from './services'
//在protype上挂载一个叫http的东西，然后就可以在组件内部通过this.http的方法执行一些操作
// React.Component.prototype.http = services


render(<App />, document.getElementById('root'));


