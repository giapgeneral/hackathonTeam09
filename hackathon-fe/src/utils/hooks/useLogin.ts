import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Api } from "../Api";
import { logout } from "../localstorage";

function useLogin() {
  const [loginInfo, setLoginInfo] = useState({
    loading: true,
    isLogin: false,
  });
  const checkLogin = useCallback(async () => {
    const { statusCode, data } = await Api.getRequest(`/api/user/me`);
    // console.log({statusCode, data})
    if (statusCode === 400 || statusCode === 500) {
      logout();
      return;
    }
    setLoginInfo({ loading: false, isLogin: true });
  }, []);
  useEffect(() => {
    checkLogin();
  }, [checkLogin]);
  return { loginInfo };
}

export default useLogin;
