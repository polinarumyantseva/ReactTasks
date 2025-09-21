import { useCallback, useState } from 'react';

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (key: string) => [
	value: LocalStorageReturnValue,
	{
		setItem: (newValue: LocalStorageSetValue) => void;
		removeItem: () => void;
	}
];

export function useLocalStorage(key: string): ReturnType<UseLocalStorage> {
	const [value, setValue] = useState<LocalStorageReturnValue>(() => getValueStorage(key));

	const setItem = useCallback(
		(newValue: LocalStorageSetValue) => {
			try {
				localStorage.setItem(key, JSON.stringify(newValue));
				setValue(newValue);
			} catch (error) {
				console.error('Ошибка сохранения в localStorage:', error);
			}
		},
		[key]
	);

	const removeItem = useCallback(() => {
		try {
			localStorage.removeItem(key);
			setValue(null);
		} catch (error) {
			console.error('Ошибка удаления из localStorage:', error);
		}
	}, [key]);

	return [value, { setItem, removeItem }];
}

function getValueStorage(key: string): LocalStorageReturnValue {
	try {
		const item = localStorage.getItem(key);
		if (!item) {
			return null;
		}
		return JSON.parse(item);
	} catch (error) {
		return localStorage.getItem(key);
	}
}
