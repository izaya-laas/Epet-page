import { useEffect } from "react";
import { useContext, useState } from "react";
import darkContext from "../context/darkContext";

export const useStyles = () => {
  const { isDark } = useContext(darkContext);
  const [darkStyles, setDarkStyles] = useState({});

  useEffect(() => {
    if (isDark) {
      setDarkStyles({
        titleStyles: "text-secondary-color",
        gradientStartStyles: "to-primary-color",
        gradientEndStyles: "from-primary-color to-third-color",
        buttonStyles: "bg-primary-color text-fourth-color border-fourth-color",
      });
    } else {
      setDarkStyles({
        titleStyles: "text-primary-color",
        gradientStartStyles: "to-secondary-color",
        gradientEndStyles: "from-secondary-color to-fourth-color",
        buttonStyles:
          "bg-secondary-color text-primary-color border-primary-color",
      });
    }
  }, [isDark]);

  return darkStyles;
};
