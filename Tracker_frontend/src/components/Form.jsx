


function Form(){

    let create=()=>{
        alert('New task created')
    }


return(
<>
<div className="task">
TASK MANAGEMENT
<br/>
<br/>
Create a new Task
<br/>
<br/>
<label> Title :</label>
<br/>
<input name="Task Title" placeholder='Enter Task here'></input>
<br/>
<label> Description :</label>
<br/>
<textarea name='Task Details'placeholder='Enter Task Details'></textarea>
<br/>
<label>Address :</label>
<br/>
<textarea name='Customer Address' placeholder='Enter Customer Address '></textarea>
<br/>
<label> Assigned To : </label>
<br/>
<input name="Technician Name" placeholder='Technician Name'></input>
<br/>
<label> Assigned on : </label>
<br/>
<input name="Date" placeholder='Task Date'></input>
<br/>
<br/>
<button onClick={create}>Create Task</button>
</div>
</>
)};
export default Form;