import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FinalDesign from "./pages/FinalDesign";
import LiveEvent from "./pages/LiveEvent";
import PerticularEventB from "./pages/PerticularEventB";
import LandingDesign from "./pages/LandingDesign";
import PerticularEvent from "./pages/PerticularEvent";
import SpeakersPage from "./pages/SpeakersPage";
import SignIn from "./pages/SignIn";
import EventListing1 from "./pages/EventListing";
import ProfilePage from "./pages/ProfilePage";
import SearchBar from "./pages/SearchBar";
import LogIn from "./pages/LogIn";
import Perticular from "./components/Perticular";
import FrameComponent from "./components/FrameComponent";
import Upcard from "./pages/Upcard";
import WatchLiveWrapper from "./components/WatchLiveWrapper";
import Footer from "./components/Footer";
import PublicProfile from "./pages/PublicProfile";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/live-event":
        title = "";
        metaDescription = "";
        break;
      case "/perticular-event-b":
        title = "";
        metaDescription = "";
        break;
      case "/landing-design-a-2":
        title = "";
        metaDescription = "";
        break;
      case "/perticular-event-a":
        title = "";
        metaDescription = "";
        break;
      case "/categories-page":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in":
        title = "";
        metaDescription = "";
        break;
      case "/event-listing":
        title = "";
        metaDescription = "";
        break;
      case "/profile-page":
        title = "";
        metaDescription = "";
        break;
      case "/search-bar":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (

    <>
      <FrameComponent />
      <Routes>
        <Route path="/" element={<FinalDesign />} />
        <Route path="/live-event" element={<LiveEvent />} />
        {/* <Route path="/perticular-event-b" element={<PerticularEventB />} /> */}
        <Route path="/landing-design-a-2" element={<LandingDesign />} />
        <Route path="/perticular-event-a" element={<PerticularEvent />} />
        <Route path="/categories-page" element={<SpeakersPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/event-listing" element={<EventListing1 />} />
        <Route exact path="/profile-page" element={<ProfilePage />} />
        <Route exact path="/public-profile" element={<PublicProfile />} />
        <Route path="/search-bar" element={<SearchBar />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/perticular" element={<Perticular />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        {/* <Route path="/upcard" element={<Upcard />} /> */}
        {/* <Route path="/live" element={<LiveEvent />} /> */}
        <Route path="*" element={<LogIn />} />
      </Routes>

    </>

  );
}
export default App;
