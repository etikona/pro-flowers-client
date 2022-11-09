import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} -Pro Flower`;
    }, [title])
};

export default useTitle;