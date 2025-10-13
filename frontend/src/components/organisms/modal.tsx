import clsx from "clsx";
import { observer } from "mobx-react-lite";
import { themeConfig } from "../../app/configs/themeConfig";
import s from "../../shared/styles/modalStyles.module.css";
import { modalStore } from "../../app/store/modalStore";

export type TModal = "info" | "prompt" | "error";

export interface ModalProps {
  /* shared */
  type?: TModal;
  title?: string;
  msg?: string;
  titleBtn?: string;
  theme?: "light" | "dark";
  autoClose?: boolean;
  autoCloseDuration?: number;
}

function Modal({ titleBtn = "хорошо", theme = "dark" }: ModalProps) {
  //
  const handleClick = () => {
    modalStore.close();
  };

  return (
    <div
      className={clsx(
        `// 
			//
			${s[theme + "_c"]}
			${s["modal-container"]}  
		`
      )}
    >
      <div //
        style={{
          background: themeConfig.themes.dark.bb,
        }}
        className={`fn  
				${s[theme]} ${s["modal"]}`}
      >
        <p className="text-center">{modalStore.title}</p>

        <p className="text-center max-w-[95%] py-2">{modalStore.msg}</p>

        <button className="w-full" onClick={handleClick}>
          {titleBtn}
        </button>
      </div>
      {/**/}
    </div>
  );
}

export default observer(Modal);
