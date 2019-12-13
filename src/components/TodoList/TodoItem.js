import React, { Component } from 'react'

const noop = () => {}
export default class TodoItem extends Component {

  //切换状态事件改变App.js中的数据
  handleCheckboxChange = () =>  {
  // this.props.onCompletedChange && this.props.onCompletedChange(this.props.id)
    const { onCompletedChange = noop,id } = this.props  //利用对象的解构把他们解构出来，另外解构中可以有默认值
    onCompletedChange && onCompletedChange(id)
  }

  //点击删除事件，点击，之后在App.js进行数据改变，，主要是组件传递函数处理事件
  // handleDelete = () => {
  //   const { onDelete = noop,id } = this.props
  //   onDelete && onDelete(id)
  // }


  //判断组件props数据的变化，如果改变返回一个true，就会从新render()渲染，或者不执行
  //在这个周期拿到的数据就是上一次的数据比不是最新的，所以要通过nextState来拿
  shouldComponentUpdate (nextProps,nextState) {
    return nextProps.completed !== this.props.completed
  }

  render() {
    console.log(`TodoItems ${this.props.title} render`)

    const { completed,title } = this.props  //props中对象解构出来了
    return (
      <li>
        <input 
          checked={completed}
          onChange={this.handleCheckboxChange}
          type="checkbox" 
         />  
         <span>{title} {this.props.completed ? '已完成' : '未完成'}</span>
         {/* <input onClick={this.handleDelete} type="button" value="删除"/> */}
      </li>
    )
  }
}
