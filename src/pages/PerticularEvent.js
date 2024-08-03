import FirstFold3 from "../components/FirstFold3";
import FrameComponent12 from "../components/FrameComponent12";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent3 from "../components/FrameComponent3";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import FirstFold1 from "../components/FirstFold1";
const PerticularEvent = () => {
  const navigate = useNavigate();
  const handleBookNowClick = () => {
    navigate("/perticular");
  };
  return (
    <div style={{marginTop: "-5rem"}} className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start gap-[41px] leading-[normal] tracking-[normal] mq750:gap-[20px]">
      <FirstFold1
        group="/group7.svg"
        firstFoldMenu="/first-fold-menu@2x.png"
        rectangle10="/rectangle-1011.svg"
        group1="/group-12.svg"
      />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-28 pr-5 pl-[21px] box-border max-w-full lg:pb-[73px] lg:box-border mq450:pb-[31px] mq450:box-border mq1050:pb-[47px] mq1050:box-border">
        <div className="w-[1199px] flex flex-col items-start justify-start gap-[72px] max-w-full lg:gap-[36px] mq750:gap-[18px]">
          <FrameComponent12 />
          <FrameComponent11 />
          <FrameComponent3
            group227="Book Now"
            listYourEventInJustOneCli="Book your slot in just one click"
            onBookNowClick={handleBookNowClick} 
          />
        </div>
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

export default PerticularEvent;
