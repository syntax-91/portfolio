import clsx from "clsx";

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

  return (
    <div
      className="mx-auto transition duration-900 bg-[#333]/10 py-10 text-center mt-20 rtl"
      id="Stack"
    >
      <h3>стек</h3>

      <div className="flex flex-wrap gap-10 w-[90%] md:w-[70%] justify-between mx-auto mt-10 py-5 px-5 rounded-4xl">
        {els.map((e, idx) => (
          <div key={idx} className={clsx(cls, "gap-3")}>
            {e.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
