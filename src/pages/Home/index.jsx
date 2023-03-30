import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import UsersList from "@/pages/Home/components/UsersList.jsx";
import UsersSearchBar from "@/pages/Home/components/UsersSearchBar.jsx";

import API from "@/config/api.js";
import {setMoreUsers, setTotalCount, setUsers} from "@/store/userSlice.js";

const Home = () => {
    const limit = 10;
    const [page, setPage] = useState(1);
    const dispatch = useDispatch()
    const query = useSelector((state) => state.user.query)

    const fetchUsers = async () => {
        const {items, total_count} = await API.get("/search/users?q=" + query, {
            params: {
                page:1,
                per_page: limit,
            },
        })
        dispatch(setUsers(items))
        dispatch(setTotalCount(total_count))
        setPage(prevState =>  prevState + 1)
    };

    const fetchMoreUsers = async () => {
        const {items} = await API.get("/search/users?q=" + query, {
            params: {
                page,
                per_page: limit,
            },
        })
        setPage(prevState =>  prevState + 1)
        dispatch(setMoreUsers(items))
    };

    return (
        <div>
            <UsersSearchBar fetchUsers={fetchUsers}/>
            <UsersList dataLength={page * limit} fetchMoreUsers={fetchMoreUsers}/>
        </div>
    );
};

export default Home;