import { css } from '@emotion/react';
import styled from '@emotion/styled';
import picture21 from '../images/picture21.png';

const CustomText = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    margin: 0px;
    color: #EBD8FF;
`;

const CustomTextBox = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    margin-top: 62px;
`;

const List = styled.ul`
    display: flex;
    gap: 100px;
    flex-wrap: wrap;
    justify-content: center;
`;

const ListItem = styled.li`
    position: relative;
    list-style: none;
    width: 380px;
    height: 460px;
    background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    box-shadow: -2.5777px 6.87386px 20.6216px rgb(0 0 0 / 23%);
    border-radius: 20px;
`;

const BackgroundImgBox = styled.div`
    padding: 28px 36px 0px;
    box-sizing: border-box;
`;

const BackgroundImg = styled.div`
    background-image: url(${picture21});
    background-repeat: no-repeat;
    width: 308px;
    height: 168px;
`;

const LogoStyledBox = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    width: 76px;
    height: 22px;
`;

const Avatar = styled.img`
    width: 62px;
    height: 62px;
    border-radius: 50%;
`;

const BorderAvatar = styled.div`
    position: absolute;
    background: #EBD8FF;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    top: 178px;
    left: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BorderUnderAvatar = styled.div`
    width: 380px;
    height: 8px;
    background: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
    margin-top: 18px;
`

const ButtonStyled = styled.button`
    cursor: pointer;
    width: 196px;
    height: 50px;
    box-shadow: 0px 3.43693px 3.43693px rgb(0 0 0 / 25%);
    border-radius: 10.3108px;
    border: none;
    margin-top: 26px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    color: #373737;
    ${props =>
        props.isFollowing
        ? css`
            background: #5CD3A8;
          `
        : css`
            background: #EBD8FF;
          `
    }
`;

const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

export {
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
};