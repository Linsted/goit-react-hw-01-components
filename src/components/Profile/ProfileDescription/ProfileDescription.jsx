import css from './ProfileDescription.module.css';
import PropTypes from 'prop-types';

export function ProfileDescription({username,avatar,tag,location}) {
    
    return (
        <div className={css.profile__description}>
            <img className={css.profile__image} src={avatar} alt={username} />
            <h2 className={css.profile__username}>{username}</h2>
            <p className={css.profile__text}>@{tag}</p>
            <p className={css.profile__text}>{location}</p>
        </div>
    )

}


ProfileDescription.propTypes = {
       avatar: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
}