import { useNavigate } from "react-router-dom"
const AddTodo = () => {
    const navigate=useNavigate()
    const handleClick=()=>{
        navigate("/")
    }
     return (
    <div>
    <button onClick={handleClick}>Go To Home</button>   
    </div>
  )
}

export default AddTodo;
