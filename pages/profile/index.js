import { useEffect } from "react";
import Guard from "../../utils/guard";

const Profile = ({ setUserData, user }) => {
    useEffect(() => { setUserData(user) }, [setUserData, user])
    return (
        <div>
            Du hast die Mail: {user.email}
        </div>
    )
}

export const getServerSideProps = async (ctx) => Guard(ctx)
export default Profile;