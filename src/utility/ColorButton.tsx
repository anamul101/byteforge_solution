import React from "react";
import Arrow from "../assets/icons/arrow.svg";

export default function ColorButton() {
  return (
    <div className="mt-8 flex items-center gap-x-6">
    <a
      style={{ border: " 1px solid #9e789b", background: "#72556f" }}
      className="relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[1px] inline-block "
      href="/"
    >
      <div style={{border: " 1px solid #9e789b"}} className="outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[1px] new-button_button--primary__EJ4AI font-medium justify-center flex flex-nowrap whitespace-nowrap hover:bg-[#5b3557] transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] new-button_button--pink__gdR3d text-sm px-[15px] py-[10px]">
        Learn More
        <span className="inline-block ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">
          →
        </span>
      </div>
      <span className="after:content-[''] after:inline-block absolute inset-0 after:inset-0 after:absolute select-none pointer-events-none after:rounded-[11px] rounded-[11px] shadow-[inset_0_0_0_1px_rgba(255,255,255,1)] after:shadow-[inset_0_0_0_1px_rgba(200,139,196,0.4)]"></span>
    </a>
  </div>
  );
}
