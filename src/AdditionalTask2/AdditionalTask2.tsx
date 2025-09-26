import { useToggle } from './hooks';

export function AdditionalTask2() {
	const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);
	const currentValue = typeof value === 'boolean' ? String(value) : value;

	return <button onClick={() => toggle()}>{currentValue}</button>;
}

// Еще примеры использования

// const [value, toggle] = useToggle(['light', 'dark']);

// toggle(); // -> value === 'light'
// toggle(); // -> value === 'dark'

// // Так же можно передать конкретное значение и тогда
// // value станет одним из значений
// toggle('dark'); // -> value === 'dark'
