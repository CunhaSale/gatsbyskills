import React from "react";
import Image from "../Image"
import { Link } from "gatsby"

import * as S from './styled'

const Card = () => (
    <S.CardWrapper>
        <Link to="/card-detail"><Image /></Link>
        <S.CardDetail>
            <Link to="/card-detail">
                <S.CardTitle>Título do card</S.CardTitle>
            </Link>
            <p>
                Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. 
                Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.
            </p>
        </S.CardDetail>
    </S.CardWrapper>
)

export default Card