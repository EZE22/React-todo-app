import React, {Component} from 'react'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'
import moment from 'moment'

class ListTodosComponent extends Component {
    constructor(props){
        //console.log("constructor")
        super(props)
        this.state = {
            todos : [],
            message: null
        }
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
        this.addTodoClicked = this.addTodoClicked.bind(this)
    }

    //Life Cycle Method 
    // componentWillUnmount(){
    //     console.log("componentWillUnMount")
    // }

    //Life Cycle method
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('ShouldComponentUpdate')
    //     console.log(nextProps)
    //     console.log(nextState)
    //     return true
    // }

    //Life Cycle method 
    componentDidMount(){
        //console.log("componentDidMount")
        this.refreshTodos();
    }

    refreshTodos(){
        let username = AuthenticationService.getLoggedInUserName();
        TodoDataService.retriveAllTodos(username)
            .then(
                response => {
                    console.log(response)
                    this.setState({todos: response.data})
                }
            )
    }

    deleteTodoClicked(id){
        let username = AuthenticationService.getLoggedInUserName()
        //console.log(id + " " + username);
        TodoDataService.deleteTodo(username, id)
        .then(
            response => {
                this.setState({message: `Delete of todo ${id} Successful`})
                this.refreshTodos();
            }
        )
    }

    updateTodoClicked(id){
        //console.log('update' + id)
        this.props.history.push(`/todos/${id}`)
    }

    addTodoClicked(){
        this.props.history.push(`/todos/-1`)
    }

    render(){
        //console.log("render")
        return(
            <div>
                <h1>List Todos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Target Date</th>
                                <th>Is Completed?</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map (
                                    todo => 
                                        <tr key={todo.id}>
                                            <td>{todo.description}</td>
                                            <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>   
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent