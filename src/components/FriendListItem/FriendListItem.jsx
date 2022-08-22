import PropTypes from 'prop-types';
import { StatusColor, Item, Avatar, Name } from '../FriendListItem';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <Item>
    <StatusColor isOnline={isOnline}></StatusColor>
    <Avatar src={avatar} alt="User avatar" width="48" />
    <Name>{name}</Name>
  </Item>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
