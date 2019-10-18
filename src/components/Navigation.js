import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {

    return (
        <div>
            <div className="navigation">
                <div>
                <Link to="/">Home</Link>
                <Link to="/CharacterPage">Characters</Link>
            </div>
        </div>
      </div>


    )



}

export default Navigation;