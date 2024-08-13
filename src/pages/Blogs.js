import React, { useEffect, useState } from 'react'
import FirstFold1 from '../components/FirstFold1';
import Loader from '../components/Loader';
import FrameComponent4 from '../components/FrameComponent4';
import Footer from '../components/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Blogs() {
    const url = process.env.REACT_APP_BACKEND;
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const blogId = queryParams.get('q');
        if (blogId) {
            setLoading(true);
            fetchBlog(blogId);
        } else {
            return navigate('/');
        }
    }, []);

    useEffect(() => {
        setTimeout(() => {
          const windowHeight = window.innerHeight;
          const scrollPosition = windowHeight * 0.6;
          window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
        }, 100);
      }, [location]);

    const fetchBlog = async (id) => {
        try {
            await axios.get(url + "/admin/blog/" + id).then((resp) => {
                setBlog(resp.data.blog);
            }).catch((e) => {
                console.log("Error in Fetching Blog: " + e);
                navigate('/');
            }).finally(() => {
                setLoading(false);
            });
        } catch (e) {
            console.log("Error in Fetching Blog: " + e);
            setLoading(false);
            navigate('/');
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        let result = date.toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            month: 'long',
            day: 'numeric',
            year: "2-digit",
        });
        return result.replace(" ", ", ");
    };

    return (
        <div className='relative overflow-hidden' style={{ marginTop: "-5rem" }}>
            <FirstFold1 />
            {loading && <Loader />}
            <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start gap-[25px] leading-[normal] tracking-[normal]">
                <FrameComponent4 ytLink={"404"} imgLinks={(blog && blog.images) ? blog.images : ["/rectangle-12-1@2x.png"]} />
                <div className="container gap-3 items-start">
                    <div className="px-4 mq750:!px-0">
                        <h1 className='text-darkorange-200 px-4 mq750:!px-0'>{blog?.title}</h1>
                        <h5 className='px-4 mq750:!px-0'>{blog ? `${formatDate(blog.createdAt)} - SatsangSeva` : "15, August 24 - SatsangSeva"}</h5>
                    </div>
                    <p className='px-5 text-justify mq750:!px-0'>{blog?.content}</p>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Blogs