const btn = document.getElementById("add");
const lists = document.getElementById("lists");
const todoLists = [];

const render = () => {
   todoLists.forEach((item, index) => {
      const li = document.createElement("li");
      const deleteBtn = document.createElement("button");
      li.textContent = item;
      deleteBtn.className = "delete";
      lists.appendChild(li);
      li.appendChild(deleteBtn);
      deleteBtn.addEventListener("click", () => {
         deleteTodo(index);
      });
   });
}

const deleteTodo = (index) => {
	todoLists.splice(index, 1);
   lists.innerHTML = null;
   render()
};

btn.addEventListener("click", () => {
	const input = document.getElementById("input");
	const value = input.value;
	todoLists.push(value);
   lists.innerHTML = null;
   render()
	input.value = null;
});