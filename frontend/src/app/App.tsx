import { observer } from "mobx-react-lite";
import { MenuMobileLazy } from "../components/molecules/lazy";
import { Contacts } from "../components/organisms/contacts";
import { Header } from "../components/organisms/header";
import Modal from "../components/organisms/modal";
import { Projects } from "../components/organisms/projects";
import { Stack } from "../components/organisms/stack";
import { Wrapper } from "../components/organisms/wrapper";
import { isOpenStore } from "./store/isOpen";
import { modalStore } from "./store/modalStore";
import { Suspense } from "react";
import { Loader } from "../components/atoms/loader";

function App() {
  return (
    <div className="relative">
      {modalStore.isOpen == true && <Modal />}
      {isOpenStore.isOpenMap.menuMobile && (
        <Suspense fallback={<Loader />}>
          <MenuMobileLazy />
        </Suspense>
      )}

      <Header />
      <Wrapper />
      <Stack />
      <Projects />
      <Contacts />
    </div>
  );
}

export default observer(App);
