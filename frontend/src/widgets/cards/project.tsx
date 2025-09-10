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
      className={` py-8 px-5 rounded-3xl  || transition-transform m-5 || hover:opacity-70 w-[230px]`}
    >
      <div className="rounded-full w-[100px] h-[100px] bg-white/10 mx-auto">
        {/* <img src={img} className="rounded-full" />*/}
      </div>

      <h2 className=" text-center my-5 text-2xl font-black">{title}</h2>

      <p className=" wrap-anywhere  text-center">{description}</p>

      <div className="flex justify-center">
        <button onClick={handleClick} className="my-2 mb-auto">
          подробнее
        </button>
      </div>
    </div>
  );
}
