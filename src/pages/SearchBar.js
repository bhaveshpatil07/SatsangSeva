import Main1 from "../components/Main1";
import SearchAndFilters from "../components/SearchAndFilters";
import EventList from "../components/EventList";
import EventListHeader from "../components/EventListHeader";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const [data, setData] = useState(null);
  const handleSearchDataChange = (newData) => {
    setData(newData);
  };
  
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start py-0 px-px box-border leading-[normal] tracking-[normal] mq750:gap-[18px]">
      <Main1 />
      {/* <section className="w-full h-[175px] absolute !m-[0] right-[0px] bottom-[517px] left-[0px] [background:linear-gradient(0deg,_#fff,_rgba(255,_255,_255,_0))] z-[1]" /> */}
      <SearchAndFilters handleSearchDataChange={handleSearchDataChange}/>
      <EventList data={data}/>
      <EventListHeader />
    </div>
  );
};

export default SearchBar;
