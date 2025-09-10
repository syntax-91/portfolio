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
    <header className="w-[100%] md:w-[80%] mx-auto md:my-10 flex justify-between ltr py-5 px-8 md:rounded-4xl ">
      <Logo />

      <div className="md:flex hidden">
        <Nav />
      </div>

      <div onClick={handleClickMenu} className="cp flex md:hidden">
        <MdMenu size={30} />
      </div>
    </header>
  );
}
