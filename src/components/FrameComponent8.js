import { useCallback, useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import Loader from "./Loader";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Modal, Button as Btn } from "react-bootstrap";

const FrameComponent8 = ({ className = "" }) => {
  const url = process.env.REACT_APP_BACKEND;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    userType: "Host"
  });

  const [error, setError] = useState("");
  const [inputOtp, setInputOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const onInputChange = (e) => {
    if (disabled) {
      if (e.target.name === "email") {
        alert("Don't mess with Website!");
        return window.location.reload();
      }
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClose = ()=>{
    setOtp("");
    setInputOtp(false);
  };

  const handleCheckOtp = async ()=>{
    setLoading(true);
    if(otp.length!==6 || formData.phoneNumber.length!==10){
      alert("OTP is of 6-Digits");
      return setLoading(false);
    }
    await axios.get(url+"/admin/verifycheck?contact="+formData.phoneNumber+"&otp="+otp)
      .then((resp)=>{
        // console.log(resp);
        alert("Phone Number Verified Successfully!");
        handleClose();
        onFormSubmit();
      }).catch((e)=>{
        alert("Invalid OTP! Try again");
      }).finally(()=>{
        setLoading(false);
      })
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    if(disabled){
      return onFormSubmit();
    }
    setLoading(true);
    setError("");
    if (formData.password !== formData.confirmPassword || formData.password.trim() === "") {
      alert("Confirm Password doesn't match!");
      return setLoading(false);
    }
    if (!formData.name || formData.name.trim() === "") {
      alert("Enter your name");
      return setLoading(false);
    }
    if (!formData.phoneNumber || formData.phoneNumber.length !== 10) {
      alert("Enter 10 Digit Phone Number.");
      return setLoading(false);
    }
    await axios.post(url + "/admin/verifysend/" + formData.phoneNumber).then((rep) => {
      // console.log(rep);
      setInputOtp(true);
    }).catch((e) => {
      console.log(e);
      setLoading(false);
      return alert("Error in Sending OTP! Try Again.");
    });
    setLoading(false);
  }

  const onFormSubmit = async () => {
    // if (!disabled) {
    //   alert("You have to sign in with Google.");
    //   return setLoading(false);
    // }
    setLoading(true);
    try {
      const response = await axios.post(url + "/user/signup", formData).then((resp) => {
        alert("Account Created Successfully! Please Login.");
        navigate("/login");
      }).catch((error) => {
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
    <div style={{ width: "100vw" }}
      className={`flex absolute flex-row items-center justify-center py-0 pt-5 box-border max-w-full text-left text-base text-black font-poppins ${className}`}
    >
      {loading && <Loader />}
      <div className="w-[512px] shadow-[0px_4px_35px_rgba(0,_0,_0,_0.08)] rounded-xl bg-white flex flex-col items-center justify-center pt-[20px] pb-[20px] pr-5 pl-5 align-items-center box-border gap-[20px] max-w-full z-[6] mq750:gap-[22px] mq1050:pb-[30px] mq1050:box-border mq450:pb-5 mq450:box-border">
        <div className="self-stretch flex flex-row items-center justify-center py-0 pr-px pl-[7px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-center justify-center gap-[10px] max-w-full">
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
              <div onClick={() => navigate("/login")} className="cursor-pointer relative text-smi inline-block shrink-0 z-[7] text-gray-200">
                <p className="m-0">Already have an account?</p>
                <p className="m-0 text-cornflowerblue">Log In</p>
              </div>
            </div>
            <GoogleLogin
              theme="filled_blue"
              text="signup_with"
              shape="pill"
              onSuccess={(credentialResponse) => {
                const decoded = jwtDecode(credentialResponse?.credential);
                // console.log(decoded);
                setFormData({
                  ...formData,
                  email: decoded.email,
                  name: decoded.name,
                });
                setDisabled(true);
                alert("Account Verified! Fill the details and click SignUp.")
                // console.log(decoded.picture);

              }}
              onError={() => {
                console.log('Login Failed');
              }} />
          </div>
        </div>
        <Modal show={inputOtp} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Verify OTP</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>OTP sent successfully to <span style={{ fontWeight: 'bold' }}>+91-{formData.phoneNumber}</span></p>
            <form>
              <div className="form-group">
                <input value={otp} onChange={(e)=>{setOtp(e.target.value);}} type="number" className="form-control" id="otp" placeholder="Enter 6 digit OTP" maxLength="6" />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Btn variant="secondary" onClick={handleClose}>
              Cancel
            </Btn>
            <Btn variant="outline-primary" onClick={handleCheckOtp}>
              Verify
            </Btn>
          </Modal.Footer>
        </Modal>
        <form onSubmit={handleVerify} className="w-[429.7px] flex flex-row items-start justify-start py-0 px-[7px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[25px] max-w-full">
            <div className="flex w-full justify-between">
              {/* <label htmlFor="userType">User Type: </label> */}
              <select className="form-control" value={formData.userType} onChange={onInputChange} name="userType">
                <option value="Host&Participant">Host & Participant</option>
                <option value="Host">Host</option>
              </select>
            </div>
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
              disabled={disabled}
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
              placeholder="Contact"
              disabled={inputOtp}
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
            <div onClick={() => { navigate('/login') }} className="flex cursor-pointer">
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
