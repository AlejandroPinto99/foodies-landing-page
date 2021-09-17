import MobileNav from "./MobileNav";
import Desktop from "./DesktopNav";

const NavBar = ({color}) => {

    return(
      <div className="my-2.5 mx-4 w-9/12 ">
          <div className=" lg:flex hidden ">
            <Desktop color={color}/>
          </div>

          <div className="visible items-center lg:hidden">
            <MobileNav />
          </div>
      </div>
    )
}

export default NavBar;