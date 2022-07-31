import { useEffect, useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { Link } from "react-router-dom";

const Carrousel = ({ images, className }) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [currentImage, setCurrentImage] = useState(images[currentPosition]);
  const { image, alt, description, title } = currentImage;
  const limit = images.length - 1;

  useEffect(() => {
    setCurrentImage(images[currentPosition]);

    const follower = setInterval(() => {
      nextImage();
    }, 8000);

    return () => {
      clearInterval(follower);
    };
  }, [currentPosition]);

  const nextImage = () => {
    currentPosition + 1 > limit
      ? setCurrentPosition(0)
      : setCurrentPosition(currentPosition + 1);
  };

  const prevImage = () => {
    currentPosition - 1 < 0
      ? setCurrentPosition(limit)
      : setCurrentPosition(currentPosition - 1);
  };

  return (
    <div className={className}>
      <div className="h-52 relative overflow-hidden">
        <img src={image} alt={alt} className="object-cover h-full w-full" />
        <nav className="w-full px-1 flex justify-between absolute top-[88px]">
          <button
            className="h-8 w-8 rounded-full bg-[#0f172a93] text-center grid place-items-center"
            onClick={prevImage}
          >
            <BiLeftArrow className="w-6 h-6 text-secondary-color" />
          </button>
          <button
            className="h-8 w-8 rounded-full bg-op-primary-color imary-color text-center grid place-items-center"
            onClick={nextImage}
          >
            <BiRightArrow className="w-6 h-6 text-secondary-color" />
          </button>
        </nav>
        {description && (
          <div className="h-10 w-full absolute bottom-0 text-sm bg-op-primary-color text-fourth-color">
            {description}
            <Link
              to={`/noticias/${title}`}
              className="text-secondary-color font-semibold"
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
