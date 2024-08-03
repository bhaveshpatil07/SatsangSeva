import { Button } from "@mui/material";
import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-darkorange-100 flex flex-col items-center justify-start pt-7 px-5 pb-[50px] box-border relative gap-[69px] max-w-full shrink-0 text-left text-lg text-white font-dm-sans mq750:gap-[34px] mq450:gap-[17px] mq450:pt-[7px] mq450:pb-5 mq450:box-border ${className}`}
      
    >
      <div className="w-[1440px] h-[430px] relative bg-darkorange-100 hidden max-w-full z-[0]" />
      <div className="w-[1240px] flex flex-row items-center justify-between max-w-full gap-[20px] lg:flex-wrap lg:justify-center">
        <div className="w-[362px] flex flex-col items-start justify-start py-0 pr-[35px] pl-0 box-border gap-[32px] max-w-full text-14xl-6 font-sacramento mq450:gap-[16px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[4.6px] max-w-full">
          <div className="flex pt-3 flex-row items-center gap-4">
            <div className="flex-shrink-0 flex items-center justify-center">
              <img
                className="h-10 w-12"
                loading="lazy"
                alt="Logo"
                src="/group1.svg"
              />
            </div>
            <div className="flex-1 text-9xl font-semibold leading-tight text-center lg:text-left">
              SatsangSeva
            </div>
          </div>

            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border max-w-full text-sm text-whitesmoke-200 font-montserrat">
              <div className="flex-1 relative leading-[160%] inline-block max-w-full z-[1]">
                Eventick is a global self-service ticketing platform for live
                experiences that allows anyone to create, share, find and attend
                events that fuel their passions and enrich their lives.
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[15.7px]">
            <img
              className="h-9 w-9 relative overflow-hidden shrink-0 min-h-[36px] z-[1]"
              loading="lazy"
              alt=""
              src="/facebook.svg"
            />
            <img
              className="h-9 w-9 relative overflow-hidden shrink-0 min-h-[36px] z-[1]"
              loading="lazy"
              alt=""
              src="/twitter.svg"
            />
            <img
              className="h-9 w-9 relative overflow-hidden shrink-0 min-h-[36px] z-[1]"
              loading="lazy"
              alt=""
              src="/linkedin.svg"
            />
            <img
              className="h-9 w-9 relative rounded-71xl object-cover min-h-[36px] z-[3]"
              loading="lazy"
              alt=""
              src="/image-21@2x.png"
            />
          </div>
        </div>
        <div className="w-[292px] flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <div className="flex flex-col items-start justify-start gap-[23px]">
              <b className="relative capitalize inline-block min-w-[102px] z-[1]">
                Plan Events
              </b>
              <div className="relative text-sm leading-[200%] font-medium text-whitesmoke-200 z-[1]">
                <p className="m-0">Create and Set Up</p>
                <p className="m-0">Sell Tickets</p>
                <p className="m-0">{`Online RSVP `}</p>
                <p className="m-0">Online Events</p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[23px]">
              <b className="relative capitalize inline-block min-w-[77px] z-[1]">
                Eventick
              </b>
              <div className="relative text-sm leading-[200%] font-medium text-whitesmoke-200 z-[1]">
                <p className="m-0">About Us</p>
                <p className="m-0">Press</p>
                <p className="m-0">Contact Us</p>
                <p className="m-0">Help Center</p>
                <p className="m-0">How it Works</p>
                <p className="m-0">Privacy</p>
                <p className="m-0">Terms</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[364px] flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[21.5px] max-w-full shrink-0">
            <b className="relative capitalize z-[1]">Stay in the loop</b>
            <div className="self-stretch relative text-sm leading-[160%] text-whitesmoke-200 z-[1]">
              Join our mailing list to stay in the loop with our newest for
              Event and concert
            </div>
            <div className="self-stretch rounded-[45.59px] bg-white box-border flex flex-row items-center justify-center max-w-full [row-gap:20px] z-[1] text-smi-2 text-darkgray-300 border-[2px] border-solid border-whitesmoke-300 mq450:flex-wrap mq450:box-border">
              <div className="h-[60.8px] w-[364px] relative rounded-[45.59px] bg-white box-border hidden max-w-full border-[2px] border-solid border-whitesmoke-300" />
              <div className="flex-1 flex flex-col items-start justify-start  px-0 pb-0 box-border min-w-[93px]">
                <div className="p-3 pt-0 pb-0 self-stretch relative z-[1]">
                  Get all Notification to your Whatsapp..
                </div>
              </div>
              <div className="flex flex-col items-start justify-start py-0 px-0">
                <Button
                  className="ml-[-8px] w-[149.8px] h-[46.4px] shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] z-[1]"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "12.2px",
                    background: "#34a853",
                    borderRadius: "50px",
                    "&:hover": { background: "#34a853" },
                    width: 149.8,
                    height: 46.4,
                  }}
                >
                  Subscribe Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1240px]   text-sm text-gray-100 font-montserrat">
        <hr className="border-t border-darkslateblue mb-3" />
        <div className="text-center">
          <p className="leading-[23px]">
            Copyright © 2024 Campaigning Source
          </p>
        </div>
      </div>

    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;







