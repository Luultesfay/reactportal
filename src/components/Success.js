import { Fragment } from "react";
import portalDoms from "react-dom";
const Success = (props) => {
  return (
    <Fragment>
      <div className="overlay" />
      {portalDoms.createPortal(
        <div
          className="success"
          onClick={() => props.setShowSucessModal(false)}
        >
          EMAIL SUBMITTED SUCCSESSFULY<div className="close">X</div>
        </div>,
        document.getElementById("sucess_portal")
      )}
    </Fragment>
  );
};
export default Success;
