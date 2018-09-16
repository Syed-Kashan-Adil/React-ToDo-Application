import React, {Component} from 'react';
import Header from "./Header.js";
import AddOption from "./AddOption.js"
import RenderOptions from './RenderOptions.js';

class ToDo extends Component{
    constructor(){
        super();
        this.state={
            Todo:[],
        }
    }
    handleAddOption= (option) => {
        this.setState((prevState) => {
            return(prevState.Todo.push(option))
        })
    }
    handleDeleteOption = (index) => {
        this.setState((prevState) => {
            return(prevState.Todo.splice(index,1))
        })
    }
    handleEditOption = (index) => {
        const editOption=prompt("Type here",this.state.Todo[index]);
        this.setState((prevState) => {
            return(prevState.Todo[index]=editOption)
        })
    }
    render(){
        return (
            <div>
            <Header Title="To-Do-Application" />
            <AddOption handleAddOption={this.handleAddOption} />
            <RenderOptions Todo={this.state.Todo} handleDeleteOption={this.handleDeleteOption} handleEditOption={this.handleEditOption} />
            </div>
        )
    }
}
export default ToDo;