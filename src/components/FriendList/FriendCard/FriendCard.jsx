import PropTypes from "prop-types";
import css from "./FriendCard.module.css"



export const FriendCard = ({avatar, name, isOnline}) => {
    // console.log( isOnline)
    return (
        <>
             <span className={isOnline ? css.online : css.ofline}></span> 
            <img className={css.img} src={avatar} alt={name} />
            <p>{name}</p>
        </>
    )
} 

FriendCard.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}