import React from 'react'
import styled from 'styled-components';

const ProductCard = ({product}) => {
    return (
        <Wrapper>
            <div className="inner">
                 <img src={product?.image} alt="Sprayer" />
                <h4 className="heading-2 my-3">{product?.title}</h4>
                <p>
                {product?.desc} 
                 </p>
            </div> 
        </Wrapper>
    );
}; 
export default ProductCard;

const Wrapper = styled.div`
    .inner {
        img {
            width:100%;
            height: 23.5rem;
            object-fit: cover;
            object-position: center;
        }
    } 
`;

 