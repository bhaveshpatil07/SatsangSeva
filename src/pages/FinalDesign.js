import { Button } from "@mui/material";
import LandingPage from "../components/LandingPage";
import EventListing from "../components/EventListing";
import EventCreation from "../components/EventCreation";
import BlogList from "../components/BlogList";
import Footer from "../components/Footer";

const FinalDesign = () => {
  return (
    <div className="w-full relative bg-white overflow-x-hidden flex flex-col items-end justify-start pt-0 px-0 box-border gap-[74px] leading-[normal] tracking-[normal] mq750:gap-[37px] mq1050:h-auto mq450:gap-[18px]">
      <LandingPage />
      <EventListing />
      <EventCreation />
      <section style={{width: "100vw"}} className="flex flex-row items-start justify-center pt-0 px-5 pb-[11px] box-border max-w-full shrink-0 text-left text-21xl text-darkorange-200 font-montserrat">
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
            <BlogList
              postImage="/rectangle-43@2x.png"
              strategiesToFindYourInner="6 Strategies to Find Your Inner Peace and get Enlightenment for Your Life"
              className="transform transition-transform duration-300 hover:scale-105"
            />
            <BlogList
              postImage="/rectangle-43-1@2x.png"
              strategiesToFindYourInner="Connecting with God inside us and Asking Ways for better living of Life Values"
              className="transform transition-transform duration-300 hover:scale-105"
            />
            <div className="flex flex-col items-start justify-start gap-[20px] max-w-full transform transition-transform duration-300 hover:scale-105">
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
                Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah .
              </div>
              <div className="self-stretch relative text-sm leading-[150%] text-darkgray-200">
                12 Mar - Jhon Doe
              </div>
            </div>
          </div>
          <div className="self-stretch h-[60px] flex flex-row items-start justify-center py-0 px-5 box-border">
            <Button
              className="self-stretch w-[182px] border-[2px] border-solid border-[#ff5f17] shadow-none"
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#ff5f17",
                fontSize: "18px",
                borderColor: "#ff5f17",
                borderRadius: "50px",
                "&:hover": { borderColor: "#ff5f17", boxShadow: "0px 10px 20px rgba(61, 55, 241, 0.25)" },
                width: 182,
              }}
            >
              Load More
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FinalDesign;


