import { useDelete } from "./use-delete";
import { useLogin } from "./use-login";

export class AccountService {
    useLogin = useLogin;
    useDelete = useDelete;
}

const accountService = new AccountService();
Object.freeze (accountService);

export default accountService;
