import { Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/SearchTwoTone';
import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import '../Csss/Search.css';

const SearchAndFilters = ({ className = "", handleSearchDataChange }) => {
  const url = process.env.REACT_APP_BACKEND;
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    eventName: "",
    address: "",
    startTime: "",
    host: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setShouldFetchSuggestions(true);
  };

  const handleSearch = async () => {
    if (formData.address || formData.eventName || formData.startTime || formData.host) {
      setLoading(true);
      await axios.get(url + "/event/search?name=" + encodeURIComponent(formData.eventName) + "&add=" + encodeURIComponent(formData.address) + "&date=" + encodeURIComponent(formData.startTime) + "&host=" + encodeURIComponent(formData.host)).then((resp) => {
        handleSearchDataChange(resp.data.events);
        const windowHeight = window.innerHeight;
        const scrollAmount = windowHeight * 0.35;
        const currentScrollPosition = window.scrollY;
        const newScrollPosition = currentScrollPosition + scrollAmount;
        window.scrollTo({ top: newScrollPosition, behavior: 'smooth' });
      }).catch((e) => {
        console.log("Error: " + e);
        if (e.data) {
          alert(e.data.message);
        }else{
          alert("No Events found for your search! Try searching with another keywords.");
        }

      }).finally(() => {
        setLoading(false);
      });
    } else {
      alert("Please Enter atleast one field.");
    }
  };

  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [shouldFetchSuggestions, setShouldFetchSuggestions] = useState(true);

  useEffect(() => {
    if (formData.eventName.length > 0 && shouldFetchSuggestions) {
      handleInputChange();
    }
  }, [formData.eventName]);

  const handleInputChange = async () => {
    const response = await axios.get(`${url}/event/suggestions?name=${encodeURIComponent(formData.eventName)}`);
    const suggestions = response.data.suggestions;
    setSuggestions(suggestions);
    setShowSuggestions(suggestions.length > 0);
  };

  const handleSuggestionClick = (suggestion) => {
    setFormData({ ...formData, eventName: suggestion });
    setShowSuggestions(false);
    setShouldFetchSuggestions(false);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 100);
  };

  return (
    <section style={{ width: "100vw" }}
      className={`flex flex-row items-start justify-center pt-3 px-5 pb-2.5 box-border max-w-full ${className}`}
    >
      {loading && <Loader />}
      <form className="m-0 w-[1275px] flex flex-col items-start justify-start gap-[37px] max-w-full mq750:gap-[18px]">
        <div className="w-full flex flex-row items-start justify-start py-0 px-0 box-border max-w-full lg:pl-7 lg:pr-7 lg:box-border">
          <div className="flex-1 align-items-center shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] rounded-xl bg-darkorange-200 flex flex-row flex-wrap items-start justify-start py-[30px] px-12 box-border gap-[60px] min-h-[140px] max-w-full lg:gap-[30px] lg:pl-6 lg:pr-6 lg:box-border mq750:gap-[15px]">
            <div className="h-[140px] w-[1086px] relative shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] rounded-xl bg-darkorange-200 hidden max-w-full" />
            <div className="flex-1 flex flex-col items-start justify-start gap-[11px] min-w-[217px]">
              <div className="relative text-base font-dm-sans text-white text-left inline-block min-w-[97px] z-[1]">
                Search Event
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                <input
                  id="eventName"
                  className="w-full placeholder-white [border:none] [outline:none] inline-block font-dm-sans text-3xl bg-[transparent] h-[29px] relative font-bold text-white text-left p-0 z-[1] mq450:text-lg"
                  placeholder="Event Name"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={formData.eventName}
                  autoComplete="off"
                />
                {showSuggestions && (
                  <ul className="list-group absolute mt-5 z-10 max-h-[300px] overflow-y-scroll suggestion-list">
                    {suggestions.map((suggestion, index) => (
                      <li className="list-group-item cursor-pointer" key={suggestion + index} onClick={() => { handleSuggestionClick(suggestion); }}>
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-sandybrown" />
              </div>
            </div>
            <div className="h-[140px] w-[1086px] relative shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] rounded-xl bg-darkorange-200 hidden max-w-full" />
            <div className="flex-1 flex flex-col items-start justify-start gap-[11px] min-w-[217px]">
              <div className="relative text-base font-dm-sans text-white text-left inline-block min-w-[97px] z-[1]">
                Search Host
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                <input
                  id="host"
                  className="w-full placeholder-white [border:none] [outline:none] inline-block font-dm-sans text-3xl bg-[transparent] h-[29px] relative font-bold text-white text-left p-0 z-[1] mq450:text-lg"
                  placeholder="Host Name"
                  type="text"
                  onChange={handleChange}
                  value={formData.host}
                  autoComplete="off"
                />
                <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-sandybrown" />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[11px] min-w-[217px]">
              <div className="relative text-base font-dm-sans text-white text-left inline-block min-w-[97px] z-[1]">
                Place
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                <input
                  id="address"
                  className="w-full placeholder-white [border:none] [outline:none] inline-block font-dm-sans text-3xl bg-[transparent] h-[29px] relative font-bold text-white text-left p-0 z-[1] mq450:text-lg"
                  placeholder="Event Address"
                  type="text"
                  onChange={handleChange}
                  value={formData.address}
                  autoComplete="off"
                />
                <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-sandybrown" />
              </div>
            </div>
            <div className="h-[140px] w-[1086px] relative shadow-[0px_10px_50px_rgba(61,_55,_241,_0.25)] rounded-xl bg-darkorange-200 hidden max-w-full" />
            <div className="flex-1 flex flex-col items-start justify-start gap-[11px] min-w-[217px]">
              <div className="relative text-base font-dm-sans text-white text-left inline-block min-w-[97px] z-[1]">
                Date
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                <input
                  id="startTime"
                  className="w-full [border:none] [outline:none] inline-block font-dm-sans text-2xl bg-[transparent] h-[29px] relative font-bold text-white text-left p-0 z-[1] mq450:text-lg"
                  placeholder="Event Time"
                  type="date"
                  onChange={handleChange}
                  value={formData.startTime}
                  min={new Date().toISOString().slice(0, 10)}
                />
                <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-sandybrown" />
              </div>
            </div>
            <Button
              title="Search"
              className="h-[44px] flex-1"
              disableElevation
              variant="outlined"
              sx={{
                backgroundColor: "white",
                textTransform: "none",
                color: "#d26600",
                fontSize: "1rem",
                borderColor: "#d26600",
                borderRadius: "50px",
                "&:hover": { borderColor: "#d26600", backgroundColor: "whitesmoke" },
                height: 33,
              }}
              onClick={handleSearch}
            >
              <SearchIcon fontSize="large" /> 
              {/* Submit */}
            </Button>
          </div>
        </div>
        {/* <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px]">
          <div className="w-[255px] flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border mq1050:w-0">
            <div className="self-stretch flex flex-row items-start justify-start gap-[23px] mq1050:hidden">
              <Button
                className="h-[33px] flex-1"
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#d26600",
                  fontSize: "14",
                  borderColor: "#d26600",
                  borderRadius: "50px",
                  "&:hover": { borderColor: "#d26600" },
                  height: 33,
                }}
              >
                Home
              </Button>
              <Button
                className="h-[33px] flex-1"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "14",
                  background: "#d26600",
                  border: "#f5f5f5 solid 1px",
                  borderRadius: "50px",
                  "&:hover": { background: "#d26600" },
                  height: 33,
                }}
              >
                Events
              </Button>
            </div>
          </div>
          <div className="w-[544px] flex flex-row items-start justify-start gap-[20px] max-w-full">
            <div className="flex-1 rounded-31xl bg-bisque flex flex-row items-start justify-between py-3.5 px-[25px] gap-[20px]">
              <div className="h-[46px] w-[168px] relative rounded-31xl bg-bisque hidden" />
              <div className="relative text-sm font-medium font-dm-sans text-darkorange-200 text-left inline-block min-w-[68px] z-[1]">
                Weekdays
              </div>
              <div className="flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0">
                <img
                  className="w-2.5 h-[5px] relative z-[2]"
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </div>
            <div className="flex-1 rounded-31xl bg-bisque flex flex-row items-start justify-between py-3.5 px-[25px] gap-[20px]">
              <div className="h-[46px] w-[168px] relative rounded-31xl bg-bisque hidden" />
              <div className="relative text-sm font-medium font-dm-sans text-darkorange-200 text-left inline-block min-w-[74px] whitespace-nowrap z-[1]">
                Event Type
              </div>
              <div className="flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0">
                <img
                  className="w-2.5 h-[5px] relative z-[2]"
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </div>
            <div className="rounded-31xl bg-bisque flex flex-row items-start justify-start py-3.5 px-[25px] gap-[17px]">
              <div className="h-[46px] w-[168px] relative rounded-31xl bg-bisque hidden" />
              <div className="relative text-sm font-medium font-dm-sans text-darkorange-200 text-left inline-block min-w-[91px] whitespace-nowrap z-[1]">
                Any Category
              </div>
              <div className="flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0">
                <img
                  className="w-2.5 h-[5px] relative z-[2]"
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </div>
          </div>
        </div> */}
      </form>
    </section>
  );
};

SearchAndFilters.propTypes = {
  className: PropTypes.string,
};

export default SearchAndFilters;
