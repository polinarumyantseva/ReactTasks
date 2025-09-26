import { useCallback, useRef } from 'react';

export function useThrottle(callback: () => void, interval = 500) {
	const lastExecuted = useRef<number>(Date.now());

	return useCallback(() => {
		if (Date.now() - lastExecuted.current >= interval) {
			lastExecuted.current = Date.now();
			callback();
		}
	}, [callback, interval]);
}
