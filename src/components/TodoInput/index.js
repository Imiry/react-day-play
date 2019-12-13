//react里面通过ref来获取组件或者dom元素，要使用ref之前必须先使用 createRef方法来创建一个ref
import React, { Component, createRef} from 'react'
import PropTypes from 'prop-types'

export default class TodoInput extends Component {
  static propTypes = {
    btnText: PropTypes.string  //类型校验
  }
  static defaultProps = {
    btnText: '添加'
  }
  constructor() {
    super();
    this.state = {
      inputValue: ''
    }
    //在constructor里面创建ref
    this.inputDom = createRef()   //用来获取组件或者dom元素
  }
  handleInputChange = (e) => {
    // console.log(e.currentTarget.value)
    this.setState({
      inputValue: e.currentTarget.value
    })
  }

  handleAddClick = () => {
    // console.log(this.state.inputValue)
    this.props.addTodo(this.state.inputValue)
    this.setState({  //添加之后文本框内容清空
      inputValue: ''
    },() => {
      this.inputDom.current.focus() //添加之后才获取文本框焦点
    })
    
  }

  handleKeyup = (e) => {  //通过键盘来添加数据
    if(e.keyCode === 13) {
      this.handleAddClick()
    }
  }
  render() {
    return (
      <div>
        <input 
        type="text" 
        onChange={this.handleInputChange}
        value={this.state.inputValue}
        onKeyUp={this.handleKeyup}
        ref={this.inputDom}
        />
        <button onClick={this.handleAddClick}>{this.props.btnText}</button>
      </div>
    )
  }
}
 