import { ProfileDescription } from "components/Profile/ProfileDescription/ProfileDescription";
import user from "user.json";
import {ProfileStatistics} from 'components/Profile/ProfileStatistics/ProfileStatistics' 
import css from "./Profile.module.css"




export const Profile = () => {
    // console.log(user.username)
    return (
    <div className={css.profile}>
            <ProfileDescription 
                username={user.username}
                avatar={user.avatar}
                tag={user.tag}
                location={user.location}
            />


            <ProfileStatistics 
                followers={user.stats.followers}
                views={user.stats.views}
                likes={user.stats.likes}
            />
    </div>
    )
}

