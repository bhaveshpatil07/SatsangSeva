import Main1 from "../components/Main1";
import SearchAndFilters from "../components/SearchAndFilters";
import EventList from "../components/EventList";
import EventListHeader from "../components/EventListHeader";
import { useEffect, useState } from "react";
import FirstFold1 from "../components/FirstFold1";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SearchBar = () => {
  const url = process.env.REACT_APP_BACKEND;

  const [data, setData] = useState(null);
  const handleSearchDataChange = (newData) => {
    setData(newData);
  };

  const location = useLocation();
  
  useEffect(() => {
    fetchEvents();
    setTimeout(() => {
      const windowHeight = window.innerHeight;
      const scrollPosition = windowHeight * 0.55;
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }, 100);
  }, [location]);

  const fetchEvents = async () => {
    await axios.get(url + "/events").then((resp) => {
      // console.log(resp.data.events);
      setData(resp.data.events);
      // setFilteredEvents(resp.data.events);
    }).catch((e) => {
      console.log("Error in fetching Events: " + e);
    })
  };
  
  return (
    <div style={{marginTop: "-5rem"}} className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start py-0 px-px box-border leading-[normal] tracking-[normal] mq750:gap-[18px]">
      <FirstFold1 />
      {/* <section className="w-full h-[175px] absolute !m-[0] right-[0px] bottom-[517px] left-[0px] [background:linear-gradient(0deg,_#fff,_rgba(255,_255,_255,_0))] z-[1]" /> */}
      <SearchAndFilters handleSearchDataChange={handleSearchDataChange}/>
      <EventList data={data}/>
      <Footer />
    </div>
  );
};

export default SearchBar;
