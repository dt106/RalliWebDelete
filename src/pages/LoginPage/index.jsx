import { GoogleLogin } from "@react-oauth/google";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import accountService from "../../services/account-service";

const Login = () => {
  const [user, handleChangeUsername, handleChangePassword, login] =
    accountService.useLogin();
  const handleLogin = React.useCallback(
    async (event) => {
      event.preventDefault();
      if (!user.username) {
        toast.warn("Nhập tài khoản để tiếp tục!", {
          position: "top-center",
          autoClose: 1500,
          draggable: true,
        });
        return;
      }
      if (!user.password) {
        toast.warn("Nhập mật khẩu để tiếp tục!", {
          position: "top-center",
          autoClose: 1500,
          draggable: true,
        });
        return;
      }
      await login(user);
    },
    [user]
  );
  React.useEffect(() => {}, []);

  return (
    <div className="login-main">
      <section className="container">
        <div className="login-container">
          <div className="circle circle-one"></div>
          <div className="form-container">
            <img
              src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png"
              alt="illustration"
              className="illustration"
            />
            <h1 className="opacity">RalliSmart</h1>
            <form>
              <input
                type="text"
                onChange={(event) => handleChangeUsername(event.target.value)}
                placeholder="Username"
              />
              <input
                type="password"
                onChange={(event) => handleChangePassword(event.target.value)}
                placeholder="Password"
              />
              <button
                onClick={(event) => handleLogin(event)}
                className="opacity"
              >
                Sign In
              </button>
              <hr />
              <div className="btn-google-view">
                <GoogleLogin width={50} onSuccess={() => {}} onError={() => {}} />
              </div>
              {/* <button
                className="opacity"
                style={{ backgroundColor: "black" }}
                onClick={(event) => {
                  event.preventDefault();
                }}
                id="google-signin-button"
              >
                Đăng nhập với Google
              </button> */}
            </form>
          </div>
          <div className="circle circle-two"></div>
        </div>
        <div className="theme-btn-container"></div>
      </section>
    </div>
  );
};

export default Login;
