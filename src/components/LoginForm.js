import PropTypes from "prop-types";

const LoginForm = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-xl bg-orange flex flex-row items-start justify-start max-w-full ${className}`}
    >
      <div className="self-stretch w-[343px] relative rounded-xl bg-orange hidden max-w-full" />
      <img
        className="h-[210px] flex-1 relative rounded-mini max-w-full overflow-hidden object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/rectangle-43@2x.png"
      />
    </div>
  );
};

LoginForm.propTypes = {
  className: PropTypes.string,
};

export default LoginForm;
