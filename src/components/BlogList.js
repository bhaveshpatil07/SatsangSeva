import PropTypes from "prop-types";

const BlogList = ({ className = "", postImage, strategiesToFindYourInner }) => {
  return (
    <div className={`flex flex-col items-start justify-start gap-[20px] max-w-full text-left text-xl text-darkorange-200 font-dm-sans ${className}`}>
      <div className="self-stretch rounded-xl bg-orange flex flex-row items-start justify-start max-w-full transition-transform transform hover:scale-95 hover:shadow-lg">
        <div className="self-stretch w-[343px] relative rounded-xl bg-orange hidden max-w-full" />
        <img
          className="h-[210px] flex-1 relative rounded-mini max-w-full overflow-hidden object-cover z-[1]"
          loading="lazy"
          alt=""
          src={postImage}
        />
      </div>
      <b className="self-stretch relative leading-[150%] mq450:text-base mq450:leading-[24px]">
        {strategiesToFindYourInner}
      </b>
      <div className="self-stretch relative text-base leading-[150%] text-black">
        Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama
        Bostiketbos. Hanya perlu mengikuti beberapa langkah hjftuj
      </div>
      <div className="self-stretch relative text-sm leading-[150%] text-darkgray-200">
        12 Mar - Jhon Doe
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

