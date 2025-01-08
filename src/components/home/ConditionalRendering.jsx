import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function ConditionalRendering(props) {
  // const textFirst = props.textFirst;
  // OR
  const { textFirst, isPink, hideIcon, isImage, url, icon } = props;

  if (isImage) {
    // Image Card
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto",
          gap: "16px",
          alignItems: "center",
          border: `1px solid ${isPink ? "lightpink" : "lightblue"}`,
          padding: "32px",
          borderRadius: "8px"
        }}
      >
        {!hideIcon && (
          <div
            style={{
              backgroundColor: isPink ? "lightpink" : "lightblue",
              borderRadius: "16px",
              order: textFirst ? 2 : 1,
              padding: "16px"
            }}
          >
            <img
              src={url}
              alt="photo of a reptile"
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </div>
        )}
        <div style={{ order: textFirst ? 1 : 2 }}>
          <h2 style={{ marginBottom: "8px" }}>Lorem, ipsum dolor.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            veritatis?
          </p>
        </div>
      </div>
    );
  } else {
    // Icon Card
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          gap: "16px",
          alignItems: "center",
          border: `1px solid ${isPink ? "lightpink" : "lightblue"}`,
          padding: "32px",
          borderRadius: "8px"
        }}
      >
        {!hideIcon && (
          <div
            style={{
              backgroundColor: isPink ? "lightpink" : "lightblue",
              padding: "16px",
              borderRadius: "50%",
              order: textFirst ? 2 : 1
            }}
          >
            <FontAwesomeIcon
              icon={icon}
              style={{ color: "", height: "24px", width: "24px" }}
            />
          </div>
        )}
        <div style={{ order: textFirst ? 1 : 2 }}>
          <h2 style={{ marginBottom: "8px" }}>Lorem, ipsum dolor.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            veritatis?
          </p>
        </div>
      </div>
    );
  }
}

export default ConditionalRendering;
