import './App.css';
import { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import Footer from './components/Footer';

function Todos() {
  const [todos, setTodos] = useState([])
	const [filter, setFilter] = useState(undefined);

  	return (
    	<section className="todoapp">
      		<Form setTodos={setTodos} filter={filter} todos={todos} />
			<List setTodos={setTodos} filter={filter} todos={todos} />
			<Footer setFilter={setFilter} setTodos={setTodos} filter={filter} todos={todos} />
    	</section>
  	);
}

export default Todos;