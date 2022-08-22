import PropTypes from 'prop-types';
import {
  Avatar,
  ListItems,
  StatsList,
  ProfileContainer,
  Quantity,
  Item,
  DescriptionItem,
  Description,
} from '../Profile';

export const Profile = ({ username, tag, location, avatar, stats }) => (
  <ProfileContainer>
    <Description>
      <Avatar src={avatar} alt="User avatar" />
      <DescriptionItem>{username}</DescriptionItem>
      <DescriptionItem>@{tag}</DescriptionItem>
      <DescriptionItem>{location}</DescriptionItem>
    </Description>

    <StatsList>
      <ListItems>
        <Item>Followers</Item>
        <Quantity>{stats.followers}</Quantity>
      </ListItems>
      <ListItems>
        <Item>Views</Item>
        <Quantity>{stats.views}</Quantity>
      </ListItems>
      <ListItems>
        <Item>Likes</Item>
        <Quantity>{stats.likes}</Quantity>
      </ListItems>
    </StatsList>
  </ProfileContainer>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
