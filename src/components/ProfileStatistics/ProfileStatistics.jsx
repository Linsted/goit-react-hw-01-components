import css from './ProfileStatistics.module.css';
import PropTypes from 'prop-types';


export const ProfileStatistics = ({ user: { stats: { followers, views, likes } } }) => (
        
        <ul className={css.profile__list}>
            <li className={css.profile__item}>
                <span>Followers</span>
                <span>{followers}</span>
            </li>
            <li className={css.profile__item}>
                <span>Views</span>
                <span>{views}</span>
            </li>
            <li className={css.profile__item}>
                <span>Likes</span>
                <span>{likes}</span>
            </li>
        </ul>
    ) 


ProfileStatistics.propTypes = {
    user: PropTypes.shape({
      stats: PropTypes.shape({
          followers: PropTypes.number.isRequired,
          views: PropTypes.number.isRequired,
          likes: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
}