import ReactModal from "react-modal";
import accountService from "../../../services/account-service";
import "./style.css";
const Confirm = ({navigate, show, handleClose }) => {
    const [handleDeleteAccount] = accountService.useDelete(navigate);

    const handleSave  = () =>{
        handleClose();
        handleDeleteAccount();
    }
    const handleCancle = () => {
        handleClose();
    }
  return (
    <ReactModal
      className={"modal"}
      isOpen={show}
    >
      <div
        className="modal-content"
        style={{
          flex: 1,
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div className="content-a">
          <p>Bạn có chắc muốn xoá tài khoản không?</p>
          <div className="btn-view">
            <button className="btn-modal" onClick={handleSave}>
              OK
            </button>
            <button className="btn-modal" onClick={handleCancle}>
              Cancle
            </button>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default Confirm;
