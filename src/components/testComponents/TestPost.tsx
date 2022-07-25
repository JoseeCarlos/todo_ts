import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const TestPost = () => {

    const {slug} = useParams();

    useEffect(() => {
        if(slug) {
            console.log(slug)
        }
    }, [slug])

    return (
        <div>
        <h1>Test Post: {slug}</h1>
        </div>
    )
}