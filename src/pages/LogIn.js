import { useCallback, useEffect, useState } from "react";
import axios from 'axios';
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import FirstFold from "../components/FirstFold4";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const url = process.env.REACT_APP_BACKEND;
  const navigate = useNavigate();
  const [userId, setUserId] = useState(localStorage.getItem('userId'));
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (userId) {
      navigate('/');
    }
  }, []);
  
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const onNoAccountClick = useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const handleLogin = async()=>{
    if(formData.email && formData.password){
      await axios.post(url + "/user/login", formData).then((resp)=>{
        const token = resp.data.token;
        const userId = resp.data.id;
        setUserId(userId);
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        alert(resp.data.message+"!");
        window.location.reload();
      }).catch((e)=>{
        alert("Error in LoginIn: " + e.response);
      });
    }else{
      alert("Please Enter email & password!");
    }
  };

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start gap-[55px] leading-[normal] tracking-[normal] mq750:gap-[27px]">
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 box-border max-w-full text-left text-[21px] text-black font-poppins mq1050:pb-16 mq1050:box-border mq450:pb-[42px] mq450:box-border">
        <FirstFold iconsxCircle="/iconsxcircle1.svg"  />
        <div style={{width: "100vw"}} className="flex flex-row items-start justify-center p-0 box-border max-w-full mt-[-655px]">
          <div className="w-[539px] shadow-[0px_4px_35px_rgba(0,_0,_0,_0.08)] rounded-xl bg-white flex flex-col items-start justify-start pt-[34px] pb-[52px] pr-[43px] pl-11 box-border gap-[38px] max-w-full z-[6] mq750:gap-[19px] mq750:pb-[34px] mq750:pr-[21px] mq750:pl-[22px] mq750:box-border">
            <div className="w-[539px] h-[634px] relative shadow-[0px_4px_35px_rgba(0,_0,_0,_0.08)] rounded-xl bg-white hidden max-w-full" />
            <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-start gap-[11px]">
                    <div className="relative z-[7] mq450:text-[17px]">
                      <span>{`Welcome to `}</span>
                      <span className="text-orangered">Satsang Seva</span>
                    </div>
                    <h1 className="m-0 relative text-21xl font-medium font-inherit inline-block min-w-[118px] whitespace-nowrap z-[7] mq1050:text-13xl mq450:text-5xl">
                      Log in
                    </h1>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 text-smi text-gray-200">
                    <div
                      className="relative cursor-pointer z-[7]"
                      onClick={onNoAccountClick}
                    >
                      <p className="m-0">No Account ?</p>
                      <p className="m-0 text-cornflowerblue">Sign up</p>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[20px]">
                  <Button
                    className="h-[55px] flex-1 min-w-[194px] z-[7]"
                    startIcon={
                      <img width="26px" height="26px" src="/google.svg" />
                    }
                    disableElevation
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#4285f4",
                      fontSize: "16",
                      background: "#e9f1ff",
                      borderRadius: "9px",
                      "&:hover": { background: "#e9f1ff" },
                      height: 55,
                    }}
                  >
                    Sign in with Google
                  </Button>
                  <div className="flex flex-row items-start justify-start gap-[13px]">
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <img
                        className="w-[60px] h-[55px] relative z-[7]"
                        loading="lazy"
                        alt=""
                        src="/group-521.svg"
                      />
                    </div>
                    <img
                      className="h-[55px] w-[60px] relative min-h-[55px] z-[7]"
                      loading="lazy"
                      alt=""
                      src="/group-511.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[92px] flex flex-col items-start justify-start pt-[35px] px-0 pb-0 box-border relative gap-[13px] z-[7] text-base">
                <div className="mt-[-37px] relative shrink-0">
                  Enter your email address
                </div>
                <TextField
                  id="email"
                  className="[border:none] bg-[transparent] self-stretch h-[57px] relative shrink-0"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#2c9cf0" },
                    "& .MuiInputBase-root": {
                      height: "57px",
                      backgroundColor: "#fff",
                      borderRadius: "9px",
                    },
                  }}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1.5 gap-[12px] text-base">
              <div className="self-stretch h-[92px] flex flex-col items-start justify-start pt-[35px] px-0 pb-0 box-border relative gap-[13px] z-[7]">
                <div className="mt-[-37px] relative shrink-0">
                  Enter your Password
                </div>
                <TextField
                  id="password"
                  className="[border:none] bg-[transparent] self-stretch h-[57px] relative shrink-0"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#adadad" },
                    "& .MuiInputBase-root": {
                      height: "57px",
                      backgroundColor: "#fff",
                      borderRadius: "9px",
                    },
                  }}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Your Password"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-end text-smi text-cornflowerblue">
                <div className="relative inline-block min-w-[108px] z-[7]">
                  Forgot Password
                </div>
              </div>
            </div>
            <Button
              type="submit"
              className="self-stretch h-[54px] shadow-[0px_4px_19px_rgba(119,_147,_65,_0.3)] cursor-pointer z-[7] mq450:pl-5 mq450:pr-5 mq450:box-border"
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#ff5f17",
                borderRadius: "10px",
                "&:hover": { background: "#ff5f17" },
                height: 54,
              }}
              onClick={handleLogin}
            >
              Log in
            </Button>
          </div>
        </div>
      </section>
      <section className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-700 z-[5]" />
    </div>
  );
};

export default LogIn;
