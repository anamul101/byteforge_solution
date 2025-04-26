import React from "react";
import Arrow from "../assets/icons/arrow.svg";

export default function button() {
  return (
    <a
      style={{ WebkitTapHighlightColor: "transparent", background:'white' }}
      className="relative bg-white text-black focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block"
      href="/demo"
    >
      <div className=" new-button_button--primary__EJ4AI font-medium justify-center flex flex-nowrap whitespace-nowrap transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] new-button_button--purple__hhI2y text-sm px-[15px] py-[10px]">
        Book a Demo
        <span className="inline-block ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">
          →
        </span>
      </div>
      <span className="after:content-[''] after:inline-block absolute inset-0 after:inset-0 after:absolute select-none pointer-events-none after:rounded-[11px] rounded-[11px] shadow-[inset_0_0_0_1px_rgba(255,255,255,1)] after:shadow-[inset_0_0_0_1px_rgba(105,57,193,0.4)]"></span>
    </a>
  );
}
