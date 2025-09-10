import {
  SiAxios,
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiPnpm,
  SiReact,
  SiReacthookform,
  SiReactrouter,
  SiTypescript,
} from "react-icons/si";

export function Stack() {
  const cls = "transition-all el cp flex";

  return (
    <div className="mx-auto text-center mt-20 rtl" id="Stack">
      <h3>стек</h3>

      <div className="flex flex-wrap gap-10 w-[90%] md:w-[70%] justify-between mx-auto mt-10 py-5 px-5 rounded-4xl">
        <div
          className="transition-all hover:scale-110
				|| hidden lg:flex overflow-x-auto"
        >
          <SiHtml5 size={50} />
        </div>

        <div className={cls}>
          <SiCss3 size={50} />
        </div>

        <div className={cls}>
          <SiJavascript size={50} />
        </div>

        <div className={cls}>
          <SiTypescript size={50} />
        </div>

        <div className={cls}>
          <SiReact size={50} />
        </div>

        <div className={cls}>
          <SiNodedotjs size={50} />
        </div>

        <div className={cls}>
          <SiExpress size={50} />
        </div>

        <div className={cls}>
          <SiReactrouter size={50} />
        </div>

        <div className={cls}>
          <SiAxios size={50} />
        </div>

        <div className={cls}>
          <SiReacthookform size={50} />
        </div>

        <div className={cls}>
          <SiPnpm size={50} />
        </div>
      </div>
    </div>
  );
}
