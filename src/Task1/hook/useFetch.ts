import { useEffect, useState, useCallback } from 'react';
import type { PostParams } from '../types';

interface FetchOptions {
	params?: { [key: string]: string | number };
}

const request = async (url: string) => {
	const res = await fetch(url, {
		headers: {
			'content-type': 'application/json',
		},
		method: 'GET',
	});

	if (!res.ok) {
		throw new Error(`Ошибка загрузки! ${res.statusText}`);
	}

	return res.json();
};

export function useFetch(url: string) {
	const [data, setData] = useState<PostParams[] | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const getData = useCallback(
		async (params?: { [key: string]: string | number }) => {
			if (params) {
				let paramString = '';
				Object.entries(params).forEach(([key, value], index) => {
					paramString += (index === 0 ? '?' : '&') + `${key}=${String(value)}`;
				});

				url = url + `${paramString}`;
			}

			try {
				setIsLoading(true);
				setError(null);

				const res = await request(url);
				setData(res);
			} catch (err) {
				const errorMessage = err instanceof Error ? err.message : 'Неизвестная ошибка';
				setError(errorMessage);
			} finally {
				setIsLoading(false);
			}
		},
		[url]
	);

	useEffect(() => {
		getData();
	}, [getData]);

	const refetch = (options: FetchOptions) => {
		getData(options?.params);
	};

	return {
		data,
		isLoading,
		error,
		refetch,
	};
}
