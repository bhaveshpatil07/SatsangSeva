import { useState, useCallback, useEffect } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import FirstFold1 from "../components/FirstFold1";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer1";
import axios from "axios";
import FrameComponent from "../components/FrameComponent";

import { useDropzone } from "react-dropzone";

const EventListing1 = () => {
  const url = process.env.REACT_APP_BACKEND;
  const navigate = useNavigate();
  const [duration, setDuration] = useState(null);
  const [formValues, setFormValues] = useState({
    eventName: '',
    eventLinks: '',
    eventCategory: '',
    eventLanguage: '',
    eventPerformerName: '',
    expectedAttendees: '',
    hostName: '',
    hostContactNumber: '',
    sponsorName: '',
    location: '',
    addressLine1: '',
    addressLine2: '',
    state: '',
    city: '',
    pinCode: '',
    startDate: '',
    endDate: '',
  });

  useEffect(() => {
    if (formValues.startDate !== "" && formValues.endDate !== "") {
      calculateDuration();
    }
  }, [formValues.startDate, formValues.endDate]);


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
    const token = localStorage.getItem('token');
    if (!token) {
      localStorage.removeItem('userId');
      alert("You have to login First!");
      navigate('/login');
      return;
    }
    const startDateObj = new Date(formValues.startDate);
    const endDateObj = new Date(formValues.endDate);

    if (startDateObj >= endDateObj) {
      return alert('Start date is equal or after End date');
    }
    if (!eventPoster) {
      return alert("Please Select Event Poster.");
    }
    if (formValues.pinCode.length !== 6) {
      return alert("Enter valid PINCODE!");
    }
    const newData = {
      eventName: formValues.eventName,
      eventCategory: formValues.eventCategory,
      eventLang: formValues.eventLanguage,
      noOfAttendees: formValues.expectedAttendees,
      performerName: formValues.eventPerformerName,
      hostName: formValues.hostName,
      hostWhatsapp: formValues.hostContactNumber,
      sponserName: formValues.sponsorName,
      eventLink: formValues.eventLinks,
      location: formValues.location,
      eventAddress: formValues.addressLine1 + ", " + formValues.addressLine2 + ", " + formValues.city + ", " + formValues.state + ", PIN: " + formValues.pinCode,
      startDate: formValues.startDate,
      endDate: formValues.endDate
    };
    const error = validateEventInputs(newData);
    if (!error) {
      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      };
      const formData = new FormData();
      formData.append('eventData', JSON.stringify(newData));
      formData.append('eventPoster', eventPoster);
      await axios.post(url + "/events", formData, { headers }).then((resp) => {
        console.log("Event Created: " + resp.data);
        alert("Event Successfully Created!");
        navigate("/");
      }).catch((e) => {
        console.log(e.response);
        alert("Error in Adding Event: " + e);
      });
    } else {
      alert("Please enter valid inputs. See console for more info.");
      console.log(error);
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

    if (!inputs.eventLang || typeof inputs.eventLang !== 'string' || inputs.eventLang.trim() === '') {
      errors.eventLang = 'Event language is required and must be a non-empty string';
    }

    if (!inputs.noOfAttendees || typeof inputs.noOfAttendees !== 'string' || parseInt(inputs.noOfAttendees, 10) <= 0) {
      errors.noOfAttendees = 'Number of attendees is required and must be a positive integer';
    }

    if (!inputs.performerName || typeof inputs.performerName !== 'string' || inputs.performerName.trim() === '') {
      errors.performerName = 'Performer name is required and must be a non-empty string';
    }

    if (!inputs.hostName || typeof inputs.hostName !== 'string' || inputs.hostName.trim() === '') {
      errors.hostName = 'Host name is required and must be a non-empty string';
    }

    if (inputs.hostWhatsapp && typeof inputs.hostWhatsapp !== 'string' && inputs.hostWhatsapp.length !== 10) {
      errors.hostWhatsapp = 'Host WhatsApp number must be of 10 Digits';
    }

    if (inputs.sponserName && typeof inputs.sponserName !== 'string' && inputs.sponserName.trim() !== "") {
      errors.sponserName = 'Sponsor name must be a non-empty string';
    }

    if (inputs.eventLink && typeof inputs.eventLink !== 'string' && inputs.eventLink.trim() !== "") {
      errors.eventLink = 'Event link must be a valid URL';
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
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div style={{ marginTop: "-5rem" }} className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-center gap-[50px] leading-[normal] tracking-[normal] mq750:gap-[25px]">
        <FirstFold1 />
        <section className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full text-center text-base text-black font-poppins">
          <div className="w-[1239px] flex flex-col items-end justify-start gap-[34px] max-w-full mq750:gap-[17px]">
            <div className="self-stretch flex flex-row items-start justify-center pt-0 pr-5 pl-[23px] box-border max-w-full text-21xl">
              <div className="flex flex-col items-center justify-center max-w-full">
                <div className="flex flex-row items-start justify-start py-0 px-16 mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <h1 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit mq450:text-5xl mq450:leading-[29px] mq1050:text-13xl mq1050:leading-[38px]">
                    <span>{`List Your `}</span>
                    <span className="text-tomato">Event</span>
                  </h1>
                </div>
                <div className="relative text-base leading-[24px]">
                  Host your religious event and reach a wider audience
                </div>
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
                    <img
                      className="w-[150px] h-[150px] object-contain"
                      src="/add-image@2x.png"
                      alt="Add image"
                      loading="lazy"
                    />
                    <p className="text-center mt-2 text-black">
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
                  <div style={{padding: "0 0 1rem 0"}} className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
                    <div className="w-[584px] mr-3 self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span>{`Event Name `}</span>
                        <span className="text-red">*</span>
                      </div>
                      <input className="form-control" type="text" name="eventName" value={formValues.eventName} onChange={handleInputChange} placeholder="enter name" />
                    </div>
                    <div className="w-[584px] self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span>{`Event Links `}</span>
                        <span className="text-red">*</span>
                      </div>

                      {/* <input type="text" name="eventLinksDisabled" value={formValues.eventLinksDisabled} disabled placeholder="enter-links" /> */}
                      <input className="form-control" type="text" name="eventLinks" value={formValues.eventLinks} onChange={handleInputChange} placeholder="enter-links" />
                    </div>
                  </div>
                  <div style={{padding: "0 2rem 0 0"}} className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[308px] max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span className="whitespace-pre-wrap">{`Event Category  `}</span>
                        <span className="text-red">*</span>
                      </div>
                      <select className="form-control" name="eventCategory" value={formValues.eventCategory} onChange={handleInputChange}>
                        <option value="">Select Category</option>
                        <option value="Satsang">Satsang</option>
                        <option value="Bhajan">Bhajan</option>
                        <option value="Samaroh">Samaroh</option>
                        <option value="Langar">Langar</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
                      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                        <div style={{minWidth: "50%"}} className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full">
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
                            <span>{`Event Performer Name `}</span>
                            <span className="text-red">*</span>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                          <div className="self-stretch relative leading-[20px] font-medium">
                            <span>{`Expected Attendees`}</span>
                            <span className="text-red">*</span>
                          </div>
                          <div className="">
                            <input className="form-control" type="number" name="expectedAttendees" value={formValues.expectedAttendees} onChange={handleInputChange} placeholder="enter attendees" />

                          </div>
                        </div>
                      </div>
                      <input className="form-control" type="text" name="eventPerformerName" value={formValues.eventPerformerName} onChange={handleInputChange} autoComplete="given-name" placeholder="Performer Name1, Name2, ..." required />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span>{`Add Performer Sponsor `}</span>
                        <span className="text-red">*</span>
                      </div>
                      <div className="self-stretch rounded-md bg-gainsboro-400 box-border flex flex-row items-start justify-start py-1.5 px-[11px] max-w-full text-center border-[1px] border-solid border-gray-600">
                        <div className="flex-1 relative leading-[20px] inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
                          <button type="submit">Add</button>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span>{`Host Name `}</span>
                        <span className="text-red">*</span>
                      </div>
                      <input className="form-control" type="text" name="hostName" value={formValues.hostName} onChange={handleInputChange} placeholder="Enter Host Name" />
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
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span>{`Add Sponsor `}</span>
                        <span className="text-red">*</span>
                      </div>
                      <div className="self-stretch rounded-md bg-gainsboro-400 box-border flex flex-row items-start justify-start py-1.5 px-[11px] max-w-full text-center border-[1px] border-solid border-gray-600">
                        <div className="flex-1 relative leading-[20px] inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
                          <button>Add</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{padding: "0 2rem 0 0"}} className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[308px] max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span>{`Location (Google Map URL) `}</span>
                        <span className="text-red">*</span>
                      </div>
                      <input className="form-control" type="text" name="location" value={formValues.location} onChange={handleInputChange} placeholder="Enter location" />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span>{`Address (Line 1) `}</span>
                        <span className="text-red">*</span>
                      </div>
                      <input className="form-control" type="text" name="addressLine1" value={formValues.addressLine1} onChange={handleInputChange} placeholder="enter address" />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span>{`Address (Line 2)/Landmark `}</span>
                        <span className="text-red">*</span>
                      </div>
                      <input className="form-control" type="text" name="addressLine2" value={formValues.addressLine2} onChange={handleInputChange} placeholder="enter address" />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span>{`City `}</span>
                        <span className="text-red">*</span>
                      </div>
                      <input className="form-control" type="text" name="city" value={formValues.city} onChange={handleInputChange} placeholder="enter city" />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span>{`State `}</span>
                        <span className="text-red">*</span>
                      </div>
                      <input className="form-control" type="text" name="state" value={formValues.state} onChange={handleInputChange} placeholder="enter state" />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch relative leading-[20px] font-medium">
                        <span>{`Pin Code `}</span>
                        <span className="text-red">*</span>
                      </div>
                      <input className="form-control" type="number" name="pinCode" value={formValues.pinCode} onChange={handleInputChange} placeholder="enter Pincode" />
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[43.5px] mq750:flex-wrap mq750:gap-[22px]">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[140px]">
                        <div className="self-stretch relative leading-[20px] font-medium">
                          <span>{`Start Date `}</span>
                          <span className="text-red">*</span>
                        </div>
                        <input className="form-control" type="datetime-local" name="startDate" value={formValues.startDate} onChange={handleInputChange} />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[43.5px] mq750:flex-wrap mq750:gap-[22px]">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[140px]">
                        <div className="self-stretch relative leading-[20px] font-medium">
                          <span>{`End Date `}</span>
                          <span className="text-red">*</span>
                        </div>
                        <input className="form-control" type="datetime-local" name="endDate" value={formValues.endDate} onChange={handleInputChange} />
                      </div>
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
                      List Event
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch relative text-45xl text-gray-500">
              <div className="top-[0px] left-[0px] box-border w-[1237px] h-px border-t-[1px] border-solid border-gainsboro-400" />
              <h1 className="m-0 top-[17px] left-[39px] text-inherit font-semibold font-inherit inline-block mq450:text-10xl mq1050:text-32xl">{`Sit back and watch your event come to life `}</h1>

            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[39px] pl-[43px] box-border max-w-full text-5xl lg:pl-[21px] lg:box-border">
              <div className="flex-1 flex flex-col items-end justify-start min-h-[105px] max-w-full">
                <h2 className="m-0 self-stretch h-[105px] relative text-inherit font-normal font-inherit inline-block shrink-0 mq450:text-lgi">
                  Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.t
                </h2>
                <div className="w-[1038px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full mt-[-80px] text-left text-xs text-white">

                </div>
              </div>
            </div>
          </div>
        </section>
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
    </LocalizationProvider>
  );
};

export default EventListing1;