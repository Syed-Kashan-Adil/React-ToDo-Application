import React , {Component} from "react";

class RenderOptions extends Component{
    
    render(){
       
        return(
            <table>{ 
                this.props.Todo.map((singleTodo,index) => {
                    return(
                        <tbody key={index}>
                        <tr>
                            <th>{singleTodo}</th>
                            <td><button onClick={() => {
                                this.props.handleDeleteOption(index)
                            }}>Delete</button></td>
                            <td><button onClick={() => {
                                this.props.handleEditOption(index)
                            }}>Update</button></td>
                        </tr>
                        </tbody>
                    )
                })
            }</table>
        )
    }
}
export default RenderOptions;