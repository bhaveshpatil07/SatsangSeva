import { useEffect, useState } from "react";
import { Routes, Route, useNavigationType, useLocation, } from "react-router-dom";
import FinalDesign from "./pages/FinalDesign";
import LiveEvent from "./pages/LiveEvent";
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
import PublicProfile from "./pages/PublicProfile";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import AddBlog from "./pages/AddBlog";
import Blogs from "./pages/Blogs";
import AdminPage from "./admin/AdminPage";
import AllProducts from "./admin/AllProducts";
import AddProduct from "./admin/AddProduct";
import Orders from "./admin/Orders";
import UserEvents from "./admin/UserEvents";
import Updateform from "./admin/Updateform";
import Approve from "./admin/Approve";
import Blog from "./admin/Blog";
import AdminLayout from "./admin/AdminLayout";
import AdminLogin from "./admin/AdminLogin";
import GoogleTranslate from "./components/GoogleTranslate";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const [admin, setAdmin] = useState(false);

  const handleAdmin = (id) => {
    if (id === process.env.REACT_APP_ADMIN_KEY) {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  }

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
      <GoogleTranslate />
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
        <Route path="/blog" element={<Blogs />} />
        {/* <Route path="/nearby" element={<NearBy />} /> */}
        {/* <Route path="/upcard" element={<Upcard />} /> */}
        {/* <Route path="/live" element={<LiveEvent />} /> */}
        <Route path="*" element={<LogIn />} />

        <Route path="/addblog" element={<AddBlog />} />

        <Route path="/admin" element={<AdminLayout setAdmin={handleAdmin} />}>
          {!admin ?
            <>
              <Route path="" element={<AdminLogin setAdmin={handleAdmin} />} />
              <Route path="*" element={<AdminLogin setAdmin={handleAdmin} />} />
            </>
            :
            <>
              <Route path="" element={<AdminPage />} />
              <Route path="allproduct/:id/:name" element={<AllProducts />} />
              <Route path="addproduct" element={<AddProduct />} />
              <Route path="orders" element={<Orders />} />
              {/* <Route path="coupon" element={<Coupon />} /> */}
              {/* <Route path="categorie" element={<Categories />} /> */}
              {/* <Route path="brands" element={<Brands />} /> */}
              {/* <Route path="orderdetails" element={<OrderDetails />} /> */}
              <Route path="userevents/:userId" element={<UserEvents />} />
              <Route path="updateform" element={<Updateform />} />
              <Route path="approve" element={<Approve />} />
              <Route path="blog" element={<Blog />} />
              <Route path="createblog" element={<AddBlog />} />
            </>

          }

        </Route>
      </Routes>

    </>

  );
}
export default App;
