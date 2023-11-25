"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/ReactToastify.css";
import Confirm from "../../component/molecules/Confirm/Confirm";
import DefaultPage from "../../component/templates/DefaultPage/DefaultPage";
const Home = (props) => {
  const token = sessionStorage.getItem("token");
  const [dialog, setDialog] = React.useState(false);
  const navigate = useNavigate();
  const handleDelete = () => {
    setDialog(true);
  };
  React.useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, []);
  return (
    <>
      <DefaultPage>
        <main className="home-main">
          <button
            onClick={() => {
              handleDelete();
            }}
            className="btn-delete"
          >
            Xoá tài khoản
          </button>
        </main>
      </DefaultPage>
      <Confirm navigate={navigate} show={dialog} handleClose={() => setDialog(!dialog)}></Confirm>
    </>
  );
};

export default Home;
