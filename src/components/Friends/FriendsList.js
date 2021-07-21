import React from 'react';
import PropTypes from 'prop-types';
import Friend from './Friend';
import css from './FriendsList.module.css';

const FriendsList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(friend => (
        <Friend
          key={friend.id}
          id={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendsList;