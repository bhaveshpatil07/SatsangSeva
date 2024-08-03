import { Button } from "@mui/material";
import FirstFold from "../components/FirstFold4";
import FrameComponent8 from "../components/FrameComponent8";
import SearchBox from "../components/SearchBox";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import LoginForm from "../components/LoginForm";
import BlogList from "../components/BlogList";
import Footer from "../components/Footer1";

const SignIn = () => {
  return (
    <div style={{marginTop: "-5rem"}} className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-center gap-[22px] leading-[normal] tracking-[normal]">
      <section className="self-stretch flex flex-col items-center justify-center max-w-full">
        <FirstFold
          iconsxCircle="/iconsxcircle.svg"
          rectangleIconAlignSelf="stretch"
          rectangleIconFlex="unset"
        />
        <FrameComponent8 />
      </section>
      <section className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-700 z-[5]" />
    </div>
  );
};

export default SignIn;
