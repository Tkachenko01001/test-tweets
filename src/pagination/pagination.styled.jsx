import styled from '@emotion/styled';

const ButtonPagination = styled.button`
    cursor: pointer;
    width: 196px;
    height: 50px;
    background: #EBD8FF;
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
    background: #EBD8FF;

    &:active {
        background: #5CD3A8;
    }
`;

const ButtonPaginationBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export { ButtonPagination, ButtonPaginationBox };
 
