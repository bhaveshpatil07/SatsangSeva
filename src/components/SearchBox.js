import { useCallback } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const SearchBox = ({ className = "" }) => {
  const navigate = useNavigate();

  const onSearchBoxContainerClick = useCallback(() => {
    navigate("/search-bar");
  }, [navigate]);

  return (
    <div
      className={`w-[1200px] shadow-[0px_12px_60px_rgba(61,_55,_241,_0.25)] rounded-xl bg-darkorange-200 flex flex-row flex-wrap items-start justify-start py-[40px] px-14 box-border gap-[80px] min-h-[160px] max-w-full cursor-pointer z-[4] text-left text-base text-white font-dm-sans lg:gap-[40px] lg:pl-8 lg:pr-8 lg:box-border mq750:gap-[20px] ${className}`}
      onClick={onSearchBoxContainerClick}
    >
      <div className="h-[160px] w-[1200px] relative shadow-[0px_12px_60px_rgba(61,_55,_241,_0.25)] rounded-xl bg-darkorange-200 hidden max-w-full" />
      <div className="flex-1 flex flex-col items-start justify-start gap-[14px] min-w-[250px]">
        <div className="relative inline-block min-w-[110px] z-[1] text-xl">
          Search Event
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px] text-4xl">
          <b className="relative inline-block min-w-[120px] z-[1] mq450:text-xl">
            Event Name
          </b>
          <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-sandybrown" />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[14px] min-w-[250px]">
        <div className="relative inline-block min-w-[60px] z-[1] text-xl">
          Place
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px] text-4xl">
          <b className="relative inline-block min-w-[120px] z-[1] mq450:text-xl">
            Event Address
          </b>
          <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-sandybrown" />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[14px] min-w-[250px]">
        <div className="relative inline-block min-w-[50px] z-[1] text-xl">
          Date
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px] text-4xl">
          <b className="relative inline-block min-w-[120px] z-[1] mq450:text-xl">
            Any Date
          </b>
          <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-sandybrown" />
        </div>
        {/* <div className="self-stretch flex flex-col items-start justify-start gap-[6px]"> */}
          {/* <input className="form-control text-secondary text-xl p-0 bg-transparent border-none" type="datetime-local" name="" id="" /> */}
          {/* <FormControl
            className="self-stretch h-[36px] font-dm-sans font-bold text-4xl text-white w-auto"
            variant="standard"
            sx={{
              borderTopWidth: "0px",
              borderRightWidth: "0px",
              borderBottomWidth: "0px",
              borderLeftWidth: "0px",
              borderRadius: "0px 0px 0px 0px",
              width: "100%",
              height: "36px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "36px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "36px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "36px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "36px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#fff",
                fontSize: 24,
                fontWeight: "Bold",
                fontFamily: "DM Sans",
                textAlign: "left",
                p: "0 !important",
              },
            }}
          >
            <InputLabel color="primary" />
            <Select
              color="primary"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img width="12px" height="6px" src="/vector.svg" style={{}} />
              )}
            >
              <MenuItem>Any date</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl> */}
          {/* <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-sandybrown" /> */}
        {/* </div> */}
      </div>
    </div>
  );
};

SearchBox.propTypes = {
  className: PropTypes.string,
};

export default SearchBox;

