function Delete(){
    let abort=()=>{
        alert('Task Id:[---] deleted')
    }
    return(
<>
Delete Task
<label>Task Id :</label>
<br/>
<button onClick={abort}>Update</button>
</>
    )
}
export default Delete;