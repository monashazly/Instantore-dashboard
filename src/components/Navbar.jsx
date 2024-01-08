import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, icon, color, customFunc, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      style={{ color }}
      onClick={() => customFunc()}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { setActiveMenu, isClicked, handleClick , setScreenSize } = useStateContext();

  const btnsData = [
    {
      title: "Cart",
      customFunc: () => handleClick("cart"),
      color: "blue",
      icon: <FiShoppingCart />,
      dotColor: "",
    },
    {
      title: "Chat",
      customFunc: () => handleClick("chat"),
      color: "blue",
      icon: <BsChatLeft />,
      dotColor: "#03C9D7",
    },
    {
      title: "Notifications",
      customFunc: () => handleClick("notification"),
      color: "blue",
      icon: <RiNotification3Line />,
      dotColor: "#03C9D7",
    },
    // {
    //   title : 'Profile',
    //   customFunc : () =>  handleClick('profile'),
    //   color : 'blue',
    //   icon : <MdKeyboardArrowDown/>,
    //   dotColor : ''
    // }
  ];

  useEffect(()=>{
    const handleResize = () => setScreenSize(window.innerWidth)
    
    window.addEventListener('resize' , handleResize)
    
    handleResize();
    
    return ()=> window.removeEventListener('resize' , handleResize)
  } , [])

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color="blue"
        icon={<AiOutlineMenu />}
      />
      <div className="flex gap-2">
        {btnsData.map((btn) => (
          <NavButton
            key={btn.title}
            title={btn.title}
            customFunc={btn.customFunc}
            color={btn.color}
            icon={btn.icon}
            dotColor={btn.dotColor}
          />
        ))}
        <TooltipComponent content="Profile">
          <div
            className="flex gap-2 items-center cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img alt="?" src={avatar} className="rounded-full w-8 h-8" />
            <p className=" flex flex-nowrap items-center">
              <span className="text-gray-400">Hi ,</span>
              <span className="text-gray-400 font-bold"> Mona!</span>
              <MdKeyboardArrowDown className="text-gray-400 ml-1" />
            </p>
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
