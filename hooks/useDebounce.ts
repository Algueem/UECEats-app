import { useEffect, useState } from "react";


export default function useDebounce(value: any, delay = 500) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const id = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => { clearTimeout(id) };
    }, [value, delay]);

    return [debouncedValue];
}