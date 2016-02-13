import React, { PropTypes } from 'react';
import FriendThumbnail from './FriendThumbnail';

const propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    name: PropTypes.string
  }))
};

const defaultProps = {
  friends: []
};

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(friend => (
      <li key={friend.id}>
        <FriendThumbnail username={friend.username} name={friend.name} />
      </li>
    ))}
  </ul>
);

FriendList.propTypes = propTypes;
FriendList.defaultProps = defaultProps;

export default FriendList;
