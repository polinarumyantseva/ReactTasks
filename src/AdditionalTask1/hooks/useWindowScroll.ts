import { useCallback, useLayoutEffect, useState } from 'react';
import { useWindowEvent } from './useWindowEvent';
import { useThrottle } from './useThrottle';

interface ScrollValue {
	x: number;
	y: number;
}

type UseWindowScroll = [scroll: ScrollValue, scrollTo: (options: ScrollToOptions) => void];

export function useWindowScroll(): UseWindowScroll {
	const [scroll, setScroll] = useState<ScrollValue>({
		x: 0,
		y: 0,
	});

	const handleScroll = useCallback(() => {
		setScroll({
			x: window.pageXOffset,
			y: window.pageYOffset,
		});
	}, []);

	const handleScrollThrottled = useThrottle(handleScroll);
	useWindowEvent('scroll', handleScrollThrottled);

	useLayoutEffect(() => {
		handleScroll();
	}, [handleScroll]);

	const scrollTo = useCallback((options: ScrollToOptions) => {
		if (typeof window !== 'undefined') {
			window.scrollTo(options);
		}
	}, []);

	return [scroll, scrollTo];
}
