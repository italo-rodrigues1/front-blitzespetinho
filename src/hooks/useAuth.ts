import { useState, useEffect } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticate, setAuthenticate] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post("/api/user", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      setAuthenticate(true);
      navigate("/");
    } catch (err: any) {
      toast.error(err?.response?.data?.message);
    }
  };

 

  useEffect(() => {
    if (!authenticate && localStorage.getItem("token")) {
      setAuthenticate(true);
    }
  }, [authenticate]);

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    authenticate,
  };
};

export default useAuth;
