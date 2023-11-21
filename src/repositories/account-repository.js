import axios from "axios";
import { API_DELETE_ACCOUNT, API_LOGIN, RD_BASE_URL } from "../config/const";

export class AccountReposirory {
  async login(user) {
    return axios
      .post(
        `${RD_BASE_URL}${API_LOGIN}`,
        {
          username: user.username,
          password: user.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        }
      )
      .then((response) => response)
      .catch((error) => error.response);
  }

  async deleteAccount(token) {
    console.log(token)
    return axios.post(
      `${RD_BASE_URL}${API_DELETE_ACCOUNT}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => response.status)
    .catch((error) => error.response)
  }
}

const accountRepository = new AccountReposirory();
export default accountRepository;
