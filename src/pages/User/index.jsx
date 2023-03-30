import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {Button} from "rsuite";
import API from "@/config/api.js";

const User = () => {
    const [user, setUser] = useState({})
    const {userName} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const data = await API.get("/users/" + userName);
            setUser(data);
        };
        fetchData();
    }, [userName])


    return (
        <div className="bg-white rounded-lg">
            <Link to="/" className="font-bold m-5"> <Button className="mt-4">Go Back</Button> </Link>
            <div className="flex flex-col justify-center items-center">
                <img className="w-48 h-48 rounded-full" src={user?.avatar_url} alt={user?.login}/>
                <h1>{user?.name}</h1>
                <div>Followers: {user?.followers} | Following: {user?.following}</div>
                <div>@{user?.login}</div>
                <div>{user?.company}</div>
                <div>{user?.email}</div>
                <div>{user?.blog}</div>
                <Link target="_blank" className="my-5" to={user?.html_url}><Button appearance="ghost" color="yellow">GO
                    PROFILE</Button></Link>
            </div>
        </div>
    );
}

export default User;