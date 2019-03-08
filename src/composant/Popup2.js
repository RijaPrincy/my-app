import React from "react";
import Test from "./Test";
import Popup from "reactjs-popup";

const contentStyle = {
  maxWidth: "600px",
  width: "90%"
};

const CustomModal = () => (
  <Popup
    trigger={<button className="button"> X </button>}
    modal
    contentStyle={contentStyle}
  >
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
    
        <div className="content">
          {" "}
          Confirmer la suppression
        </div>
        <div className="actions">
          <Popup
            trigger={
            <button className="button" onClick={() => props.deleteUser(user.id)}> 
                Oui 
            </button>}
            position="top center"
            closeOnDocumentClick
            contentStyle={{ padding: "0px", border: "none" }}
          >
          </Popup>
          <button
            className="button"
            onClick={() => {
              console.log("modal closed ");
              close();
            }}
          >
            Non
          </button>
        </div>
      </div>
    )}
  </Popup>
);

export default Test(CustomModal);
