import { useHover } from './hook';

export function Task3() {
	const { hovered, ref } = useHover();

	return (
		<div className='bordered-block' ref={ref}>
			{hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
		</div>
	);
}
