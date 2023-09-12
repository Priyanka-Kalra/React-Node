import React, { Component } from 'react'

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [{ task: 'Check Mails', id: 1 }, { task: 'Make a Project', id: 2 }, { task: 'Pay Bills', id: 3 }],
            currentTask: '',
            currentId:4
        }

    }
    handleChange = (e) => {

        this.setState({
            currentTask: e.target.value
        })
    }
    handleSubmit = () => {
        this.setState({
            tasks: [...this.state.tasks, { task: this.state.currentTask, id: this.state.currentId}],
            currentTask: '',
            currentId:this.state.currentId+1
            
        })
    }
    handleDelete = (id) => {
        let narr = this.state.tasks.filter((tsk) => {
            return tsk.id != id
        })
        this.setState({
            tasks: [...narr]
        })
    }
    render() {
        return (
            <div>
                <input type='text' value={this.state.currentTask} onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Submit</button>
                <ul>{
                    this.state.tasks.map((taskObj) => (
                        <li key={taskObj.id} >
                            <p>{taskObj.task}</p>
                            <button onClick={() => this.handleDelete(taskObj.id)}>Delete</button>
                        </li>
                    ))

                }
                </ul>
            </div>
        )
    }
}


export default Todo;
