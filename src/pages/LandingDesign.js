import { Button } from "@mui/material";
import Main from "../components/Main";
import FrameComponent1 from "../components/FrameComponent1";
import BlogList from "../components/BlogList";
import Footer from "../components/Footer";

const LandingDesign = () => {
  return (
    <div style={{marginTop: "-5rem"}} className="w-full h-[3463px] relative bg-white overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[513px] box-border gap-[85px] leading-[normal] tracking-[normal] mq750:gap-[42px] mq1050:h-auto mq450:gap-[21px]">
      <Main />
      <FrameComponent1 />
      <section className="w-[1418px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0 text-left text-21xl text-darkorange-200 font-montserrat">
        <div className="w-[1086px] flex flex-col items-end justify-start gap-[48.5px] max-w-full mq750:gap-[24px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px] box-border max-w-full">
            <div className="w-[464px] flex flex-col items-start justify-start gap-[20px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[31px]">
                <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block min-w-[97px] mq1050:text-13xl mq450:text-5xl">
                  Blog
                </h1>
              </div>
              <div className="relative text-lg leading-[150%] font-dm-sans text-dimgray">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
            </div>
          </div>
          <div className="self-stretch grid flex-row items-start justify-start gap-[28.5px] max-w-full grid-cols-[repeat(3,_minmax(257px,_1fr))] text-xl font-dm-sans mq750:grid-cols-[minmax(257px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(257px,_446px))]">
            <div
              className="flex flex-col items-start justify-start gap-[20px] max-w-full transition-transform transform hover:scale-95"
              style={{
                transition: "transform 0.3s ease",
              }}
            >
              <BlogList
                postImage="/rectangle-43@2x.png"
                strategiesToFindYourInner="6 Strategies to Find Your Inner Peace and get Enlightenment for Your Life"
              />
            </div>
            <div
              className="flex flex-col items-start justify-start gap-[20px] max-w-full transition-transform transform hover:scale-95"
              style={{
                transition: "transform 0.3s ease",
              }}
            >
              <BlogList
                postImage="/rectangle-43-1@2x.png"
                strategiesToFindYourInner="Connecting with God inside us and Asking Ways for better living of Life Values"
              />
            </div>
            <div
              className="flex flex-col items-start justify-start gap-[20px] max-w-full transition-transform transform hover:scale-95"
              style={{
                transition: "transform 0.3s ease",
              }}
            >
              <img
                className="self-stretch h-[210px] relative rounded-xl max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/rectangle-14@2x.png"
              />
              <b className="self-stretch relative leading-[150%] mq450:text-base mq450:leading-[24px]">
                Introducing Workspaces: Work smarter, not harder with new
                navigation
              </b>
              <div className="self-stretch relative text-base leading-[150%] text-black">
                Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama
                Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.
              </div>
              <div className="self-stretch relative text-sm leading-[150%] text-darkgray-200">
                12 Mar - Jhon Doe
              </div>
            </div>
          </div>
          <div className="self-stretch h-[60px] flex flex-row items-start justify-center py-0 px-5 box-border">
            <Button
              className="self-stretch w-[182px] shadow-[0px_10px_30px_rgba(0,_0,_0,_0.25)]" // Updated shadow
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#ff5f17",
                fontSize: "18px",
                borderColor: "#ff5f17",
                borderRadius: "50px",
                "&:hover": { borderColor: "#ff5f17", boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.25)" }, // Updated hover shadow
                width: 182,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.25)", // Updated shadow
              }}
            >
              Load More
            </Button>
          </div>
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

export default LandingDesign;

