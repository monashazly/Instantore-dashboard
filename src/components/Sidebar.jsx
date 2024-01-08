import React from "react";
import { SiTrustedshops } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";
import { Link, NavLink } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu , setActiveMenu  , screenSize } = useStateContext()

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg bg-orange-400	 text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  const handleCloseSidebar = ()=> {
    if( activeMenu &&  screenSize <=900 ) setActiveMenu(false)
  }

  return (
    <div className="ml-3 h-screen overflow-auto md:overflow-hidden  md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
              onClick={() => {}}
            >
              <SiTrustedshops />
              <span>Instantore</span>
            </Link>
            <TooltipComponent content="menu" position="Bottom-center">
              <button
                type="button"
                onClick={() => {
                  setActiveMenu(false)
                }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((link) => (
              <div key={link.title}>
                <p className="text-gray-400 m-4 uppercase ">{link.title}</p>
                {link.links.map((link) => (
                  <div key={link.name}>
                    <NavLink 
                    to={`/${link.name}`} 
                    onClick={handleCloseSidebar}
                    className={({isActive})=> isActive ?  activeLink : normalLink}>
                      {link.icon}
                      <span className="capitalize">{link.name}</span>
                    </NavLink>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
