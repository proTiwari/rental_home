import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import bright from "../../images/bright.png";
import dark from "../../images/dark.png";

const ThemeSwitch = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const imagesPath = {
    light: bright,
    black: dark,
  };

  const [active, setActive] = useState(true);

  const handleChangeActive = () => {
    setActive((previousStar) => {
      return !previousStar;
    });
  };


  return (
    <div>
     {active ? (
          <img
            className="active"
            src={imagesPath.light}
            height={35}
            width={35}
            alt="yellow star"
            onClick={() => handleChangeActive() || setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          />
        ) : (
          <img
            className="inactive"
            src={imagesPath.black}
            height={35}
            width={35}
            alt="black and white star"
            onClick={() => handleChangeActive() || setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          />
        )}

      {/* <img
            src={open? imagesPath['dark'] : imagesPath['light']} 
            // onClick={() => setOpen(false)}
            width={40}
            height={40}
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4"
            
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
           
        ></img> */}
    </div>
  );
};

export default ThemeSwitch;
