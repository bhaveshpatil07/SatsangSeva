import { useState } from "react";
import { useDropzone } from "react-dropzone";
import Loader from "../pages/Loader";
import FirstFold1 from "../components/FirstFold1";
import Footer from "../components/Footer";
import '../Csss/Createblog.css'
const Createblog = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [eventPoster, setEventPoster] = useState(null);

  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");

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

  const handleSubmit = () => {
    // Consolidate form data into an object
    const formData = {
      blogTitle,
      blogContent,
      image,

    };

    // Log the form data to the console
    console.log("Form Data:", formData);
  };

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col leading-[normal] tracking-[normal] mq750:gap-[25px]">
      <FirstFold1 />
      {loading && <Loader />}
      
      {/* Image upload section */}
      <div className="w-full flex justify-center items-center p-5 bg-gray-100">
        <div
          {...getRootProps()}
          className="w-full max-w-4xl h-[400px] flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl bg-gray-300 cursor-pointer relative overflow-hidden"
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
              <p className="text-center text-white">Event Poster</p>
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

      {/* Additional content section */}
      <div className="w-full flex flex-col items-center justify-center py-5 ">
        <div className="w-full max-w-3xl px-4">
          {/* Blog Title */}
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-semibold mb-2" >
              Blog Title
            </label>
            <input
              id="blogTitle"
              type="text"
              value={blogTitle}
              onChange={(e) => setBlogTitle(e.target.value)}
              placeholder="Enter blog title"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Blog Content */}
          <div>
            <label className="block text-gray-700 text-lg font-semibold mb-2" >
              Blog Content
            </label>
            <textarea
              id="blogContent"
              value={blogContent}
              onChange={(e) => setBlogContent(e.target.value)}
              placeholder="Enter blog content"
              rows="6"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Submit button section */}
      <div className="w-full flex justify-center items-center py-5 bg-gray-100">
        <div className="w-[426px] flex flex-col items-start justify-start gap-[12px]">
          <div onClick={handleSubmit} className="w-full flex justify-center">
            <div className="rounded-lg bg-tomato flex items-center justify-center py-3 px-5 cursor-pointer">
              <div className="text-white font-medium">List Blog</div>
            </div>
          </div>
        </div>
      </div>
      
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

export default Createblog;
