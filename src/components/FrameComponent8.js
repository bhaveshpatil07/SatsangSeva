import { useCallback, useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import Loader from "./Loader";

const FrameComponent8 = ({ className = "" }) => {
  const url = process.env.REACT_APP_BACKEND;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    if(formData.password!==formData.confirmPassword || formData.password.trim()===""){
      alert("Confirm Password doesn't match!");
      return setLoading(false);
    }
    if(!formData.name || formData.name.trim()===""){
      alert("Enter your name");
      return setLoading(false);
    }
    if(!formData.phoneNumber || formData.phoneNumber.length !==10){
      alert("Enter 10 Digit Phone Number.");
      return setLoading(false);
    }

    try {
      const response = await axios.post(url + "/user/signup", formData).then((resp)=>{
          navigate("/login");
      }).catch((error)=>{
        console.log(error);
        alert("Error in SignUp! " + error.data.message);
      });
    } catch (err) {
      // Handle errors
      setError(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const onGroupButtonClick = useCallback(() => {
    navigate("/event-listing");
  }, [navigate]);

  return (
    <div style={{width: "100vw"}}
      className={`flex absolute flex-row items-start justify-center py-0 box-border max-w-full text-left text-base text-black font-poppins ${className}`}
    >
      {loading && <Loader />}
      <div className="w-[512px] shadow-[0px_4px_35px_rgba(0,_0,_0,_0.08)] rounded-xl bg-white flex flex-col items-start justify-start pt-[24.3px] pb-[46.1px] pr-5 pl-5 align-items-center box-border gap-[44.8px] max-w-full z-[6] mq750:gap-[22px] mq1050:pb-[30px] mq1050:box-border mq450:pb-5 mq450:box-border">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-[7px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[13.9px] max-w-full">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[28.4px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[10.3px] min-w-[165px] shrink-0">
                <div className="self-stretch h-[29.5px] relative inline-block shrink-0 z-[7]">
                  <span>{`Welcome to `}</span>
                  <span className="text-orangered">Satsang Seva</span>
                </div>
                <h1 className="m-0 relative text-17xl font-medium font-inherit shrink-0 z-[7] mq1050:text-10xl mq450:text-3xl">
                  Host Sign up
                </h1>
              </div>
              <div onClick={() => navigate("/login")} className="h-[36.9px] w-[152.6px] cursor-pointer relative text-smi inline-block shrink-0 z-[7] text-gray-200">
                <p className="m-0">Already have an account?</p>
                <p className="m-0 text-cornflowerblue">Log In</p>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={onFormSubmit} className="w-[429.7px] flex flex-row items-start justify-start py-0 px-[7px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[28.6px] max-w-full">
            <TextField
              label="Enter your name"
              name="name"
              value={formData.name}
              onChange={onInputChange}
              fullWidth
              required
              variant="outlined"
              size="small"
              placeholder="Name"
            />
            <TextField
              label="Enter your email address"
              name="email"
              value={formData.email}
              onChange={onInputChange}
              fullWidth
              required
              variant="outlined"
              size="small"
              placeholder="Email"
            />
            <TextField
              label="+91 | Enter your phone number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={onInputChange}
              fullWidth
              required
              variant="outlined"
              size="small"
              placeholder="Email"
            />
            <TextField
              label="Enter your password"
              name="password"
              value={formData.password}
              onChange={onInputChange}
              fullWidth
              required
              variant="outlined"
              size="small"
              type="password"
            />
            <TextField
              label="Re-enter your password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={onInputChange}
              fullWidth
              required
              variant="outlined"
              size="small"
              type="password"
            />
            <Button
              className="w-[414.7px] h-[49.8px] shadow-[0px_4px_19px_rgba(119,_147,_65,_0.3)] max-w-full cursor-pointer z-[7] mq450:pl-5 mq450:pr-5 mq450:box-border"
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#ff5f17",
                borderRadius: "10px",
                "&:hover": { background: "#ff5f17" },
                width: 414.7,
                height: 49.8,
              }}
              type="submit"
              disabled={loading}
            >
              Sign up
            </Button>
            {error && <div className="text-red-500">{error}</div>}
            <div onClick={()=>{navigate('/login')}} className="flex cursor-pointer">
              <p className="m-0">Already have an Account ? </p>
              <p className="m-0 text-cornflowerblue"> Log In</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
