import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Button, Input, Message, useToaster} from "rsuite";
import {setQuery} from "@/store/userSlice.js";

const UsersSearchBar = ({fetchUsers}) => {
    const query = useSelector((state) => state.user.query)
    const dispatch = useDispatch()
    const toaster = useToaster();

    const handleSearchUsers = useCallback(async (e) => {
        e.preventDefault();
        if (query) {
            await fetchUsers();
        } else {
            toaster.push(<Message showIcon={true} type="warning">Search query must not be empty</Message>, {
                placement: 'bottomCenter'
            });
        }
    }, [query, fetchUsers, toaster])

    const handleInputChange = useCallback((value) => {
        dispatch(setQuery(value));
    }, [dispatch]);

    return <div className="flex">
        <Input value={query} onChange={handleInputChange} placeholder="Type: username" size="lg"/>
        <Button onClick={handleSearchUsers} className="ml-4" appearance="ghost" color="cyan">Search</Button>
    </div>
};

export default UsersSearchBar;