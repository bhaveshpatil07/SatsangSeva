import { useEffect, useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Importing the arrow icon
import GroupComponent2 from "./GroupComponent2";
import GroupComponent1 from "./GroupComponent1";
import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";
import axios from "axios";
import '../Csss/EventListing.css'
const EventListing = ({ className = "" }) => {
  const url = process.env.REACT_APP_BACKEND;
  const [searchTopAnchorEl, setSearchTopAnchorEl] = useState(null);
  const [showDays, setShowDays] = useState(false); // State to toggle days display
  const searchTopOpen = Boolean(searchTopAnchorEl);
  const [events, setEvents] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState(null);
  const [visibleEvents, setVisibleEvents] = useState(9);
  const [hasMoreEvents, setHasMoreEvents] = useState(true);

  const handleSearchTopClick = (event) => {
    setSearchTopAnchorEl(event.currentTarget);
    setShowDays(!showDays); // Toggle days display
  };

  const handleSearchTopClose = () => {
    setSearchTopAnchorEl(null);
    setShowDays(false); // Close days display
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    await axios.get(url + "/events").then((resp) => {
      // console.log(resp.data.events);
      setEvents(resp.data.events);
      setFilteredEvents(resp.data.events);
    }).catch((e) => {
      console.log("Error in fetching Events: " + e);
    })
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    if (!selectedCategory.length > 0) {
      setEvents(filteredEvents);
      setVisibleEvents(9);
      setHasMoreEvents(filteredEvents.length>9);
    } else {
      const result = filteredEvents.filter((event) => event.eventCategory === selectedCategory);
      setEvents(result);
      setVisibleEvents(9);
      setHasMoreEvents(result.length>9);
    }
  };

  const handleLoadMore = () => {
    const newVisibleEvents = visibleEvents + 9;
    setVisibleEvents(newVisibleEvents);
    setHasMoreEvents(events.length > newVisibleEvents);
  };

  return (
    <section
      id="upcomingEvents"
      className={`w-full flex flex-col items-center py-0 px-5 box-border max-w-full shrink-0 text-left text-21xl text-goldenrod font-montserrat ${className}`}
    >
      <div
        className="w-full max-w-[1086px] flex flex-col items-center justify-between mq750:!pt-5"
        data-scroll-to="upcomingEventsContainer"
        style={{ minHeight: "25rem", paddingTop: "4.5rem" }}
      >
        <div className="w-full pb-5 flex flex-row items-center justify-between max-w-full gap-[10px] mq1050:flex-wrap">
          <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block text-center max-w-full mq1050:text-13xl mq450:text-5xl">
            Upcoming Events
          </h1>

          {/* select start  */}
          <div className="w-[544px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-full text-sm text-darkorange-200 font-dm-sans">
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px] mq750:flex-wrap">
              <div className="h-[46px] flex-1 min-w-[109px] relative">
                <select
                  aria-controls="menu-undefined"
                  aria-haspopup="true"
                  aria-expanded={searchTopOpen ? "true" : undefined}
                  onClick={handleSearchTopClick}
                  className="w-full h-[46px] bg-[#ffe6c5] rounded-full text-[#ff5f17] font-normal text-base flex items-center justify-center cursor-pointer appearance-none pr-8 mega"
                  style={{ padding: '0 1rem', lineHeight: '1.5rem' }}
                >
                  <option value="allDays">All Days</option>
                  <option value="monday">Monday</option>
                  <option value="tuesday">Tuesday</option>
                  <option value="wednesday">Wednesday</option>
                  <option value="thursday">Thursday</option>
                  <option value="friday">Friday</option>
                  <option value="saturday">Saturday</option>
                  <option value="sunday">Sunday</option>
                </select>
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">

                  <svg className="w-4 h-4 text-[#ff5f17]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>

              <div className="h-[46px] flex-1 min-w-[109px] relative">
                <select
                  aria-controls="menu-undefined"
                  aria-haspopup="true"
                  aria-expanded={searchTopOpen ? "true" : undefined}
                  onClick={handleSearchTopClick}
                  className="w-full h-[46px] bg-[#ffe6c5] rounded-full text-[#ff5f17] font-normal text-base flex items-center justify-center cursor-pointer appearance-none pr-8 mega"
                  style={{ padding: '0 1rem', lineHeight: '1.5rem' }}
                >
                  <option value="eventTypes">Event Types</option>
                  <option value="concert">Concert</option>
                  <option value="conference">Conference</option>
                  <option value="workshop">Workshop</option>
                  <option value="seminar">Seminar</option>
                </select>
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-[#ff5f17]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>

              <div className="h-[46px] flex-1 min-w-[109px] relative">
                <select
                  aria-controls="menu-undefined"
                  aria-haspopup="true"
                  aria-expanded={searchTopOpen ? "true" : undefined}
                  onChange={handleCategoryChange}
                  className="w-full h-[46px] bg-[#ffe6c5] rounded-full text-[#ff5f17] font-normal text-base flex items-center justify-center cursor-pointer appearance-none pr-8 mega"
                  style={{ padding: '0 1rem', lineHeight: '1.5rem' }}
                >
                  <option value="">Any Category</option>
                  <option value="Satsang">Satsang</option>
                  <option value="Bhajan">Bhajan</option>
                  <option value="Samaroh">Samaroh</option>
                  <option value="Langar">Langar</option>
                  <option value="Other">Other</option>
                </select>
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-[#ff5f17]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* select end  */}
        </div>

        {events &&
          <>
            <div className="w-full flex flex-wrap justify-center gap-[62.5px] max-w-full text-center text-xs-4 text-orangered font-dm-sans lg:gap-[31px] mq750:gap-[16px]">
              <div className="flex pb-5 flex-wrap w-full gap-[28.5px] justify-center">
                {events.slice(0, visibleEvents).map((e) => (
                  <GroupComponent2 key={e._id}
                    eventCardImage={e.eventPoster ? `${e.eventPoster}` : "/rectangle-12-1@2x.png"}
                    event={e}
                    title={e.eventName}
                    date={e.startDate}
                    endDate={e.endDate}
                    address={e.eventAddress}
                    className="rounded-[20px] shadow-lg hover:scale-95 transition-transform"
                  />
                ))}
              </div>
            </div>
          </>}
        <div className="w-full flex flex-col items-center justify-center gap-[62.5px] max-w-full text-center text-xs-4 text-orangered font-dm-sans lg:gap-[31px] mq750:gap-[16px]">
          {hasMoreEvents && (
            <div className="w-[1038px] h-[60px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <Button
                className="self-stretch w-[182px] border-[#ff5f17] text-[#ff5f17] rounded-full text-lg transition-all duration-200 ease-in-out hover:border-[#ff5f17] hover:shadow-md active:shadow-sm active:scale-95"
                variant="outlined"
                onClick={handleLoadMore} 
              >
                Load More
              </Button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

EventListing.propTypes = {
  className: PropTypes.string,
};

export default EventListing;
