import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './poster_none.png';
import css from './Friend.module.css';

const Friend = ({ id, name, avatar, isOnline }) => {
  return (
    <li className={css.item} key={id}>
      <span className={isOnline === true ? css.onstatus : css.offstatus}>
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

Friend.defaultProps = {
  avatar: defaultImage,
};

Friend.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Friend;