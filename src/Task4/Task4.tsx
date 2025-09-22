import { useViewportSize } from './hooks';

export function Task4() {
	const { height, width } = useViewportSize();

	return (
		<>
			Width: {width}, height: {height}
		</>
	);
}
