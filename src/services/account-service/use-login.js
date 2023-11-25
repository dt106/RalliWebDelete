import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import accountRepository from "../../repositories/account-repository";

export function useLogin () {
    const [user, setUser] = React.useState({username:'', password:''});
    const navigate = useNavigate();
    const handleChangeUsername = (value) => {
        setUser((pre) => ({...pre,username: value}));
    }
    
    const handleChangePassword = (value) => {
        setUser((pre) => ({...pre,password: value}));
    }

    const handleLogin = React.useCallback(async(user) => {
        const response = await accountRepository.login(user);
        if(response?.status === 400){
            toast.warning('Tài khoản hoặc mật khẩu không chính xác!', {
            })
        }
        else if (response?.status === 200){
            toast.success('Đăng nhập thành công');
            sessionStorage.setItem('token', response.data.token)
            navigate('/home');
        }
        else{
            toast.warning('Đăng nhập thất bại!')
        }
    }, [])
    const handleLoginSuccess = React.useCallback(
        async (userAuthen) => {
            const {refreshToken} = userAuthen;
        },
        []
    )
    return [
        user,
        handleChangeUsername,
        handleChangePassword,
        handleLogin
    ]
}


