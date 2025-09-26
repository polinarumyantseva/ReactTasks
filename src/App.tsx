import { Task1 } from './Task1';
import { Task2 } from './Task2';
import './App.css';
import { Task3 } from './Task3';
import { Task4 } from './Task4';
import { AdditionalTask1 } from './AdditionalTask1/AdditionalTask1';
import { AdditionalTask2 } from './AdditionalTask2/AdditionalTask2';

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

			<hr />

			<div className='task-wrapper'>
				<h3>Задание #4</h3>
				<Task4 />
			</div>

			<hr />

			<div className='task-wrapper'>
				<h3>Дополнительное задание #1</h3>
				<AdditionalTask1 />
			</div>

			<hr />

			<div className='task-wrapper'>
				<h3>Дополнительное задание #2</h3>
				<AdditionalTask2 />
			</div>
		</div>
	);
}
