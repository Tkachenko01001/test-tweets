import React from 'react';
import PropTypes from 'prop-types';
import { ButtonPagination, ButtonPaginationBox } from "./pagination.styled";

const Pagination = ({ onClickPagination }) => {
    return (
        <ButtonPaginationBox>
            <ButtonPagination type="button" onClick={onClickPagination}>Load more</ButtonPagination>
        </ButtonPaginationBox>
    )
}

Pagination.propTypes = {
    onClickPagination: PropTypes.func.isRequired
};

export default Pagination;