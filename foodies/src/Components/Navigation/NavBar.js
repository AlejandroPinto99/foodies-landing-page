import MobileNav from "./MobileNav";
import Desktop from "./DesktopNav";

const NavBar = () => {

    return(
      <div className="my-2.5 mx-4">
          <div className=" hidden lg:visible">
            <Desktop />
          </div>

          <div className="visible lg:hidden items-center">
            <MobileNav />
          </div>
      </div>
    )
}

export default NavBar;