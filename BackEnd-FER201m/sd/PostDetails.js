import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostDetails(){
    const {id} = useParams();

    const [details, setDetails] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then(res => res.json)
            .then(data => setDetails(data));
    }, []);

    return(
        <div>
           <div>PostID: {details.id} </div>
           <div>title: {details.title}</div>
           <div>Title: {details.body}</div>
        </div>
    )

    
}