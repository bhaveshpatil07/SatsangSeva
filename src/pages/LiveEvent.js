import { useLocation, useNavigate } from 'react-router-dom';
import FrameComponent from '../components/FrameComponent';
import FirstFold1 from '../components/FirstFold1';
import Footer from '../components/Footer';
import WatchLiveWrapper from '../components/WatchLiveWrapper';
import FrameComponent2 from '../components/FrameComponent2';
import FrameComponent4 from '../components/FrameComponent4';
import { useEffect, useState } from 'react';
import FrameComponent11 from '../components/FrameComponent11';
import FrameComponent3 from '../components/FrameComponent3';

const LiveEvent = () => {
  const url = process.env.REACT_APP_BACKEND;
  const location = useLocation();
  const navigate = useNavigate();
  const event = location.state?.event; // Retrieve the event data
  const [yt, setYt] = useState("1XPaBQ2OUnk");
  function getYoutubeVideoId(url) {
    // Regular expression pattern to match YouTube video IDs
    const pattern = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  
    // Use the pattern to match the URL and extract the video ID
    const match = url.match(pattern);
  
    // Return the video ID if found, otherwise return an empty string
    return match && match[7].length === 11 ? match[7] : '404';
  }
  useEffect(() => {
    if(!event){
      return navigate('/');
    }
    if(event.eventLink){
      setYt(getYoutubeVideoId(event.eventLink));
    }
  }, [event]);

  useEffect(() => {
    setTimeout(() => {
      const windowHeight = window.innerHeight;
      const scrollPosition = windowHeight * 0.58;
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }, 100);
  }, [location]);
  
  
  return (
    <div className='relative overflow-hidden' style={{marginTop: "-5rem"}}>
      <FirstFold1 />
      <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start gap-[25px] leading-[normal] tracking-[normal]">
        <FrameComponent4 ytLink={yt} imgLink={event.eventPoster?`${event.eventPoster}`:"/rectangle-12-1@2x.png"} />
        <FrameComponent11 event={event}/>
        <FrameComponent3 event={event}
            group227="Book Now!"
            listYourEventInJustOneCli="Book your slot in just one click!"
            // onBookNowClick={()=>{navigate('/listing-event')}} 
          />
        <Footer
          group="/group1.svg"
          facebook="/facebook.svg"
          twitter="/twitter.svg"
          linkedin="/linkedin.svg"
          group1="/group1.svg"
          footerAlignSelf="stretch"
          footerWidth="unset"
        />
      </div>
    </div>
  );
};

export default LiveEvent;
