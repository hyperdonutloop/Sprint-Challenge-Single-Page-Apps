import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {

    const NavWrapper = styled.div`
        .navigation {
            display: flex;
            justify-content: space-around;
            text-decoration: none;

            .a {
                padding: 20px;
                margin: 10px;
                display: flex;
                justify-content: space-between;
            }
        }
    `;

    return (

        <NavWrapper>
        <div>
            <div className="navigation">
                <div className="links">
                <Link to="/">Home</Link>
                <Link to="/CharacterList">Characters</Link>
            </div>
        </div>
      </div>
      </NavWrapper>

    )



}

export default Navigation;