const TodoItem = ({ todo }) => {

    console.log("TodoItem:", todo);
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        marginTop: "10px",
      }}
      
    >
      <h2>{todo.title}</h2>
    </div>
  );
};

export default TodoItem;