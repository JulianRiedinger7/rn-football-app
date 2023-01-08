import { useEffect, useState } from 'react';

const useDataFetch = (url) => {
	const [info, setInfo] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((res) => setInfo(res))
			.catch((err) => console.error(err))
			.finally(() => setLoading(false));
	}, []);

	return { info, loading };
};

export default useDataFetch;
