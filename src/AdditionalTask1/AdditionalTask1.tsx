import { useWindowScroll } from './hooks';

export function AdditionalTask1() {
	const [scroll, scrollTo] = useWindowScroll();

	return (
		<div>
			<p>
				Scroll position x: {scroll.x}, y: {scroll.y}
			</p>
			<button onClick={() => scrollTo({ top: 0 })}>Scroll to top</button>
		</div>
	);
}
