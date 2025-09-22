import { useReducer, useCallback } from 'react';

type ActionType<T> = { type: 'TOGGLE' } | { type: 'SET_VALUE'; payload: T };

function toggleReducer<T>(state: T, action: ActionType<T>, values: T[]) {
	switch (action.type) {
		case 'TOGGLE': {
			const currentIndex = values.indexOf(state);
			if (currentIndex === -1) return values[0];

			return currentIndex < values.length - 1 ? values[currentIndex + 1] : values[0];
		}
		case 'SET_VALUE': {
			return action.payload;
		}
		default: {
			return state;
		}
	}
}

export function useToggle<T>(defaultValue?: T[]): [T, (value?: T) => void] {
	const values = defaultValue || ([false, true] as T[]);
	const initialState = values[0];

	const [value, dispatch] = useReducer(
		(state: T, action: ActionType<T>) => toggleReducer(state, action, values),
		initialState
	);

	const toggle = useCallback((newValue?: T) => {
		if (newValue !== undefined) {
			dispatch({ type: 'SET_VALUE', payload: newValue });
		} else {
			dispatch({ type: 'TOGGLE' });
		}
	}, []);

	return [value, toggle];
}
