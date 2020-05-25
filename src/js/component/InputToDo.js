import React, { useState, Component } from "react";

export const InputToDo = () => {
	const [task, setTask] = useState("");
	const [list, setList] = useState([]);

	const handleChange = event => {
		setTask(event.target.value);
	};

	const handleSubmit = event => {
		if (task.trim() && task.length !== 0) {
			setList(list.concat(task));
		} else {
			alert("Task can not be empty");
		}
		setTask("");
		event.preventDefault();
	};

	const removeTodo = index => {
		const newTodos = [...list];
		newTodos.splice(index, 1);
		setList(newTodos);
	};

	return (
		<div className="container">
			<h1 className="title">
				To Do List
				<i className="fas fa-tasks" />
			</h1>
			<form onSubmit={handleSubmit}>
				<input
					className="d-inline-block align-middle divInput"
					type="text"
					value={task}
					onChange={handleChange}
					placeholder="What´s next to be done?"
				/>
				<button className="btn btn-primary addTask" type="submit">
					Add Task
				</button>
			</form>
			<ul className="list-group">
				{list.map((item, index) => (
					<li className="list-group-item d-flex" key={index}>
						{item}
						<i onClick={removeTodo} className="far fa-trash-alt ml-auto" />
					</li>
				))}
				<div className="taskCounter">
					You have <strong className="length">{list.length} tasks to do </strong>
				</div>
			</ul>
		</div>
	);
};
export default InputToDo;
