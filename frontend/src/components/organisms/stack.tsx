import clsx from "clsx";
import { useState } from "react";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiPnpm,
  SiReact,
  SiTypescript,
} from "react-icons/si";

const sizeIcon = 50;

export function Stack() {
  const cls = "transition-all el cp flex";
  const [hover, setHover] = useState(false);
  const [hoveredElId, setHoveredElId] = useState<number>();

  const els = [
    {
      id: 1,
      icon: <SiHtml5 size={sizeIcon} />,
      title: "html5",
      description: "html5, семантика",
    },
    {
      id: 2,
      icon: <SiCss3 size={sizeIcon} />,
      title: "css3",
      description: "css3, flex, @media",
    },
    {
      id: 3,
      icon: <SiJavascript size={sizeIcon} />,
      title: "JavaScript",
      description:
        "ES6, async/await, понимание разниц между примитивными и ссылочными данными",
    },
    {
      id: 4,
      icon: <SiTypescript size={sizeIcon} />,
      title: "ts",
      description: "TSX (react + ts), generics",
    },
    {
      id: 5,
      icon: <SiReact size={sizeIcon} />,
      title: "react",
      description:
        "переиспользуймые, презентационные кмопаненты, RRD, RHF, MOBX useDebounce, FSD, page-based, feat-based, module styles",
    },
    {
      id: 6,
      icon: <SiNodedotjs size={sizeIcon} />,
      title: "nodeJS",
      description:
        "глубокое понимание: event loop, libuv, worker pool, clusters, streams",
    },
    {
      id: 7,
      icon: <SiPnpm size={sizeIcon} />,
      title: "pnpm",
      description: "установка, удаление, обновления",
    },
  ];

  const handleOnMouseEl = (elID: number) => {
    setHover(true);
    setHoveredElId(elID);
  };
  const handleOnLeaveEl = () => {
    setHover(false);
    setHoveredElId(0);
  };

  return (
    <div
      className="mx-auto transition duration-900 bg-[#333]/20 py-10 text-center mt-20 rtl"
      id="Stack"
    >
      <h3>стек</h3>

      <div className="flex flex-wrap gap-10 w-[90%] md:w-[70%] justify-between mx-auto mt-10 py-5 px-5 rounded-4xl">
        {els.map((e, idx) => (
          <div
            onMouseEnter={() => handleOnMouseEl(e.id)}
            onMouseLeave={() => handleOnLeaveEl()}
            key={idx}
            className={clsx(
              cls,
              "gap-3",
              hover &&
                hoveredElId == e.id &&
                "bg-white/10 rounded-2xl transition duration-900 p-4 align-center grow-0 share-0"
            )}
          >
            {e.icon}

            <div className="block transition duration-900 max-w-[300px]">
              <h5>{hover && e.id === hoveredElId ? e.title : null}</h5>
              <p>{hover && e.id === hoveredElId ? e.description : null}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
