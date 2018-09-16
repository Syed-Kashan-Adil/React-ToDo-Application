import React, {Component} from "react";

class AddOption extends Component{
    
    sendOption = (event)=>{
        event.preventDefault();
        const option=document.getElementById("task").value;
        this.props.handleAddOption(option);
        document.getElementById('task').value=null;
    }
    render(){
        
        return(

            <form onSubmit={this.sendOption}>
                <input name="task" id="task" placeholder="Add Task Here" />
                <button>Submit</button>
            </form>
        )
    }
}
export default AddOption;