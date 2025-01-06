function Update(){
    let edit=()=>{
        alert('Task Id:[---] updated')
    }
    return(
<>
Update Task
<label>Task Id :</label>
<br/>
<button onClick={edit}>Update</button>
</>
    )
}
export default Update;