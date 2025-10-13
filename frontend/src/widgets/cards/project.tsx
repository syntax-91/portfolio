import { themeConfig } from "../../app/configs/themeConfig";

interface props {
  w?: number;
  h?: number;

  handleClick?: () => void;

  img?: string;
  title?: string;
  description?: string;
}

export function Card({
  handleClick,

  //img = "",
  title = "title",
  description = "description",
}: props) {
  return (
    <div
      style={{
        background: themeConfig.themes.dark.bb,
      }}
      className={`cp border border-[#fff]/10 py-5 px-6 rounded-3xl || transition-transform mx-1 || hover:opacity-70 w-[230px]`}
    >
      <h2 className=" text-center  text-2xl font-black">{title}</h2>

      <p className=" wrap-anywhere py-3 text-center">{description}</p>

      <div className="flex justify-center">
        <button onClick={handleClick} className="my-2 mb-auto">
          подробнее
        </button>
      </div>
    </div>
  );
}
