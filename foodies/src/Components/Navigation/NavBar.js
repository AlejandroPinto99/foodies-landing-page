import MobileNav from "./MobileNav";
import Desktop from "./DesktopNav";

const NavBar = () => {
    return(
      <div >
          <div className=" hidden sm:flex">
            <Desktop />
          </div>

          <div className="flex sm:hidden flex-row-reverse m-2">
            <MobileNav />
          </div>
      </div>
    )
}

export default NavBar;