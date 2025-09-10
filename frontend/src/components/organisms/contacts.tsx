import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import { SiGithub, SiTelegram } from "react-icons/si";

export function Contacts() {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      boxRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        ease: "power2.out",
        duration: 0.9,
        y: 0,
        //trigger
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((el) => el.kill());
  }, []);

  const elCls =
    "wf px-3 py-7 mt-1 h-[50px] el mx-auto rounded-4xl flex items-center justify-center gap-3";

  return (
    //contacts
    <div
      ref={boxRef}
      className="mx-auto mt-40 text-center mb-20 cursor-pointer"
      id="Contacts"
    >
      <h3 className="mb-5">контакты</h3>

      {/* Github */}
      <div onClick={() => (location.href = "https://github.com/syntax-91")}>
        <div className={`${elCls} bg-[#101010]`}>
          <SiGithub size={30} />
          <p>Github</p>
        </div>
      </div>

      {/* Telegram */}
      <div
        onClick={() => (location.href = "https://t.me/syntax_real")}
        className={`${elCls}`}
      >
        <div className={`${elCls} bg-blue-700`}>
          <SiTelegram size={30} />
          <p>Telegram</p>
        </div>
      </div>
    </div>
  );
}
