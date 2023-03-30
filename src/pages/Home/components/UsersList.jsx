import {useCallback} from "react";
import {Placeholder, Row} from "rsuite";
import InfiniteScroll from "react-infinite-scroll-component";
import {useSelector} from "react-redux";

import {ProfileCard} from "@/components/common/ProfileCard.jsx";

const UsersList = ({fetchMoreUsers, dataLength}) => {
    const users = useSelector((state) => state.user.data)
    const totalCount = useSelector((state) => state.user.totalCount)

    const renderUsers = useCallback(() => {
        return users?.map((p) => {
            return (
                <Row key={p.login} className="mb-5">
                    <ProfileCard data={p} className="bg-white" />
                </Row>
            );
        });
    }, [users]);

    return (
        <div className="mt-5">
            <div className="font-bold mb-2">Result: {totalCount}</div>
            <InfiniteScroll
                dataLength={dataLength} //This is important field to render the next data
                next={fetchMoreUsers}
                hasMore={true}
                loader={
                    <Placeholder.Paragraph/>
                }
                endMessage={
                    <p style={{textAlign: 'center'}}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {renderUsers()}
            </InfiniteScroll>

        </div>
    );
};

export default UsersList;