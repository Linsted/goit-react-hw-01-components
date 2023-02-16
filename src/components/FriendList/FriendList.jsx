import PropTypes from "prop-types";
import { FriendCard } from "./FriendCard/FriendCard";
import css from "./FriendList.module.css"


export const FriendList = ({ friends }) => {
    
    return (
        <ul className={css.friend__list}>{friends.map(friend => <li className={css.friend__item} key={friend.id}>
            <FriendCard
                avatar={friend.avatar} 
                name={friend.name} 
                isOnline={friend.isOnline} />
        </li>)}</ul>
    )
}



FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,).isRequired,
}