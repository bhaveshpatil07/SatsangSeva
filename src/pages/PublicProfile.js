import GroupComponent2 from "../components/GroupComponent2";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import FirstFold1 from "../components/FirstFold1";
import '../Csss/ProfilePage.css';

const PublicProfile = () => {
  const url = process.env.REACT_APP_BACKEND;
  const navigate = useNavigate();
  const location = useLocation();
  const userId = localStorage.getItem("userId");
  const [userData, setUserData] = useState(null);
  const [userEvents, setUserEvents] = useState(null);
  //   const [userBookings, setUserBookings] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const publicUser = queryParams.get('q');
    if (!publicUser || publicUser.length < 5) {
      return navigate('/');
    }
    if (publicUser === userId) {
      navigate("/profile-page");
    } else {
      fetchUserInfo(publicUser);
    }
  }, [userId]);

  useEffect(() => {
    setTimeout(() => {
      const windowHeight = window.innerHeight;
      const scrollPosition = windowHeight * 0.55;
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }, 100);
  }, [location]);

  const fetchUserInfo = async (id) => {
    // await axios.get(url + "/user/bookings/" + id).then((resp) => {
    //   setUserBookings(resp.data.bookings);
    // }).catch((e) => {
    //   alert("Error: " + e);
    // });
    await axios.get(url + "/user/" + id).then((resp) => {
      setUserData(resp.data.user);
    }).catch((e) => {
      alert("Error: " + e);
    });
    await axios.get(url + "/user/events/" + id).then((resp) => {
      // console.log(resp.data.events);
      setUserEvents(resp.data.events);
    }).catch((e) => {
      alert("Error: " + e);
    });
  };

  const handleLogOut = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('userId');
      localStorage.removeItem('token');
      window.location.reload();
      navigate("/login");
    }
  };

  const memberSince = (x) => {
    const date = new Date(x);
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    return ` ${month}, ${year}`;
  }

  return (
    <div style={{ marginTop: "-5rem" }} className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[50px] leading-[normal] tracking-[normal] mq750:gap-[41px] mq450:gap-[20px] ">
      <FirstFold1 />
      <main style={{ width: "100vw" }} className="flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <section className="w-[1256px] flex flex-col items-start justify-start max-w-full text-left text-21xl text-black font-poppins mq750:gap-[18px]">
          <div className="w-[1229px] flex flex-row items-start justify-start py-0 px-3.5 box-border max-w-full text-xs">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq750:!justify-end mq1050:flex-wrap">
              <div className="w-[750px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full">
                <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] mq750:flex-wrap">
                  {userData && userData.profile ? (
                    <img className="profile-icon" src={userData.profile} alt="Profile Image" />
                  ) : (

                    <div className="profile-icon">{userData ? userData.name.charAt(0).toUpperCase() : "..."}</div>
                  )}
                  <div className="w-[650px] flex flex-col gap-2 items-start justify-center min-w-[403px] max-w-full mq750:flex-1 mq750:min-w-full">
                    <div className="flex flex-col items-start justify-start text-lg">
                      <b style={{ fontSize: "2rem" }} className="relative">{userData && userData.name ? userData.name : "Loading..."}</b>
                      <div style={{ fontSize: "1rem", fontWeight: "450" }} className="relative text-sm z-[1]">
                        Member Since: {userData && userData.createdAt ? memberSince(userData.createdAt) : "Loading..."}
                      </div>
                      <div style={{ fontSize: "1rem" }} className="relative text-sm z-[1]">
                        {userData && userData.location ? userData.location : ""}
                      </div>
                    </div>
                    {/* <div style={{ fontSize: "1rem" }} className="relative inline-block min-w-[121px]">
                      Contact: {userData && userData.phoneNumber ? "+91-" + userData.phoneNumber : "+91-Loading..."}
                    </div> */}
                  </div>
                </div>
                <div style={{fontSize: "1rem"}} className="self-stretch relative text-justify pt-5">
                  {(userData && userData.desc) ? <h5>About: </h5> : ""}
                  {(userData && userData.desc) ? userData.desc : ""}
                </div>
              </div>
              <div className="w-28 flex flex-col items-end justify-start gap-[45.6px]">
                <div onClick={() => { navigator.clipboard.writeText(window.location.href); alert("Public Profile URL Copied to Clipboard! ") }} title="Copy Public URL" className="w-[26px] cursor-pointer rounded-8xs box-border flex flex-col items-start justify-start py-[3px] px-1 border-[1px] border-solid border-chocolate">
                  <img
                    className="w-4 h-[14.4px] relative"
                    alt=""
                    src="/vector-6.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="self-stretch flex flex-row items-start justify-end">
                    <div className="relative inline-block min-w-[70px]">
                      Contact On
                    </div>
                  </div>
                  <div className="flex flex-row items-end justify-start gap-[14px]">

                    <div className="flex flex-col items-start justify-start gap-[12px]">
                      <div className="flex flex-row items-start justify-start py-0 px-0.5">
                        <a href={userData ? "tel:+91" + userData.phoneNumber : "#"}>
                          <img
                            className="h-6 w-6 relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/phone.svg"
                          />
                        </a>
                      </div>
                      <a href={userData && userData.social[0] ? userData.social[0].link : null} target="_blank" rel="noopener noreferrer">
                        <img
                          className="w-7 h-7 relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/facebook1.svg"
                        />
                      </a>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[12px]">
                      <a href={userData ? "mailto:" + userData.email : "#"}>
                        <img
                          className="w-7 h-7 relative"
                          loading="lazy"
                          alt=""
                          src="/mail.svg"
                        />
                      </a>
                      <a href={userData && userData.social[2] ? userData.social[2].link : null} target="_blank" rel="noopener noreferrer">
                        <img
                          className="w-7 h-7 relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/twitterx.svg"
                        />
                      </a>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[12px]">
                      <img
                        className="w-[25px] h-7 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/iconsmappin-1.svg"
                      />
                      <a href={userData && userData.social[1] ? userData.social[1].link : null} target="_blank" rel="noopener noreferrer">
                        <img
                          className="w-7 h-7 relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/instagram.svg"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "100vw" }} className=" flex flex-col items-end justify-center pt-0 px-0 box-border gap-[20px] max-w-full lg:gap-[41px] lg:pb-[67px] lg:box-border mq750:gap-[20px] mq750:pb-11 mq750:box-border">
            <div className="self-stretch flex flex-row items-start justify-center max-w-full text-center">
              <div className="w-[854px] flex flex-col items-end justify-start gap-[24px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-center max-w-full">
                  <div className="w-[751px] flex flex-col items-center justify-start gap-[15px] max-w-full">
                    <h1 id="events" className="pt-5 m-0 relative text-inherit leading-[48px] font-bold font-inherit mq1050:text-13xl mq1050:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
                      <span>{userData?.name.split(' ')[0]}'s </span>
                      <span className="text-tomato">Events</span>
                    </h1>
                    {/* <p style={{ fontSize: "1rem" }}>Host your religious event and reach a wider audience</p> */}
                  </div>
                </div>
              </div>
            </div>
            {userEvents &&
              <>
                <div className="w-full flex flex-wrap justify-center gap-[62.5px] max-w-full text-center text-xs-4 text-orangered font-dm-sans lg:gap-[31px] mq750:gap-[16px]">
                  <div className="flex flex-wrap w-full gap-[28.5px] justify-center">
                    {userEvents.map((e, index) => (
                      <GroupComponent2 key={e._id + index}
                        eventCardImage={e.eventPosters ? `${e.eventPosters[0]}` : "/rectangle-12-1@2x.png"}
                        event={e}
                        title={e.eventName}
                        date={e.startDate}
                        endDate={e.endDate}
                        address={e.eventAddress}
                        className="rounded-[20px] shadow-lg hover:scale-95 transition-transform"
                      />
                    ))}
                    {/* <div onClick={() => { navigate("/event-listing") }} style={{ cursor: "pointer" }} className="w-[343px] shadow-[0px_19px_47.38px_rgba(119,_115,_170,_0.1)] rounded-t-[18.95px] rounded-b-[18.95px] flex bg-gainsboro-200 flex-col items-center justify-center pt-[87px] px-[104px] pb-[118.5px] box-border relative gap-[14px] max-w-full text-base text-black mq450:pl-5 mq450:pr-5 mq450:box-border">
                      <div className="flex flex-row items-start justify-start py-0 px-3">
                        <img
                          className="h-24 w-24 relative overflow-hidden shrink-0 z-[1]"
                          loading="lazy"
                          alt=""
                          src="/add-circle.svg"
                        />
                      </div>
                      <b className="relative leading-[19px] inline-block min-w-[120px] z-[1]">
                        Add Your Event!
                      </b>
                    </div> */}
                  </div>
                </div>
              </>}
            {/* {(!userEvents || userEvents.length === 0) && <h1>No Events Created yet!</h1>} */}
            {/* <div className="w-[1086px] flex flex-row items-start justify-between max-w-full gap-[20px] text-goldenrod font-montserrat mq1050:flex-wrap">
              <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq1050:text-13xl mq450:text-5xl">
                Upcoming Events
              </h1>
              <div className="w-[544px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-full text-sm text-darkorange-200 font-dm-sans">
                <div className="self-stretch flex flex-row items-start justify-start gap-[20px] mq750:flex-wrap">
                  <Button
                    className="h-[46px] flex-1 min-w-[109px]"
                    endIcon={
                      <img width="10px" height="5px" src="/vector-1.svg" />
                    }
                    disableElevation
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#f58021",
                      fontSize: "14",
                      background: "#ffe6c5",
                      borderRadius: "50px",
                      "&:hover": { background: "#ffe6c5" },
                      height: 46,
                    }}
                  >
                    Weekdays
                  </Button>
                  <div className="flex-1 rounded-31xl bg-bisque flex flex-row items-start justify-between py-3.5 px-[25px] box-border min-w-[109px] gap-[20px]">
                    <div className="h-[46px] w-[168px] relative rounded-31xl bg-bisque hidden" />
                    <div className="relative font-medium inline-block min-w-[74px] z-[1]">
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
                    <div className="relative font-medium inline-block min-w-[91px] z-[1]">
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
              </div>
            </div>
            <div className="w-[1086px] flex flex-col items-start justify-start gap-[62.5px] max-w-full text-xs-4 text-orangered font-dm-sans lg:gap-[31px] mq750:gap-[16px]">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[28.5px_26.5px] min-h-[698px] max-w-full">
                <div className="w-[343px] shadow-[0px_19px_47.38px_rgba(119,_115,_170,_0.1)] flex flex-col items-start justify-start pt-[87px] px-[104px] pb-[118.5px] box-border relative gap-[14px] max-w-full text-base text-black mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <div className="w-full h-full absolute !m-[0] top-[334.5px] right-[0px] bottom-[-334.5px] left-[0px] rounded-t-[18.95px] rounded-b-[18.95px] bg-gainsboro-200 [transform:_rotate(180deg)] [transform-origin:0_0]" />
                  <div className="flex flex-row items-start justify-start py-0 px-3">
                    <img
                      className="h-24 w-24 relative overflow-hidden shrink-0 z-[1]"
                      loading="lazy"
                      alt=""
                      src="/add-circle.svg"
                    />
                  </div>
                  <b className="relative leading-[19px] inline-block min-w-[120px] z-[1]">
                    Add Your Event
                  </b>
                </div>
              </div>
            </div> */}
          </div>
          {/* <div className="self-stretch flex flex-row items-start justify-end pt-0 px-16 pb-[69.5px] box-border max-w-full text-chocolate font-montserrat lg:pl-8 lg:pr-8 lg:box-border mq1050:pb-[45px] mq1050:box-border mq450:pb-[29px] mq450:box-border">
            <div className="w-[1086px] flex flex-col items-start justify-start gap-[80px] max-w-full lg:gap-[40px] mq750:gap-[20px]">
              <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
                <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq1050:text-13xl mq450:text-5xl">
                  Completed Events
                </h1>
                <div className="w-[544px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-full text-sm text-darkorange-200 font-dm-sans">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[20px] mq750:flex-wrap">
                    <div className="flex-1 rounded-31xl bg-bisque flex flex-row items-start justify-between py-3.5 px-[25px] box-border min-w-[109px] gap-[20px]">
                      <div className="h-[46px] w-[168px] relative rounded-31xl bg-bisque hidden" />
                      <div className="relative font-medium inline-block min-w-[68px] z-[1]">
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
                    <div className="flex-1 rounded-31xl bg-bisque flex flex-row items-start justify-between py-3.5 px-[25px] box-border min-w-[109px] gap-[20px]">
                      <div className="h-[46px] w-[168px] relative rounded-31xl bg-bisque hidden" />
                      <div className="relative font-medium inline-block min-w-[74px] z-[1]">
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
                      <div className="relative font-medium inline-block min-w-[91px] z-[1]">
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
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[28.5px] max-w-full text-xs-4 text-orangered font-dm-sans">
                <div className="self-stretch grid flex-row items-start justify-start gap-[28.5px] max-w-full grid-cols-[repeat(3,_minmax(257px,_1fr))] mq750:grid-cols-[minmax(257px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(257px,_446px))]">
                  <GroupComponent2
                    eventCardImage="/rectangle-12-1@2x.png"
                    aPR="APR"
                    emptyMonth="14"
                    propHeight="334.5px"
                    propMinWidth="unset"
                    propWidth="unset"
                  />
                  <div className="flex flex-col items-start justify-start max-w-full">
                    <img
                      className="self-stretch h-[197.1px] relative rounded-t-[18.95px] rounded-b-none max-w-full overflow-hidden shrink-0 object-cover"
                      loading="lazy"
                      alt=""
                      src="/rectangle-12-2@2x.png"
                    />
                    <div className="self-stretch flex flex-row items-start justify-start pt-[19.9px] pb-[23.5px] pr-5 pl-[22px] relative gap-[21px] mq450:flex-wrap">
                      <div className="h-full w-full absolute !m-[0] top-[137.4px] right-[-343px] bottom-[-137.4px] left-[343px] rounded-t-[18.95px] rounded-b-none bg-white [transform:_rotate(180deg)] [transform-origin:0_0]" />
                      <div className="flex flex-col items-start justify-start pt-[1.9px] px-0 pb-0">
                        <div className="flex flex-col items-start justify-start">
                          <div className="flex flex-row items-start justify-start py-0 pr-2 pl-1">
                            <b className="relative inline-block min-w-[25px] shrink-0 z-[1]">
                              AUG
                            </b>
                          </div>
                          <div className="h-[33.2px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-9xl-4 text-black">
                            <b className="mt-[-3.8px] relative inline-block min-w-[37px] shrink-0 z-[1] mq450:text-4xl">
                              20
                            </b>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[9px] min-w-[157px] text-base text-black">
                        <b className="self-stretch relative leading-[150%] z-[1]">
                          Sadhguru World Tour San Francisco
                        </b>
                        <div className="flex flex-col items-start justify-start gap-[3px] text-2xs font-poppins">
                          <div className="relative font-medium z-[1]">
                            NSP, New Delhi (within 2km)
                          </div>
                          <div className="relative text-xs font-medium whitespace-nowrap z-[1]">
                            Aug 13 • Sun • 10:00am • 2hr
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <GroupComponent1
                    rectangle12="/rectangle-12-3@2x.png"
                    propMinWidth="unset"
                    propWidth="unset"
                  />
                </div>
                <div className="w-[714.5px] flex flex-row flex-wrap items-start justify-start gap-[28.5px] max-w-full text-center">
                  <div className="flex-1 flex flex-col items-start justify-start min-w-[223px] max-w-full">
                    <img
                      className="self-stretch h-[197.1px] relative rounded-t-[18.95px] rounded-b-none max-w-full overflow-hidden shrink-0 object-cover"
                      loading="lazy"
                      alt=""
                      src="/rectangle-12-4@2x.png"
                    />
                    <div className="self-stretch flex flex-row items-start justify-start pt-[20.9px] px-[22px] pb-[22.5px] relative gap-[22.7px]">
                      <div className="h-full w-full absolute !m-[0] top-[137.4px] right-[-343px] bottom-[-137.4px] left-[343px] rounded-t-[18.95px] rounded-b-none bg-white [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]" />
                      <div className="w-[26.6px] flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px">
                          <b className="flex-1 relative inline-block min-w-[25.6px] shrink-0 z-[2]">
                            APR
                          </b>
                        </div>
                        <div className="h-[33.2px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-left text-9xl-4 text-black">
                          <b className="mt-[-3.8px] relative inline-block min-w-[26.3px] shrink-0 z-[3] mq450:text-4xl">
                            14
                          </b>
                        </div>
                      </div>
                      <div className="w-[241.6px] flex flex-col items-start justify-start gap-[9px] text-left text-base text-black">
                        <b className="self-stretch relative leading-[150%] z-[2]">
                          Sadhguru World Tour San Francisco
                        </b>
                        <div className="flex flex-col items-start justify-start gap-[3px] text-2xs font-poppins">
                          <div className="relative font-medium z-[2]">
                            NSP, New Delhi (within 2km)
                          </div>
                          <div className="relative text-xs font-medium whitespace-nowrap z-[2]">
                            Aug 13 • Sun • 10:00am • 2hr
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start min-w-[223px] max-w-full text-left">
                    <img
                      className="self-stretch h-[197.1px] relative rounded-t-[18.95px] rounded-b-none max-w-full overflow-hidden shrink-0 object-cover"
                      loading="lazy"
                      alt=""
                      src="/rectangle-12-5@2x.png"
                    />
                    <div className="self-stretch flex flex-row items-start justify-start pt-[20.9px] pb-[22.5px] pr-5 pl-[22px] relative gap-[21px] mq450:flex-wrap">
                      <div className="h-full w-full absolute !m-[0] top-[137.4px] right-[-343px] bottom-[-137.4px] left-[343px] rounded-t-[18.95px] rounded-b-none bg-white [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]" />
                      <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-row items-start justify-start py-0 pr-2 pl-1">
                          <b className="relative inline-block min-w-[25px] shrink-0 z-[2]">
                            AUG
                          </b>
                        </div>
                        <div className="h-[33.2px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-9xl-4 text-black">
                          <b className="mt-[-3.8px] relative inline-block min-w-[37px] shrink-0 z-[3] mq450:text-4xl">
                            20
                          </b>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[9px] min-w-[157px] text-base text-black">
                        <b className="self-stretch relative leading-[150%] z-[2]">
                          Sadhguru World Tour San Francisco
                        </b>
                        <div className="flex flex-col items-start justify-start gap-[3px] text-2xs font-poppins">
                          <div className="relative font-medium z-[2]">
                            NSP, New Delhi (within 2km)
                          </div>
                          <div className="relative text-xs font-medium whitespace-nowrap z-[2]">
                            Aug 13 • Sun • 10:00am • 2hr
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-5 box-border max-w-full text-center text-45xl text-gray-500">
            <div className="flex-1 flex flex-col items-start justify-start gap-[33.5px] max-w-full mq750:gap-[17px]">
              <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gainsboro-400" />
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[45px] pl-[39px] box-border max-w-full lg:pr-[22px] lg:box-border">
                <h1 className="m-0 flex-1 relative text-inherit font-semibold font-inherit inline-block max-w-full mq1050:text-32xl mq450:text-19xl">{`Sit back and watch your event come to life `}</h1>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[39px] pl-10 box-border max-w-full text-5xl text-black">
                <div className="flex-1 flex flex-col items-end justify-start min-h-[105px] max-w-full">
                  <h2 className="m-0 self-stretch h-[105px] relative text-inherit font-normal font-inherit inline-block shrink-0 mq450:text-lgi">
                    Corem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.t
                  </h2>

                </div>
              </div>
            </div>
          </div> */}
        </section>
      </main>
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
  );
};

export default PublicProfile;
