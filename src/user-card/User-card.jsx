import { ReactComponent as LogoSvg } from '../images/Logo.svg';
import {
    ListItem,
    BackgroundImg,
    LogoStyledBox,
    BackgroundImgBox,
    Avatar,
    BorderAvatar,
    BorderUnderAvatar,
    CustomText,
    CustomTextBox,
    ButtonStyled,
    ButtonBox,
    List
} from './User-card.styled';

import PropTypes from 'prop-types';

const UserCard = ({ users, onClick }) => {

    return (
        <List>
            {users.map(user =>
                <ListItem key={user.id}>
                    <LogoStyledBox>
                        <LogoSvg alt="Logo" />
                    </LogoStyledBox>
                    <BackgroundImgBox>
                        <BackgroundImg />
                    </BackgroundImgBox>
                    <BorderUnderAvatar>
                        <BorderAvatar>
                            <Avatar src={user.avatar} alt="user avatar" />
                        </BorderAvatar>
                    </BorderUnderAvatar>
                    <CustomTextBox>
                        <CustomText>{user.tweets} tweets</CustomText>
                        <CustomText>{user.followers.toLocaleString('en-US')} followers</CustomText>
                    </CustomTextBox>
                    <ButtonBox>
                        <ButtonStyled isFollowing={user.isFollowing} onClick={(e) => onClick(e, user)}>
                            {user.isFollowing ? 'Following' : 'Follow'}
                        </ButtonStyled>
                    </ButtonBox>
                </ListItem>
            )}
        </List>
    )
};

UserCard.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      followers: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
      isFollowing: PropTypes.bool.isRequired,
      limit: PropTypes.number.isRequired,
      page: PropTypes.number.isRequired,
      tweets: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired
    })
    ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default UserCard;