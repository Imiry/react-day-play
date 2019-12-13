import React, { Component } from 'react'
import TodoItem from './TodoItem.js'
import PropTypes from 'prop-types'
export default class TodoList extends Component {
  //关于传过来的props进行类型高级校验
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })).isRequired,
    onCompletedChange: PropTypes.func,    //处理函数进行类型校验
    onDelete: PropTypes.func
  }

  render() {
    // console.log(this.props.todos)
    return (
      <ul>
        {
          this.props.todos.map( todo => {
            return (
            <TodoItem onCompletedChange={this.props.onCompletedChange} onDelete={this.props.onDelete} key={todo.id} {...todo} ></TodoItem>
            )
          })
        }
      </ul>
        
     
    )
  }
}
