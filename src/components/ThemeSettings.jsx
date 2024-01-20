import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { themeColors } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const ThemeSettings = () => {
  const themeOptions = [
    {
      id: "light",
      value: "Light",
    },
    {
      id: "dark",
      value: "Dark",
    },
  ];

  const { currentColor , currentMode , setMode , setColor , setThemeSettings} = useStateContext();

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen d:text-gray-200 bg-white dark:[#484B52] w-300">
        <div className=" flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-xl">Settings </p>
          <button
            className="text-2xl p-3 "
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
          >
            <MdOutlineCancel />
          </button>
        </div>

        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-lg">Theme Options</p>
          {themeOptions.map((option) => (
            <div className="mt-4" key={option.id}>
              <input
                className="cursor-pointer"
                type="radio"
                name="theme"
                id={option.id}
                value={option.value}
                onChange={setMode}
                checked={currentMode === option.value}
              />
              <label
                htmlFor={option.id}
                className="ml-2 text-md cursor-pointer"
              >
                {option.value}
              </label>
            </div>
          ))}
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-lg">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position="TopCenter"
              >
                <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full cursor-pointer"
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        currentColor === item.color ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
