import { useState, useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import FirstFold1 from "../components/FirstFold1";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";
import Select from "react-select";
import { Country, State, City } from "country-state-city";
import { useDropzone } from "react-dropzone";
import Loader from "../components/Loader";

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

const EventListing1 = () => {
  const url = process.env.REACT_APP_BACKEND;
  const navigate = useNavigate();
  const [geoCoordinates, setGeoCoordinates] = useState([]);
  const [duration, setDuration] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(Country.getCountryByCode('IN'));
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const eventData = location.state?.eventData;

  const [formValues, setFormValues] = useState({
    eventName: eventData?.eventName || '',
    eventLinks: eventData?.eventLink || '',
    eventCategory: eventData?.eventCategory || '',
    eventDesc: eventData?.eventDesc || '',
    eventPrice: eventData?.eventPrice || '0',
    eventImages: null,
    eventLanguage: eventData?.eventLang || '',
    eventPerformerName: eventData?.performerName || '',
    expectedAttendees: eventData?.noOfAttendees || '50-250',
    hostName: eventData?.hostName || '',
    hostContactNumber: eventData?.hostWhatsapp || '',
    sponsorName: eventData?.sponserName || '',
    location: eventData?.location || '',
    addressLine1: eventData?.eventAddress || '',
    addressLine2: '',
    country: 'India',
    state: '',
    city: '',
    pinCode: '',
    startDate: eventData.startDate ? new Date(eventData.startDate).toISOString().slice(0, 16) : '',
    endDate: eventData.startDate ? new Date(eventData.endDate).toISOString().slice(0, 16) : '',
  });

  useEffect(() => {
    if (formValues.startDate !== "" && formValues.endDate !== "") {
      calculateDuration();
    }
  }, [formValues.startDate, formValues.endDate]);

  // useEffect(() => {
  //   if (formValues.pinCode.length === 6) {
  //     fetchGeoCodes();
  //   }
  // }, [formValues.pinCode]);

  // const fetchGeoCodes = async () => {
  //   await axios.get(`https://nominatim.openstreetmap.org/search.php?q=${formValues.pinCode}&countrycodes=In&format=geojson`)
  //     .then((resp) => {
  //       setGeoCoordinates(resp.data.features[0].geometry.coordinates);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }

  const fetchCoordinates = async (address) => {
    try {
      const apiKey = process.env.REACT_APP_GMAP_KEY;
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;
      const resp = await axios.get(url);
      // console.log(resp);

      if (resp.data.status === 'OK') {
        const coordinates = resp.data.results[0].geometry.location;
        setGeoCoordinates([coordinates.lng, coordinates.lat]);
      }
    } catch (error) {
      console.error(error);
      return 404;
    }
    return 200;
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  function calculateDuration() {
    const startDate = new Date(formValues.startDate);
    const endDate = new Date(formValues.endDate);

    const duration = endDate.getTime() - startDate.getTime();

    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));

    let durationText = `${hours} hours, ${minutes} minutes long event.`;
    if (days > 0) {
      durationText = days + " days, " + durationText;
    }
    setDuration(durationText);
  }

  const handleSubmit = async (e) => {
    setLoading(true);
    const startDateObj = new Date(formValues.startDate);
    const endDateObj = new Date(formValues.endDate);

    if (startDateObj >= endDateObj) {
      setLoading(false);
      return alert('Start date is equal or after End date');
    }
    let newData = {
      eventName: formValues.eventName,
      eventCategory: formValues.eventCategory,
      eventDesc: formValues.eventDesc,
      eventPrice: formValues.eventPrice,
      eventLang: formValues.eventLanguage,
      noOfAttendees: formValues.expectedAttendees,
      performerName: formValues.eventPerformerName,
      hostName: formValues.hostName,
      hostWhatsapp: formValues.hostContactNumber,
      sponserName: formValues.sponsorName,
      eventLink: formValues.eventLinks,
      location: formValues.location,
      eventAddress: formValues.addressLine1,
      startDate: formValues.startDate,
      endDate: formValues.endDate
    };
    const error = validateEventInputs(newData);
    if (!error) {
      if (eventData.eventAddress !== newData.eventAddress) {
        const result = await fetchCoordinates(newData.eventAddress);
        if (result === 200) {
          newData.geoCoordinates = geoCoordinates;
        } else {
          return alert("Error in Fetching GeoCoordinates. Try Again");
        }
      }

      const headers = {
        Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
        'Content-Type': 'multipart/form-data',
      };
      const formData = new FormData();
      formData.append('eventData', JSON.stringify(newData));
      if (eventPoster) {
        formData.append('images', eventPoster);
      }
      if (formValues.eventImages) {
        formValues.eventImages.slice(0, 3).forEach((image) => {
          formData.append('images', image);
        });
      }
      await axios.put(url + "/events/" + eventData._id, formData, { headers }).then((resp) => {
        // console.log("Event Updated: " + resp.data);
        alert("Event Successfully Updated!");
        navigate(-1);
      }).catch((e) => {
        console.log(e.response);
        alert("Error in Updating Event: " + e);
      }).finally(() => {
        setLoading(false);
      });
    } else {
      alert("Please enter valid inputs. See console for more info.");
      console.log(error);
      setLoading(false);
    }
  };

  function validateEventInputs(inputs) {
    const errors = {};

    if (!inputs.eventName || typeof inputs.eventName !== 'string' || inputs.eventName.trim() === '') {
      errors.eventName = 'Event name is required and must be a non-empty string';
    }

    if (!inputs.eventCategory || typeof inputs.eventCategory !== 'string' || inputs.eventCategory.trim() === '') {
      errors.eventCategory = 'Event category is required and must be a non-empty string';
    }

    if (!inputs.eventDesc || typeof inputs.eventDesc !== 'string' || inputs.eventDesc.trim() === '') {
      errors.eventDesc = 'Event Description is required and must be a non-empty string';
    }

    if (!inputs.eventPrice || typeof inputs.eventPrice !== 'string' || inputs.eventPrice.trim() === '' || parseInt(inputs.eventPrice, 10) < 0) {
      errors.eventPrice = 'Event Price is required and must be >=0';
    }

    if (!inputs.eventLang || typeof inputs.eventLang !== 'string' || inputs.eventLang.trim() === '') {
      errors.eventLang = 'Event language is required and must be a non-empty string';
    }

    if (!inputs.noOfAttendees || typeof inputs.noOfAttendees !== 'string') {
      errors.noOfAttendees = 'Number of attendees is required and must be a positive integer';
    }

    if (!inputs.performerName || typeof inputs.performerName !== 'string' || inputs.performerName.trim() === '') {
      errors.performerName = 'Performer name is required and must be a non-empty string';
    }

    if (!inputs.hostName || typeof inputs.hostName !== 'string' || inputs.hostName.trim() === '') {
      errors.hostName = 'Host name is required and must be a non-empty string';
    }

    if (!inputs.hostWhatsapp || typeof inputs.hostWhatsapp !== 'string' || inputs.hostWhatsapp.length !== 10) {
      errors.hostWhatsapp = 'Host WhatsApp number must be of 10 Digits';
    }

    if (!inputs.sponserName || typeof inputs.sponserName !== 'string' || inputs.sponserName.trim() === "") {
      errors.sponserName = 'Sponsor name must be a non-empty string';
    }

    if (!inputs.eventLink || typeof inputs.eventLink !== 'string' || !/^(https?:\/\/[^\s]+|na)$/i.test(inputs.eventLink.trim())) {
      errors.eventLink = 'Event link must be a valid URL, Else write NA';
    }

    if (!inputs.location || typeof inputs.location !== 'string' || inputs.location.trim() === '') {
      errors.location = 'Location is required and must be a non-empty string';
    }

    if (!inputs.eventAddress || typeof inputs.eventAddress !== 'string' || inputs.eventAddress.trim() === '') {
      errors.eventAddress = 'Event address is required and must be a non-empty string';
    }

    if (!inputs.startDate || typeof inputs.startDate !== 'string' || isNaN(Date.parse(inputs.startDate))) {
      errors.startDate = 'Start date is required and must be a valid date';
    }

    if (!inputs.endDate || typeof inputs.endDate !== 'string' || isNaN(Date.parse(inputs.endDate))) {
      errors.endDate = 'End date is required and must be a valid date';
    }

    return Object.keys(errors).length > 0 ? errors : null;
  }

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg, image/png, image/jpg',
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        setEventPoster(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    },
  });

  const [image, setImage] = useState(null);
  const [eventPoster, setEventPoster] = useState(null);

  return (
    <>
      <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-center leading-[normal] tracking-[normal] mq750:gap-[25px]">
        {loading && <Loader />}
        <section id="form" className="self-stretchflex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full text-center text-base text-black font-poppins mq750:!pt-2">
          <div className="w-[1239px] flex flex-col pt-3 items-end justify-start gap-[34px] max-w-full mq750:gap-[17px]">
            <div className="self-stretch flex flex-row items-start justify-center pt-0 pr-5 pl-[23px] box-border max-w-full text-21xl">
              <div className="flex flex-col items-center justify-center max-w-full">
                <div className="flex flex-row items-start justify-start py-0 px-16 mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <h1 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit mq450:text-5xl mq450:leading-[29px] mq1050:text-13xl mq1050:leading-[38px]">
                    <span>{`Update `}</span>
                    <span className="text-tomato">Event</span>
                  </h1>
                </div>
                {/* <div className="relative text-base leading-[24px]">
                  Host your religious event and reach a wider audience
                </div> */}
              </div>
            </div>


            {/* Image upload start */}
            <div className="w-full flex justify-center items-center p-3">
              <div
                {...getRootProps()}
                className="w-full h-[400px] flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl bg-gray-300 cursor-pointer relative overflow-hidden"
              >
                <input {...getInputProps()} className="absolute inset-0 opacity-0" />
                {image ? (
                  <img
                    className="w-full h-full object-contain"
                    src={image}
                    alt="Preview"
                  />
                ) : (
                  <>
                    <p className="text-center text-white">
                      Update Event Poster
                    </p>
                    <img
                      className="w-[150px] h-[150px] object-contain"
                      src="/add-image@2x.png"
                      alt="Add image"
                      loading="lazy"
                    />
                    <p className="text-center mt-2 text-white">
                      Drag and drop an image here, or click to select one.
                    </p>
                  </>
                )}
              </div>
            </div>
            {/* Image upload end*/}

            {/* form start */}
            <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-5 box-border max-w-full text-left text-sm font-roboto">
              <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full">
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-full lg:gap-[91px] mq450:gap-[23px] mq750:gap-[45px]">
                  <div style={{ padding: "0 0 1rem 0" }} className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
                    <div className="w-[584px] mr-3 self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span>{`Event Name `}</span>
                        <span className="text-red">*</span>
                      </div>
                      <input className="form-control" type="text" name="eventName" value={formValues.eventName} onChange={handleInputChange} placeholder="Enter Event Name" />
                    </div>
                    <div className="w-[584px] self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span>{`Event Live Link `}</span>
                        <span className="text-red">*</span>
                      </div>

                      {/* <input type="text" name="eventLinksDisabled" value={formValues.eventLinksDisabled} disabled placeholder="enter-links" /> */}
                      <input className="form-control" type="text" name="eventLinks" value={formValues.eventLinks} onChange={handleInputChange} placeholder="enter-links" />
                    </div>
                  </div>
                  <div style={{ padding: "0 2rem 0 0" }} className="mq750:!px-0 flex-1 flex flex-col items-start justify-start gap-[9px] min-w-[308px] max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span className="whitespace-pre-wrap">{`Event Category  `}</span>
                        <span className="text-red">*</span>
                      </div>
                      <select className="form-control" name="eventCategory" value={formValues.eventCategory} onChange={handleInputChange} >
                        <option value="">Select Category</option>
                        {categories.map((category) => (
                          <option key={category.value} value={category.value}>
                            {category.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
                      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                        <div style={{ minWidth: "50%" }} className="flex-1 flex flex-col items-start justify-start gap-[17px] max-w-full">
                          <div className="self-stretch pr-3 flex flex-col items-start justify-start gap-[4px]">
                            <div className="self-stretch relative leading-[20px] font-medium">
                              <span>{`Event Language `}</span>
                              <span className="text-red">*</span>
                            </div>
                            <select className="form-control" name="eventLanguage" value={formValues.eventLanguage} onChange={handleInputChange}>
                              <option value="">Select Language</option>
                              <option value="Hindi">Hindi</option>
                              <option value="English">English</option>
                              <option value="Hindi & English">Both</option>
                            </select>

                          </div>
                          <div className="self-stretch relative leading-[20px] font-medium">
                            <span>{`Performer Name `}</span>
                            <span className="text-red">*</span>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                          <div className="self-stretch relative leading-[20px] font-medium">
                            <span>{`Expected Attendees`}</span>
                            <span className="text-red">*</span>
                          </div>
                          <div className="">
                            <select className="form-control" name="expectedAttendees" value={formValues.expectedAttendees} onChange={handleInputChange}>
                              <option value="">No Of Attendees</option>
                              <option value="50-250">50 to 250</option>
                              <option value="500-1000">500 to 1000</option>
                              <option value="1000+">1000+</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <input className="form-control" type="text" name="eventPerformerName" value={formValues.eventPerformerName} onChange={handleInputChange} autoComplete="given-name" placeholder="Performer Name1, Name2, ..." required />
                    </div>
                    {/* <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span>{`Add Performer Sponsor `}</span>
                        <span className="text-red">*</span>
                      </div>
                      <div className="self-stretch rounded-md bg-gainsboro-400 box-border flex flex-row items-start justify-start py-1.5 px-[11px] max-w-full text-center border-[1px] border-solid border-gray-600">
                        <div className="flex-1 relative leading-[20px] inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
                          Add
                        </div>
                      </div>
                    </div> */}
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span>{`Host Name `}</span>
                        <span className="text-red">*</span>
                      </div>
                      <input className="form-control" type="text" name="hostName" value={formValues.hostName}
                        onChange={handleInputChange}
                        placeholder="Enter Host Name" />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span>{`Host Contact Number (Whatsapp) `}</span>
                        <span className="text-red">*</span>
                      </div>
                      <input className="form-control" type="text" name="hostContactNumber" value={formValues.hostContactNumber} onChange={handleInputChange} placeholder="Enter contact number" />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span>{`Sponsor Name `}</span>
                        <span className="text-red">*</span>
                      </div>
                      <input className="form-control" type="text" name="sponsorName" value={formValues.sponsorName} onChange={handleInputChange} placeholder="Sponsor Name1, Name2, ..." />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span>{`Event Images (Max 3 Files)`}</span>
                        {/* <span className="text-red">*</span> */}
                      </div>
                      <input className="form-control" type="file" name="eventImages" onChange={(e) => {
                        const files = e.target.files;
                        const newImages = Array.from(files);
                        setFormValues((prevValues) => ({ ...prevValues, eventImages: newImages }));
                      }}
                        accept=".jpeg, .jpg, .png, .webp" placeholder="Select Event Images" multiple />
                    </div>
                    {/* <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span>{`Add Sponsor `}</span>
                        <span className="text-red">*</span>
                      </div>
                      <div className="self-stretch rounded-md bg-gainsboro-400 box-border flex flex-row items-start justify-start py-1.5 px-[11px] max-w-full text-center border-[1px] border-solid border-gray-600">
                        <div className="flex-1 relative leading-[20px] inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
                          Add
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div style={{ padding: "0 2rem 0 0" }} className="mq750:!px-0 flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[308px] max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span>{`Location (Google Map URL) `}</span>
                        <span className="text-red">*</span>
                      </div>
                      <input className="form-control" type="text" name="location" value={formValues.location} onChange={handleInputChange} placeholder="Enter Event Location" />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span>{`Complete Address`}</span>
                        <span className="text-red">*</span>
                      </div>
                      <input className="form-control" type="text" name="addressLine1" value={formValues.addressLine1} onChange={handleInputChange} placeholder="Enter Event Address" />
                    </div>
                    {/* <div className="self-stretch flex flex-col items-start justify-start gap-[4px]"> */}
                    {/* <div className="self-stretch relative leading-[20px] font-medium"> */}
                    {/* <span>{`Address (Line 2)/Landmark `}</span> */}
                    {/* <span className="text-red">*</span> */}
                    {/* </div> */}
                    {/* <input className="form-control" type="text" name="addressLine2" value={formValues.addressLine2} onChange={handleInputChange} placeholder="Enter Event Address Landmark (Optional)" /> */}
                    {/* </div> */}
                    {/* <div className="self-stretch flex flex-col items-start justify-start gap-[4px]"> */}
                    {/* <div className="self-stretch relative leading-[20px] font-medium"> */}
                    {/* <span>{`Country `}</span> */}
                    {/* <span className="text-red">*</span> */}
                    {/* </div> */}
                    {/* <Select */}
                    {/* className="w-full" */}
                    {/* placeholder="Select Event State" */}
                    {/* options={Country.getAllCountries()} */}
                    {/* getOptionLabel={(options) => { */}
                    {/* return options["name"]; */}
                    {/* }} */}
                    {/* getOptionValue={(options) => { */}
                    {/* return options["name"]; */}
                    {/* }} */}
                    {/* value={selectedCountry} */}
                    {/* onChange={(item) => { */}
                    {/* setSelectedCountry(item); */}
                    {/* setFormValues({ */}
                    {/* ...formValues, */}
                    {/* country: item.name, */}
                    {/* state: "", */}
                    {/* city: "", */}
                    {/* }); */}
                    {/* setSelectedCity(null); */}
                    {/* setSelectedState(null); */}
                    {/* }} */}
                    {/* /> */}
                    {/* <input className="form-control" type="text" name="state" value={formValues.state} onChange={handleInputChange} placeholder="Enter Event State" /> */}
                    {/* </div> */}
                    {/* <div className="self-stretch flex flex-col items-start justify-start gap-[4px]"> */}
                    {/* <div className="self-stretch relative leading-[20px] font-medium"> */}
                    {/* <span>{`State `}</span> */}
                    {/* <span className="text-red">*</span> */}
                    {/* </div> */}
                    {/* <Select */}
                    {/* className="w-full" */}
                    {/* placeholder="Select Event State" */}
                    {/* options={State?.getStatesOfCountry(selectedCountry?.isoCode)} */}
                    {/* getOptionLabel={(options) => { */}
                    {/* return options["name"]; */}
                    {/* }} */}
                    {/* getOptionValue={(options) => { */}
                    {/* return options["name"]; */}
                    {/* }} */}
                    {/* value={selectedState} */}
                    {/* onChange={(item) => { */}
                    {/* setSelectedState(item); */}
                    {/* setFormValues({ */}
                    {/* ...formValues, */}
                    {/* state: item.name, */}
                    {/* city: "", */}
                    {/* }); */}
                    {/* setSelectedCity(null); */}
                    {/* }} */}
                    {/* /> */}
                    {/* <input className="form-control" type="text" name="state" value={formValues.state} onChange={handleInputChange} placeholder="Enter Event State" /> */}
                    {/* </div> */}
                    {/* <div className="self-stretch flex flex-col items-start justify-start gap-[4px]"> */}
                    {/* <div className="self-stretch relative leading-[20px] font-medium"> */}
                    {/* <span>{`City `}</span> */}
                    {/* <span className="text-red">*</span> */}
                    {/* </div> */}
                    {/* <Select */}
                    {/* className="w-full" */}
                    {/* placeholder="Select Event City" */}
                    {/* options={City.getCitiesOfState( */}
                    {/* selectedState?.countryCode, */}
                    {/* selectedState?.isoCode */}
                    {/* )} */}
                    {/* getOptionLabel={(options) => { */}
                    {/* return options["name"]; */}
                    {/* }} */}
                    {/* getOptionValue={(options) => { */}
                    {/* return options["name"]; */}
                    {/* }} */}
                    {/* value={selectedCity} */}
                    {/* onChange={(item) => { */}
                    {/* setSelectedCity(item); */}
                    {/* setFormValues({ */}
                    {/* ...formValues, */}
                    {/* city: item.name, */}
                    {/* }); */}
                    {/* }} */}
                    {/* /> */}
                    {/* <input className="form-control" type="text" name="city" value={formValues.city} onChange={handleInputChange} placeholder="Enter Event City" /> */}
                    {/* </div> */}
                    {/* <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span>{`Pin Code `}</span>
                        <span className="text-red">*</span>
                      </div>
                      <input className="form-control" type="number" name="pinCode" value={formValues.pinCode} onChange={handleInputChange} placeholder="Enter Event City Pincode" min={0} />
                    </div> */}
                    <div className="self-stretch flex flex-row items-start justify-start gap-[43.5px] mq750:flex-wrap mq750:gap-[22px]">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[140px]">
                        <div className="self-stretch relative leading-[20px] font-medium">
                          <span>{`Start Date `}</span>
                          <span className="text-red">*</span>
                        </div>
                        <input className="form-control" type="datetime-local" name="startDate" value={formValues.startDate} onChange={handleInputChange} min={new Date().toISOString().slice(0, 16)} />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[43.5px] mq750:flex-wrap mq750:gap-[22px]">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[140px]">
                        <div className="self-stretch relative leading-[20px] font-medium">
                          <span>{`End Date `}</span>
                          <span className="text-red">*</span>
                        </div>
                        <input className="form-control" type="datetime-local" name="endDate" value={formValues.endDate} onChange={handleInputChange} min={formValues.startDate ? new Date(formValues.startDate).toISOString().slice(0, 16) : new Date().toISOString().slice(0, 16)} />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span>{`About Event `}</span>
                        <span className="text-red">*</span>
                      </div>
                      <textarea maxLength={500} className="form-control" type="text" name="eventDesc" value={formValues.eventDesc} onChange={handleInputChange} placeholder="Enter Event Description (Max-500 Characters.)" />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span>{`Event Price (per person)`} &#8377; </span>
                        <span className="text-red">*</span>
                      </div>
                      <input min={0} className="form-control" type="number" name="eventPrice" value={formValues.eventPrice} onChange={handleInputChange} placeholder="Event Price &#x20b9; (Per Person)" />
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* form end */}
            <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[34px] box-border max-w-full text-left text-darkorange-200 font-roboto">
              <div className="w-[426px] flex flex-col items-start justify-start gap-[12px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
                  <div className="relative leading-[24px] font-medium">
                    {duration}
                  </div>
                </div>
                <div onClick={handleSubmit} className="self-stretch flex flex-row items-start justify-start max-w-full cursor-pointer text-white">
                  <div className="flex-1 rounded-lg bg-tomato flex flex-row items-start justify-center py-3 px-5 box-border whitespace-nowrap max-w-full">
                    <div className="relative leading-[24px] font-medium inline-block min-w-[70px]">
                      Update Event
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
};

export default EventListing1;