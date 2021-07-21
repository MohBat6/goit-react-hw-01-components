import React from 'react';
import PropTypes from "prop-types";
import css from "./Profile.module.css"


const Profile = ({user}) => (
<div className={css.profile}>
<img 
// width={150}
      src={user.avatar}
      alt={user.name}
      className={css.avatar}
      />
    <p className={css.name}>{user.name}</p>
    <p className={css.tag}>@{user.tag}</p>
    <p className={css.location}>{user.location}</p>
  
  <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{user.stats.followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{user.stats.views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{user.stats.likes}</span>
    </li>
  </ul>
</div>
);

Profile.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string,
      avatar: PropTypes.string,
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default Profile;