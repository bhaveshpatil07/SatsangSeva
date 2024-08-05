import { Button } from "@mui/material";
import LiveEvent from "../components/LiveEvent";
import HostingContent from "../components/HostingContent";
import Footer from "../components/Footer";
import FrameComponent from "../components/FrameComponent"; // Adjust the path if necessary

const SpeakersPage = () => {
  return (
    <div style={{marginTop: "-5rem"}} className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] mq450:gap-[24px] mq750:gap-[48px]">
      {/* Navbar section */}


      <section className="ml-[-1px] self-stretch flex flex-col items-center justify-center pt-5 pb-5 box-border relative gap-[32.1px] max-w-full mq450:pb-[37px] mq450:box-border mq750:gap-[16px]">
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px]">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            alt=""
            src="/rectangle-121@2x.png"
          />
          <img
            className="absolute top-0 left-0 w-full h-full object-cover mix-blend-normal z-[1]"
            alt=""
            src="/rectangle-101.svg"
          />
        </div>
        <div className="self-stretch h-[5.4px] relative shadow-[0px_8px_20px_rgba(209,_209,_209,_0.19)] z-[2]" />
        <LiveEvent />
      </section>
      <section id="main" className="pt-5 self-stretch flex flex-row items-start justify-center box-border max-w-full">
        <HostingContent />
      </section>
      <Footer
        group="/group1.svg"
        facebook="/facebook.svg"
        twitter="/twitter.svg"
        linkedin="/linkedin.svg"
        group1="/group1.svg"
        footerAlignSelf="stretch"
        footerWidth="unset"
      />
    </div>
  );
};

export default SpeakersPage;
