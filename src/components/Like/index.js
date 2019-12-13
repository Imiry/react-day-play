import React, { Component } from 'react'

export default class Like extends Component {
  constructor() {
    super();
    this.state = {
      isLiked: false
    }
  }

  handleLikedClick = () => {
    //使用这种方式修改数据是不允许的，能修该数据，但是界面上不会渲染
    // this.state.isLiked = !this.state.isLiked
    //要修改数据，就是用setState()方法，setState方法可以有两个参数
    //第一个参数有两种情况，第一种情况是一个对象
    
    // this.setState({
    //   isLiked: !this.state.isLiked
    // })

    //第二种情况是一个方法  setState是异步的
    this.setState((preState) => {
      console.log(preState)
      console.log('setState内部的!this.state.isLiked：',this.state.isLiked)
      return {
        isLiked: !preState.isLiked
      }
    },() => {
      //由于setState是异步的，如果想要获取最新的state，应该在这个回调里来获取
      console.log(this.state.isLiked)
    })

    console.log('setState外部的!this.state.isLiked：',this.state.isLiked)
  }
  render() {
    return (
      <div>
        <span onClick={this.handleLikedClick}>
          { this.state.isLiked ? '取消 ☺︎' : '喜欢 😂'}
        </span>
      </div>
    )
  }
}
