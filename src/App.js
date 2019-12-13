

import React, { Component,Fragment } from 'react'
import { 
  TodoHeader,
  TodoInput,
  TodoLIst,
  Like
} from './components'

import {  getTodos} from './services'
export default class app extends Component {
  constructor() {
    super();
    this.state = {
      desc: '今日事 今日毕',
      title: '代办事项表',
      todos: [],
      isLoading: false
    }
  }

  //-----------添加数据
  addTodo = (todoTitle) => {
    //这里代码不对，3不是一个数组，因为push语句返回的是数组的长度
    // console.log(todoTitle)
    // this.setState({
    //   todos: this.state.todos.push({
    //     id: Math.random(),
    //     title: todoTitle,
    //     completed: false
    //   })
    // })

    //这里代码对的
    this.setState({
      todos: this.state.todos.concat({
        id: Math.random(),
        title: todoTitle,
        completed: false
      })
    })

    // const newTodos = this.state.todos.slice()
    // const newTodos = [...this.state.todos]
    // newTodos.push({
    //   id: Math.random(),
    //   title: todoTitle,
    //   completed: false
    // })
    // this.setState({
    //   todos: newTodos
    // })
  }

  //----------------切换完成状态
  onCompletedChange = (id) => {
    // console.log('onCompletedChange',id)
    this.setState((prevState) => {
      return {
        todos: prevState.todos.map(todo => {
          if(todo.id === id){
            todo.completed = !todo.completed
          }
          return todo
        })
      }
    })
  }


  //------------删除数据、
  // onDelete = (id) => {
  //   // console.log('onDelete',id)
    
  //   this.setState((prevState) => {
  //     var index = prevState.todos.findIndex(todo =>{
  //       if(todo.id === id){
  //         return true
  //       }
  //     })
  //     return {
  //       todos: this.state.todos.splice(index,1)
  //     }
  //   })
  // }

  getTodosData = () => {
    this.setState({
      isLoading: true
    })
    getTodos().then((res) => {
      if(res.status === 200){
          this.setState({
            todos : res.data
          })
      }else{
          //处理错误
      }
    }).catch(err => {
      throw err
    }).finally(() => {
      this.setState({
        isLoading: false
      })
    })
  }
   
  componentDidMount() {
    this.getTodosData()

  }

  render() {
    return (
      <Fragment>
        <TodoHeader desc={this.state.desc} >{this.state.title}</TodoHeader>
        <TodoInput addTodo={this.addTodo} />
        {
          this.state.isLoading ? <div>isLoading</div> : <TodoLIst todos={this.state.todos} onCompletedChange={this.onCompletedChange} onDelete={this.onDelete}/>
        }
        <Like />
      </Fragment>
    )
  }
}
