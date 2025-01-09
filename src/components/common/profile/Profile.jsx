import React from "react";
import "./profile.css";

function Profile(props) {
  // const stars = [];
  // for (let i = 0; i < props.rating; i++) {
  //   stars.push(<span key={i}>⭐</span>);
  // }

  // OR

  // const stars = [...Array(props.rating)].map((value, index) => {
  //   return <span key={index}>⭐</span>;
  // });

  return (
    <div className="profile-container">
      <div className="profile-image-container">
        <img className="profile-image" src={props.image} alt="" />
      </div>
      <div className="profile-info-container">
        <p className="profile-info-name">{props.name}</p>
        <p className="profile-info-designation">{props.designation}</p>
        {props.rating > 0 && (
          <div style={{ marginTop: "8px" }}>
            {[...Array(props.rating)].map((value, index) => {
              return <span key={index}>⭐</span>;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
