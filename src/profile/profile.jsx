import React from "react";
import "./profile.css";
import PropTypes from "prop-types";

export const Profile = ({ fullName, bio, profession, afficher, children }) => {
    return (
        <div className="header">
            <h1> {fullName} </h1>
            <p>{bio}</p>
            <p>{profession}</p>
            <button onClick={() => afficher(fullName)}>
                {" "}
                click to know my name
            </button>{" "}
            <br />
            {children}
        </div>
    );
};

//default props
Profile.defaultProps = {
    fullName: "Solid Snake",
    bio:
        "Solid Snake, real name David, also known as Old Snake, and briefly known as Iroquois Pliskin, or simply Snake, was a former spy, special operations soldier, and mercenary.",
    profession: "Spy",
    afficher: (x) => {
        console.log(x);
    },
};

//proptypes
Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    afficher: PropTypes.func,
};
