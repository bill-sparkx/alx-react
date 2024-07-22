import { React } from "react";
import "./Notifications.css";
import closeIcon from "./Close icon.png"

const Notifications = () => {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button
        aria-label="Close"
        style={{
          color:"#3a3a3a",
          position: "absolute",
          top: "3px",
          right: "2px",
          border: "none",
          background: "none",
        }}
        onClick={(e) => console.log("Close button has been clicked")}
      >
        <img src={closeIcon} alt="close button"/>
      </button>
    </div>
  );
};

export default Notifications;
