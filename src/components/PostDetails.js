import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostDetails() {
    const { id } = useParams();

    const [details, setDetails] = useState({});
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
            .catch(error => console.error("Error fetching post details:", error));

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(error => console.error("Error fetching users:", error));
    }, [id]);

    return (
        <div>
            <div>PostID: {details.id} </div>
            <div>User: {users.find(u => u.id === details.userId)?.name}</div>
            <div>Title: {details.title}</div>
            <div>Body: {details.body}</div>
        </div>
    )
}
