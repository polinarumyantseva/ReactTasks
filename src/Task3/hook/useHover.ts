import { useCallback, useEffect, useRef, useState } from 'react';

export function useHover() {
	const ref = useRef<HTMLDivElement | null>(null);
	const [hovered, setHovered] = useState<boolean>(false);

	const handleMouseEnter = useCallback(() => {
		setHovered(true);
	}, []);

	const handleMouseLeave = useCallback(() => {
		setHovered(false);
	}, []);

	useEffect(() => {
		const element = ref.current;
		if (element) {
			element.addEventListener('mouseenter', handleMouseEnter);
			element.addEventListener('mouseleave', handleMouseLeave);
		}
		return () => {
			element?.removeEventListener('mouseenter', handleMouseEnter);
			element?.removeEventListener('mouseleave', handleMouseLeave);
		};
	}, [handleMouseEnter, handleMouseLeave]);

	return {
		hovered,
		ref,
	};
}
