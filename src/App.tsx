import { Task1 } from './Task1';
import { Task2 } from './Task2';
import './App.css';
import { Task3 } from './Task3';

export function App() {
	return (
		<div className='container'>
			<div className='task-wrapper'>
				<h3>Задание #1</h3>
				<Task1 />
			</div>

			<hr />

			<div className='task-wrapper'>
				<h3>Задание #2</h3>
				<Task2 />
			</div>

			<hr />

			<div className='task-wrapper'>
				<h3>Задание #3</h3>
				<Task3 />
			</div>
		</div>
	);
}
