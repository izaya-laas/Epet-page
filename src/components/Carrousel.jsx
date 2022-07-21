import { useEffect, useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { Link } from "react-router-dom";

const Carrousel = ({ images, className }) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [currentImage, setCurrentImage] = useState({});
  const { image, alt, description, title } = currentImage;
  const limit = images.length - 1;

  useEffect(() => {
    setCurrentPosition(0);
    setCurrentImage(images[currentPosition]);
  }, []);

  useEffect(() => {
    setCurrentImage(images[currentPosition]);

    const follower = setInterval(() => {
      handleCurrentPosition("next");
    }, 5000);

    return () => {
      clearInterval(follower);
    };
  }, [currentPosition]);

  const handleCurrentPosition = (mode) => {
    if (!mode) return;
    if (mode === "prev") {
      currentPosition - 1 < 0
        ? setCurrentPosition(limit)
        : setCurrentPosition(currentPosition - 1);
    } else {
      currentPosition + 1 > limit
        ? setCurrentPosition(0)
        : setCurrentPosition(currentPosition + 1);
    }
  };

  return (
    <div className={className}>
      <div className="h-52 bg-black relative overflow-hidden">
        <img src={image} alt={alt} className="object-cover h-full w-full" />
        <nav className="w-full px-1 flex justify-between absolute top-[88px]">
          <button
            className="h-8 w-8 rounded-full bg-[#0f172a93] hover:bg-white text-center grid place-items-center"
            onClick={() => handleCurrentPosition("prev")}
          >
            <BiLeftArrow className="w-6 h-6 text-[#7dd3fc]" />
          </button>
          <button
            className="h-8 w-8 rounded-full bg-[#0f172a93] hover:bg-white text-center grid place-items-center"
            onClick={() => handleCurrentPosition("next")}
          >
            <BiRightArrow className="w-6 h-6 text-[#7dd3fc]" />
          </button>
        </nav>
        {description && (
          <div className="h-10 w-full absolute bottom-0 text-sm bg-[#0f172a93] text-white">
            {description}
            <Link
              to={`/noticias/${title}`}
              className="text-sky-300 font-semibold"
            >
              {" "}
              ver mas...
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carrousel;