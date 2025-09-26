import { useLocalStorage } from './hook';

export function Task2() {
	const [value, { setItem, removeItem }] = useLocalStorage('some-key');

	return (
		<div>
			<p>Значение из LocalStorage: {value ? value : 'Нет данных'}</p>
			<div>
				<button onClick={() => setItem('new storage value')}>Задать значение</button>
				<button onClick={() => removeItem()}>Удалить значение</button>
			</div>
		</div>
	);
}
