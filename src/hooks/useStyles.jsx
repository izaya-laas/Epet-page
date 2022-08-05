import { useEffect } from "react";
import { useContext, useState } from "react";
import darkContext from "../context/darkContext";

export const useStyles = () => {
  const { isDark } = useContext(darkContext);
  const [darkStyles, setDarkStyles] = useState({});

  useEffect(() => {
    if (isDark) {
      setDarkStyles({
        subtitleStyles: "text-secondary-color",
        gradientStartStyles: "to-primary-color",
        gradientEndStyles: "from-primary-color to-third-color",
        buttonStyles: "bg-primary-color text-fourth-color border-fourth-color",
        linkStyles: "text-blue-300",
      });
    } else {
      setDarkStyles({
        subtitleStyles: "text-primary-color",
        gradientStartStyles: "to-secondary-color",
        gradientEndStyles: "from-secondary-color to-fourth-color",
        buttonStyles:
          "bg-secondary-color text-primary-color border-primary-color",
        linkStyles: "text-blue-600",
      });
    }
  }, [isDark]);

  return darkStyles;
};
