import {Button, Panel, Placeholder} from "rsuite";
import {Link} from "react-router-dom";

export const ProfileCard = (props) => (
    <Panel {...props} bordered>
        {!props.data.avatar_url && <Placeholder.Paragraph/>}
        <div className="flex justify-between">
            <div className="flex items-center">
                <img className="h-48 w-48 object-cover " src={props.data.avatar_url} alt=""/>
                <div className="pl-5">
                    <div className="font-bold text-2xl">{props.data.login}</div>
                    <div className="font-bold">#{props.data.id}</div>
                </div>
            </div>
            <Link to={`/user/${props.data.login}`}><Button appearance="primary" color="cyan">Open</Button></Link>
        </div>
    </Panel>
);