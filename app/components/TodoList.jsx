var React = require('react');
var Todo = require('Todo');
var {connect} = require('react-redux');
var TodoAPI = require('TodoAPI');;

var TodoList = React.createClass({
    render: function () {
        var { todos, showCompleted, searchText } = this.props;
        var renderTodos = () => {
            if (todos.length === 0) {
                return (
                    <p className="container__message">Nothing To Do</p>
                )
            }
            return TodoAPI.filteredTodos(todos, showCompleted, searchText).map((todo) => {
                return (
                    <Todo key={todo.id} {...todo}/> // {...todo} allows all data to be passed down to Todo withouth needing to declare indivually
                )
            })
        }
        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
});

module.exports = connect(
    (state) => {
        return state;
    }
)(TodoList);