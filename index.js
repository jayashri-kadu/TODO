
let todoArray=[];

function saveTodo(){
    let title = document.getElementById("title").value;
    todoArray.push(title);
    localStorage.setItem("todos",todoArray.toString());
    document.getElementById("title").value="";  //after enter it will be empty
    fetchTodos();
}

function fetchTodos(){
    let str = localStorage.getItem("todos");
    todoArray = str.split(",");
    let htmlString = `
        <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Actions</th>
        
        </tr>
    `;
    let counter = 0;
    todoArray.forEach((ele)=>{
        counter++;
        htmlString += `
            <tr>
                <td>${counter}</td>
                <td>${ele}</td>
                <td>
                    <button class="btn btn-outline-warning" onclick="editTodo(${counter-1})">Edit</button>
                    <button class="btn btn-outline-danger" onclick="deleteTodo(${counter-1})">Delete</button>
                </td>
            </tr>
        `
    });
    document.getElementById("TodoTable").innerHTML = htmlString
}

function editTodo(index){
   let newValue = prompt(`Do you want to edit ${todoArray[index]} ?`,todoArray[index]);
   if(newValue != null){
    todoArray[index]=newValue;
    localStorage.setItem("todos",todoArray.toString());
    fetchTodos();
   }
}

function deleteTodo(index){
if(confirm(`Do you really want to delete ${todoArray[index]}?`)){
    todoArray.splice(index,1);
    localStorage.setItem("todos",todoArray.toString());
    fetchTodos()
}
}