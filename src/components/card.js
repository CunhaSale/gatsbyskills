import React from "react";
import Image from "../components/image"
import { Link } from "gatsby"

const Card = () => (
    <div style={{
        width: `320px`,
        border: `1px solid #a3a3a3`,
        margin: `10px 0`,
        padding: `10px`,
    }}>
        <Link to="/card-detail"><Image /></Link>
        <div style={{
            textAlign: `center`,
            padding: `7px`,
        }}>
            <Link to="/card-detail"><h4 style={{
                margin: `10px 0`,
                fontWeight: `700`
            }}>Título do card</h4></Link>
            <p>
                Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. 
                Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.
            </p>
        </div>
    </div>
)

export default Card