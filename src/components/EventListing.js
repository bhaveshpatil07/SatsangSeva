import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import GroupComponent2 from "./GroupComponent2";
import PropTypes from "prop-types";
import axios from "axios";
import NotFound from '@mui/icons-material/EventBusy';
import '../Csss/EventListing.css'
import Loader from "./Loader";

const categories = [
  { value: "Satsang & Dharmic Pravachan", label: "Satsang & Dharmic Pravachan" },
  { value: "Bhajan & Kirtan", label: "Bhajan & Kirtan" },
  { value: "Dhram Sabha", label: "Dhram Sabha" },
  { value: "Yoga & Dhyan", label: "Yoga & Dhyan" },
  { value: "Utsav & Celebrations", label: "Utsav & Celebrations" },
  { value: "Adhyatmik Shivir (Spiritual Retreats)", label: "Adhyatmik Shivir (Spiritual Retreats)" },
  { value: "Puja & Anushthan", label: "Puja & Anushthan" },
  { value: "Seva & Charity", label: "Seva & Charity" },
  { value: "Sanskritik Karyakram (Cultural Programs)", label: "Sanskritik Karyakram (Cultural Programs)" },
  { value: "Vividh (Others)", label: "Vividh (Others)" },
];

const EventListing = ({ className = "" }) => {
  const url = process.env.REACT_APP_BACKEND;
  const [searchTopAnchorEl, setSearchTopAnchorEl] = useState(null);
  const [showDays, setShowDays] = useState(false); // State to toggle days display
  const searchTopOpen = Boolean(searchTopAnchorEl);
  const [events, setEvents] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState(null);
  const [visibleEvents, setVisibleEvents] = useState(9);
  const [hasMoreEvents, setHasMoreEvents] = useState(true);
  const [category, setCategory] = useState("");
  const [lang, setLang] = useState("");
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);

  const [position, setPosition] = useState({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    const apiKey = process.env.REACT_APP_GMAP_KEY;
    const url = `https://www.googleapis.com/geolocation/v1/geolocate?key=${apiKey}`;

    const getPosition = async () => {
      if (navigator.geolocation) {
        try {
          const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, {
              enableHighAccuracy: true,
              timeout: 10000,
            });
          });

          return {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
        } catch (error) {
          console.error(error);
        }
      }

      // If browser geolocation API doesn't work or is not supported, fall back to Google Geolocation API
      const response = await axios.post(url, {
        considerIp: true, // Use IP address to estimate location
      });

      return {
        lat: response.data.location.lat,
        lng: response.data.location.lng,
      };
    };

    getPosition().then((position) => {
      localStorage.setItem("loc", [position.lat, position.lng]);
      setPosition({
        latitude: position.lat,
        longitude: position.lng,
      });
      // console.log(position);
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  useEffect(() => {
    if (position.latitude && position.longitude) {
      setLoading(true);
      setTimeout(() => {
        fetchNearBy();
      }, 500);
    }
    // else {
    //   fetchEvents();
    // }
  }, [position]);


  const fetchNearBy = async () => {
    setLoading(true);
    await axios.get(url + "/event/nearby?long=" + position.longitude + "&lat=" + position.latitude).then((resp) => {
      setEvents(resp.data.events);
      setFilteredEvents(resp.data.events);
      // console.log(resp.data);
    }).catch((e) => {
      console.log(e);
      alert("No Events Found");
      setEvents(null);
    }).finally(() => {
      setLoading(false);
    });
  }


  // const fetchEvents = async () => {
  //   await axios.get(url + "/events").then((resp) => {
  //     // console.log(resp.data.events);
  //     if ((!position.latitude && !position.longitude) && !loading && !events) {
  //       setEvents(resp.data.events);
  //       setFilteredEvents(resp.data.events);
  //     }
  //   }).catch((e) => {
  //     console.log("Error in fetching Events: " + e);
  //   })
  // };

  const handleTypeChange = (event) => {
    const selectedfee = event.target.value;
    setType(selectedfee);
    filterEvents(lang, category, selectedfee);
  };

  const handleLangChange = (event) => {
    const selectedLang = event.target.value;
    setLang(selectedLang);
    filterEvents(selectedLang, category, type);
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    filterEvents(lang, selectedCategory, type);
  };

  const filterEvents = (lang, category, priceType) => {
    const langWords = lang.split(/\s+/); // split input string into individual words
    const filtered = filteredEvents.filter((event) => {
      const langMatch = lang === "" || langWords.some((word) => event.eventLang.match(new RegExp(word, 'i')));
      const categoryMatch = category === "" || event.eventCategory === category;
      let priceTypeMatch;

      switch (priceType) {
        case "Free":
          priceTypeMatch = event.eventPrice === "0";
          break;
        case "":
          priceTypeMatch = true;
          break;
        case "Below Rs500":
          priceTypeMatch = parseInt(event.eventPrice, 10) < 500;
          break;
        case "Above Rs500":
          priceTypeMatch = parseInt(event.eventPrice, 10) >= 500;
          break;
        default:
          priceTypeMatch = true; // no filtering by price (default)
      }

      return langMatch && categoryMatch && priceTypeMatch;
    });
    setEvents(filtered);
    setVisibleEvents(9);
    setHasMoreEvents(filtered.length > 9);
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
      {loading && <Loader />}
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
                  onChange={handleTypeChange}
                  value={type}
                  className="w-full h-[46px] bg-[#ffe6c5] rounded-full text-[#ff5f17] font-normal text-base flex items-center justify-center cursor-pointer appearance-none pr-8 mega"
                  style={{ padding: '0 1rem', lineHeight: '1.5rem' }}
                >
                  <option value="">Event Type</option>
                  <option value="Free">Free</option>
                  <option value="Below Rs500">Below &#8377;500</option>
                  <option value="Above Rs500">Above &#8377;500</option>
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
                  onChange={handleLangChange}
                  value={lang}
                  className="w-full h-[46px] bg-[#ffe6c5] rounded-full text-[#ff5f17] font-normal text-base flex items-center justify-center cursor-pointer appearance-none pr-8 mega"
                  style={{ padding: '0 1rem', lineHeight: '1.5rem' }}
                >
                  <option value="">Any Language</option>
                  <option value="Hindi">Hindi</option>
                  <option value="English">English</option>
                  {/* <option value="Hindi & English">Hindi & English</option> */}
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
                  value={category}
                  className="w-full h-[46px] bg-[#ffe6c5] rounded-full text-[#ff5f17] font-normal text-base flex items-center justify-center cursor-pointer appearance-none pr-8 mega"
                  style={{ padding: '0 1rem', lineHeight: '1.5rem' }}
                >
                  <option value="">Any Category</option>
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
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
                    map={true}
                    eventCardImage={e.eventPosters ? `${e.eventPosters[0]}` : "/rectangle-12-1@2x.png"}
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
        {(events && events.length === 0) && <><NotFound fontSize="large" sx={{ color: "#D26600" }} /><h2 className="text-center text-danger pb-5">No Events Found!</h2></>}
      </div>
    </section>
  );
};

EventListing.propTypes = {
  className: PropTypes.string,
};

export default EventListing;
