import React, { useState } from 'react'
import Loader from '../components/Loader';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddBlog() {
    const url = process.env.REACT_APP_BACKEND;
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);
    const [images, setImages] = useState(null);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [blogPoster, setBlogPoster] = useState(null);
    const navigate = useNavigate();

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/jpeg, image/png, image/jpg',
        onDrop: (acceptedFiles) => {
            if (acceptedFiles.length > 0) {
                const file = acceptedFiles[0];
                setBlogPoster(file);
                const reader = new FileReader();
                reader.onloadend = () => {
                    setImage(reader.result);
                };
                reader.readAsDataURL(file);
            }
        },
    });

    const handleSubmit = async () => {
        if (!title || title.trim() === "" || !content || content.trim() === "" || !blogPoster) {
            return alert("Title, Content and Blog Poster is Required.");
        }
        setLoading(true);
        const blogData = {
            title: title,
            content: content,
        }
        const formData = new FormData();
        formData.append('blogData', JSON.stringify(blogData));
        formData.append('images', blogPoster);
        if (images) {
            images.slice(0, 3).forEach((image) => {
                formData.append('images', image);
            });
        }

        await axios.post(url + "/admin/blog", formData).then((resp) => {
            // console.log(resp);
            alert("Blog Created Successfully!");
            setTitle("");
            setContent("");
            setImage(null);
            setImages(null);
            setBlogPoster(null);
            navigate(-1);  //navigate to the /admin/blogs
        }).catch((e) => {
            console.log(e);
            alert("Failed to post blog.");
        }).finally(() => {
            setLoading(false);
        });
    }

    return (
        <div className="w-full relative overflow-hidden flex flex-col items-center justify-center leading-[normal] tracking-[normal] mq750:gap-[25px]">
            {loading && <Loader />}
            <section id="form" className="self-stretchflex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full text-center text-base text-black font-poppins mq750:!pt-2">
                <div className="w-[1239px] flex flex-col pt-3 items-end justify-start gap-[34px] max-w-full mq750:gap-[17px]">
                    <div className="self-stretch flex flex-row items-start justify-center pt-0 pr-5 pl-[23px] box-border max-w-full text-21xl">
                        <div className="flex flex-col items-center justify-center max-w-full">
                            <div className="flex flex-row items-start justify-start py-0 px-16 mq450:pl-5 mq450:pr-5 mq450:box-border">
                                <h1 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit mq450:text-5xl mq450:leading-[29px] mq1050:text-13xl mq1050:leading-[38px]">
                                    <span>{`Create `}</span>
                                    <span className="text-tomato">Blog</span>
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
                                    <p className="text-center text-white">
                                        Blog Poster
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
                    <div className="self-stretch flex flex-row items-center justify-center pt-0 pb-3 box-border max-w-full text-left text-sm font-roboto">
                        <div className="flex-1 flex flex-col items-center justify-center gap-[24px] max-w-full">
                            <div style={{ padding: "0 0 1rem 0" }} className="flex flex-col items-center justify-center max-w-full gap-[20px] mq1050:flex-wrap">
                                <div className="w-[584px] self-stretch flex flex-col items-center justify-center gap-[4px] max-w-full">
                                    <div className="self-stretch relative leading-[20px] font-medium">
                                        <span>{`Blog Title `}</span>
                                        <span className="text-red">*</span>
                                    </div>
                                    <input className="form-control" type="text" name="title" value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder="Enter Blog Title" />
                                </div>
                                <div className="w-[584px] self-stretch flex flex-col items-center justify-center gap-[4px] max-w-full">
                                    <div className="self-stretch relative leading-[20px] font-medium">
                                        <span>{`Blog Content `}</span>
                                        <span className="text-red">*</span>
                                    </div>
                                    <textarea className="form-control" type="text" name="content" value={content} onChange={(e) => { setContent(e.target.value) }} placeholder="Enter Blog Content Here..." style={{ minHeight: "10rem" }} />
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                                    <div className="self-stretch relative leading-[20px] font-medium">
                                        <span>{`Blog Images (Max 3 Files)`}</span>
                                        {/* <span className="text-red">*</span> */}
                                    </div>
                                    <input className="form-control" type="file" name="blogImages" onChange={(e) => {
                                        const files = e.target.files;
                                        const newImages = Array.from(files);
                                        setImages(newImages);
                                    }}
                                        accept=".jpeg, .jpg, .png, .webp" placeholder="Select Event Images" multiple />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[34px] box-border max-w-full text-left text-darkorange-200 font-roboto">
                        <div className="w-[426px] flex flex-col items-start justify-start gap-[12px] max-w-full">
                            <div onClick={handleSubmit} className="self-stretch flex flex-row items-start justify-start max-w-full cursor-pointer text-white">
                                <div className="flex-1 rounded-lg bg-tomato flex flex-row items-start justify-center py-3 px-5 box-border whitespace-nowrap max-w-full">
                                    <div className="relative leading-[24px] font-medium inline-block min-w-[70px]">
                                        Create Blog
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AddBlog