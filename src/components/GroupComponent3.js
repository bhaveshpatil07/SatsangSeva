import { useMemo } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";

const GroupComponent3 = ({
  className = "",
  enterYourUsernameOrEmailA,
  usernameOrEmailAddress,
  propAlignSelf,
  propFlex,
}) => {
  const groupDiv3Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  return (
    <div
      className={`self-stretch h-[84.8px] flex flex-col items-start justify-start pt-[49.7px] px-0 pb-[14.1px] box-border relative gap-[27.6px] max-w-full z-[7] text-left text-base text-black font-poppins ${className}`}
      style={groupDiv3Style}
    >
      <div className="mt-[-51.6px] relative">{enterYourUsernameOrEmailA}</div>
      <TextField
        className="[border:none] bg-[transparent] w-full h-[52.5px] absolute !m-[0] right-[0px] bottom-[0.1px] left-[0px]"
        variant="outlined"
        sx={{
          "& fieldset": { borderColor: "#adadad" },
          "& .MuiInputBase-root": {
            height: "52.5px",
            backgroundColor: "#fff",
            borderRadius: "9px",
          },
          width: "414.7px",
        }}
      />
      <div className="w-[323.7px] flex flex-row items-start justify-start py-0 px-[23px] box-border max-w-full text-sm text-gray-300">
        <div className="flex-1 relative font-light z-[1]">
          {usernameOrEmailAddress}
        </div>
      </div>
    </div>
  );
};

GroupComponent3.propTypes = {
  className: PropTypes.string,
  enterYourUsernameOrEmailA: PropTypes.string,
  usernameOrEmailAddress: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
};

export default GroupComponent3;
