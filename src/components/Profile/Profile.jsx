import { ProfileDescription } from "components/ProfileDescription/ProfileDescription";
import user from "user.json";
import {ProfileStatistics} from 'components/ProfileStatistics/ProfileStatistics' 
import css from "./Profile.module.css"




export const Profile = () => {

    return (
    <div className={css.profile}>
            <ProfileDescription user={user} />


            <ProfileStatistics user={user} />
    </div>
    )
}

