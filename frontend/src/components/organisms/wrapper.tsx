export function Wrapper() {
  return (
    <div
      className="w-[95%] md:w-[70%] mx-auto flex justify-between ttb py-5
		items-center  mt-10 md:mt-30 gap-10 md:px-8 rounded-4xl"
      id="About_me"
    >
      {/* block 1 */}
      <div
        className=" b1 w-[80%]  md:w-[50%]  text-center mx-auto || md:mx-0
			md:text-start "
      >
        <h2 className="text-2xl">
          Привет я <i>syntax</i>
        </h2>

        <p>
          - начинающий фронтенд-разработчик, сфокусированный на чистой
          архитектуре и переиспользуемости. Пишу UI через <i>Atomic Design</i>,
          Использую <i>React</i>, <i>TailwindCSS</i>, <i>GSAP</i> для анимаций и
          ⠀<i>Axios</i> для работы с API. Backend покрываю на <i>NodeJS</i>,
          Работаю с хуками, <i>React Router DOM</i>, оптимизирую через{" "}
          <i>React.lazy</i> и на основе лёгких библиотек.
        </p>
      </div>

      {/* block 2 */}
      <div className=" w-[300px] h-[300px] hidden md:flex cp hover:scale-105">
        <img
          className="rounded-4xl"
          src="https://avatars.githubusercontent.com/u/190104690?s=400&u=77ff2428ce97bf7aa7fbef189de603b8a4da0a44&v=4"
          alt="syntax"
        />
      </div>
    </div>
  );
}
