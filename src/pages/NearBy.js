import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import FirstFold1 from '../components/FirstFold1';
import GroupComponent2 from '../components/GroupComponent2';
import Loader from '../components/Loader';

function NearBy() {
    const url = process.env.REACT_APP_BACKEND;

    //Get Location
    const [loading, setLoading] = useState(false);
    const [position, setPosition] = useState({ latitude: null, longitude: null });
    const [loc, setLoc] = useState(null);
    const [events, setEvents] = useState(null);
    const [range, setRange] = useState(180);
    const [pincode, setPincode] = useState(411037);

    useEffect(() => {
        if ("geolocation" in navigator) {
            const geoOptions = {
                enableHighAccuracy: true,
                maximumAge: 0,
                timeout: 10000,
            };

            navigator.geolocation.getCurrentPosition(
                function (position) {
                    //   console.log(position);
                    setPosition({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                function (error) {
                    console.error(error);
                },
                geoOptions
            );
        } else {
            console.log("Geolocation is not available in your browser.");
        }
    }, []);

    useEffect(() => {
        if (position.latitude && position.longitude) {
            const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.latitude}&lon=${position.longitude}&addressdetails=1&zoom=18`;
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setPincode(data.address.postcode);
                    // console.log(data.display_name);
                    setLoc(data.display_name);
                })
                .catch((error) => console.error(error));

            console.log(position.longitude + " " + position.latitude);
            fetchNearBy();
        }
    }, [position]);

    const fetchNearBy = async () => {
        setLoading(true);
        await axios.get(url+"/event/nearby?range=" + range + "&long=" + position.longitude + "&lat=" + position.latitude).then((resp) => {
            setEvents(resp.data.events)
        }).catch((e) => {
            console.log(e);
            alert("No Events Found");
            setEvents(null);
        }).finally(() => {
            setLoading(false);
        });
    }

    const updatePincode = async () => {
        setLoading(true);
        if(pincode.length!==6){
            return alert("Invalid Pincode");
        }
        await axios.get(`https://nominatim.openstreetmap.org/search.php?q=${pincode}&countrycodes=IN&format=jsonv2`).then((resp) => {
            setPosition({
                latitude: resp.data[0].lat,
                longitude: resp.data[0].lon,
            });
        }).catch((e) => {
            console.log(e);
        }).finally(() => {
            setLoading(false);
        });
    }
    //get Location END
    return (
        <div style={{ marginTop: "-5rem" }}>
            <FirstFold1 />
            {loading && <Loader />}
            <div className="container gap-0 min-h-[20rem]">
                <h1>Near By Events</h1>
                <h5 className='text-center' style={{maxWidth: "80%"}}>Location: <span style={{ color: "#D26600" }}>{loc}</span></h5>
                <div className="flex items-end justify-center gap-5">
                    <div className='flex items-end justify-center gap-5'>
                        <span className=''>
                            <label htmlFor="pincode">Edit Pincode:</label>
                            <input className='form-control' type="number" name="pincode" id="pincode" value={pincode} onChange={(e) => { setPincode(e.target.value); }} />
                        </span>
                        <button className='btn btn-outline-success' onClick={updatePincode} type="submit">Update</button>
                    </div>
                    <div className='flex items-end justify-center gap-5'>
                        <span className=''>
                            <label htmlFor="range">Range in KM:</label>
                            <input className='form-control' type="number" name="range" id="range" value={range} onChange={(e) => { setRange(e.target.value); }} min={50} />
                        </span>
                        <button className='btn btn-outline-success' onClick={fetchNearBy} type="submit" disabled={!loc}>Fetch</button>
                    </div>
                </div>
                <div className="w-full flex flex-wrap justify-center gap-[62.5px] max-w-full text-center text-xs-4 text-orangered font-dm-sans lg:gap-[31px] mq750:gap-[16px]">
                    <div className="flex p-5 flex-wrap w-full gap-[28.5px] justify-center">
                        {events && events.map((e) => (
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
            </div>
            <Footer />
        </div>
    )
}

export default NearBy