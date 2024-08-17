import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const BlogList = ({ className = "", id, poster, title, content, date }) => {
  const navigate = useNavigate();
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      month: 'short',
      day: 'numeric',
    });
  };

  const handleClick = ()=>{
    navigate("/blog?q="+id);
  }

  return (
    <div onClick={handleClick} className={`flex flex-col cursor-pointer items-start justify-start gap-[20px] max-w-full text-left text-xl text-darkorange-200 font-dm-sans transform transition-transform duration-300 hover:scale-105 ${className}`}>
      <div className="self-stretch w-[343px] rounded-xl bg-orange flex flex-row items-start justify-start max-w-full">
        <div className="self-stretch w-[343px] relative rounded-xl bg-orange hidden max-w-full" />
        <img
          className="self-stretch h-[210px] flex-1 relative rounded-mini max-w-full overflow-hidden object-cover z-[1]"
          loading="lazy"
          alt=""
          src={poster}
        />
      </div>
      <div style={{ maxWidth: "min-content", minWidth: "340px" }} className="text-justify flex flex-col items-start justify-start mq750:!pr-5">
        <b className="relative leading-[150%] mq450:leading-[24px]">
          {title.substring(0, 20)}{title.length<=20?"":"..."}
        </b>
        <div className=" relative text-base leading-[150%] text-black mq750:!max-w-[90%]">
          {content.substring(0,210)}{content.length<=210?"":"..."}
        </div>
        <div className=" relative text-sm leading-[150%] text-darkgray-200">
          {formatDate(date)} - SatsangSeva
        </div>
      </div>

    </div>
  );
};

BlogList.propTypes = {
  className: PropTypes.string,
  postImage: PropTypes.string,
  strategiesToFindYourInner: PropTypes.string,
};

export default BlogList;

