import { MdMenu } from "react-icons/md";
import { isOpenStore } from "../../app/store/isOpen";
import { Logo } from "../atoms/Logo";
import { Nav } from "../molecules/nav";

export function Header() {
  const handleClickMenu = () => {
    if (isOpenStore.isOpenMap.menuMobile == true) {
      isOpenStore.setIsOpen("menuMobile", false);
    } else {
      isOpenStore.setIsOpen("menuMobile", true);
    }
  };

  return (
    <div className="fixed py-5 backdrop-blur z-[1000] top-0 flex w-[100%] justify-center items-center">
      <header className="flex items-center w-[95%] md:w-[80%] justify-between z-[100]">
        <Logo />

        <div className="md:flex hidden">
          <Nav />
        </div>

        <div onClick={handleClickMenu} className="cp flex md:hidden">
          <MdMenu size={30} />
        </div>
      </header>
    </div>
  );
}
