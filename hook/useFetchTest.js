import { useState, useEffect } from 'react';
import axios from "axios";
import { RAPID_API_KEY } from '@env'

const rapidApiKey = RAPID_API_KEY


export const useFetchTest = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const options = {
                method: 'GET',
                url: `https://jsearch.p.rapidapi.com/${endpoint}`,
                params: { ...query },
                headers: {
                    'X-RapidAPI-Key': rapidApiKey,
                    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
                },
            };
            try {
                const response = await axios.request(options);
                setData(response?.data?.data);
            } catch (error) {
                console.log('ERROR', error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    console.log('DATA', data)

    return {data, isLoading, error, refetch};
};

export default useFetchTest;
