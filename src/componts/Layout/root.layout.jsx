import Navigation from "../Navbar/Navbar";
import { Outlet } from "react-router";


export const RootLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />    
    </>
  );
};

export default RootLayout;
