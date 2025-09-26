import { useCallback, useLayoutEffect, useState } from 'react';
import { useWindowEvent } from './useWindowEvent';
import { useThrottle } from './useThrottle';

interface ViewportSize {
	width: number;
	height: number;
}

export function useViewportSize(): ViewportSize {
	const [width, setWidth] = useState<number>(0);
	const [height, setHeight] = useState<number>(0);

	const handleResize = useCallback(() => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	}, []);

	useLayoutEffect(() => {
		handleResize();
	}, [handleResize]);

	const handleResizeThrottled = useThrottle(handleResize);

	useWindowEvent('resize', handleResizeThrottled);

	return {
		height,
		width,
	};
}
