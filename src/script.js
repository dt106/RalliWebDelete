import ReactModal from "react-modal";
window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    sessionStorage.clear();
  }
});

window.addEventListener("popstate", function (event) {
  if (document.location.pathname === "/login") {
    sessionStorage.clear();
  }
});

console.log(process.env)
// require('dotenv').config();
// console.log(process.env)
ReactModal.setAppElement("#root");
