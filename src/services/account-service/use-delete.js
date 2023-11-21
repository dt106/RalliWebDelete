import { toast } from 'react-toastify';
import accountRepository from "../../repositories/account-repository";
export function useDelete(navigate) {
  const handleDelete = async () => {
    const token = await sessionStorage.getItem("token");
    const response = await accountRepository.deleteAccount(token);
    if (response === 200) {
      toast.success("Tài khoản đã được xoá!", {
        autoClose: 1500,
      });
      navigate("/login", { replace: true });
      sessionStorage.removeItem("token");
    } else {
      toast.error("Xoá tài khoản không thành công!");
    }
  };
  return [handleDelete];
}
