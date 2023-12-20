import { useEffect, useRef } from 'react';
import { useNavigate} from 'react-router-dom';

const useRedirection = (path, delay) => {

    const navigate = useNavigate();
    const redirectionTimerRef = useRef(null);

    useEffect(() => {
        redirectionTimerRef.current = setTimeout(() => {
            navigate(path);
        }, delay);

        return () => {
            clearTimeout(redirectionTimerRef.current);
        };
    }, [path, delay, navigate]);
};

export default useRedirection;