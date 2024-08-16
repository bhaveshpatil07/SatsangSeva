import { Button } from "@mui/material";
import LandingPage from "../components/LandingPage";
import EventListing from "../components/EventListing";
import EventCreation from "../components/EventCreation";
import BlogList from "../components/BlogList";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

const FinalDesign = () => {
  const url = process.env.REACT_APP_BACKEND;
  const [visibleBlogs, setVisibleBlogs] = useState(3);
  const [hasMoreBlogs, setHasMoreBlogs] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    await axios.get(url + "/admin/blog").then((resp) => {
      setBlogs(resp.data.blogs);
    }).catch((e) => {
      console.log("Error in fetching Blogs : " + e);
    });
  };

  const handleLoadMore = () => {
    const newVisibleBlogs = visibleBlogs + 6;
    setVisibleBlogs(newVisibleBlogs);
    setHasMoreBlogs(blogs.length > newVisibleBlogs);
  };

  return (
    <div id="home" style={{ marginTop: "-5rem" }} className="w-full relative bg-white overflow-x-hidden flex flex-col items-end justify-start pt-0 px-0 box-border leading-[normal] tracking-[normal] mq750:gap-[37px] mq1050:h-auto mq450:gap-[18px]">
      <LandingPage />
      <EventListing />
      <EventCreation />
      <section style={{ width: "100vw" }} className="flex flex-row items-start justify-center pt-5 px-5 pb-5 box-border max-w-full shrink-0 text-left text-21xl text-darkorange-200 font-montserrat mq750:!pt-3">
        <div className="w-[1086px] flex flex-col items-end justify-start gap-[48.5px] max-w-full mq750:gap-[24px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px] box-border max-w-full">
            <div className="w-[464px] flex flex-col items-start justify-start gap-[20px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[31px]">
                <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block min-w-[97px] mq1050:text-13xl mq450:text-5xl">
                  Blogs
                </h1>
              </div>
              <div className="relative text-lg leading-[150%] font-dm-sans text-dimgray">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-evenly gap-[28.5px] max-w-full flex-wrap mq750:flex-wrap mq1050:justify-center mq1050:flex-basis-[50%]">
            {blogs && blogs.slice(0, visibleBlogs).map((blog) => (
              <BlogList
                key={blog._id}
                id={blog._id}
                poster={blog.images[0]}
                title={blog.title}
                content={blog.content}
                date={blog.createdAt}
              />
            ))}
            {/* <div className="flex flex-col items-start justify-start gap-[20px] max-w-full transform transition-transform duration-300 hover:scale-105">
              <img
                className="self-stretch h-[210px] bg-orange relative rounded-xl max-w-full overflow-hidden shrink-0 object-cover"
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
            </div> */}
          </div>

          {hasMoreBlogs && <div className="self-stretch h-[60px] flex flex-row items-start justify-center py-0 px-5 box-border">
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
              onClick={handleLoadMore}
            >
              Load More
            </Button>
          </div>}

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FinalDesign;


