import { useEffect } from "react";
import Guard from "../../utils/guard";

const Profile = (props) => {
    useEffect(() => { props.setUserData(props.user) }, [])
    return (
        <div>
            Du hast die Mail: {props.user.email}
        </div>
    )
}

export const getServerSideProps = async (ctx) => Guard(ctx)
export default Profile;