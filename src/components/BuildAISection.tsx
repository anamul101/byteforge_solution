import React from "react";
import datacuration from "../assets/images/datacuration.webp";
import ColorButton from "@/utility/ColorButton";

const BuildAISection = () => {
  return (
    <section
      style={{ backgroundColor: "black", color: "white" }}
      id="build-ai"
      className=" bg-transparent relative "
    >
      <div className="container relative py-8 bg-black text-white">
        <div className="select-none pointer-events-none absolute  left-[5%] right-[5%] opacity-50 bg-gradient_background__GEkO8"></div>
        <div className="flex flex-col max-w-3xl mx-auto items-center justify-center text-center mb-10 md:mb-20 md:mt-12 relative z-10 !mb-16">
          <div className="mb-5 lg:mb-5 overflow-hidden tracking-[3px] text-xs md:px-5 md:py-2 lg:text-xs uppercase bg-white bg-opacity-5 text-[#D1AAD7] rounded-full px-4 py-2">
            <span>Build AI</span>
          </div>
          <h2 className="font-aeonik leading-snug lg:leading-[1.25] text-3xl md:text-4.5xl lg:text-5xl [text-wrap:balance]">
            Scale Data Engine
          </h2>
          <p className="mt-4 lg:mt-2 leading-[1.60] text-neutral-100 lg:text-gray-300 lg:text-xl [text-wrap:balance] [white-space:inherit] block font-normal">
            For AI teams, Scale Data Engine improves your models by improving
            your data.
          </p>
        </div>

        <div className="space-y-6 lg:space-y-16">
          {/* RLHF Section */}
          <div className="box_box__wrapper__jXRQR flex justify-center">
            <div className="bg-[#09060a] w-[1096px] border border-[rgba(229,231,235,0.09)] flex 3xl:py-[95px] z-10 relative xl:py-20 md:p-10 lg:py-12 p-6 flex-col-reverse rounded-2xl lg:rounded-[34px] overflow-hidden md:overflow-visible lg:flex-row-reverse xl:pr-20">
              <div className="xl:flex xl:w-auto w-full flex-col justify-center lg:items-start xl:min-w-[466px] xl:max-w-[466px] flex-1">
                <p className="font-aeonik text-3.5xl xl:text-4xl mb-2 text-white">
                  RLHF
                </p>
                <p className="text-zinc-400">
                  Powering the next generation of Generative AI
                </p>
                <p className="my-8 text-[#F5F5F5]">
                  Scale Generative AI Data Engine powers the most advanced LLMs
                  and generative models in the world through world-class RLHF,
                  data generation, model evaluation, safety, and&nbsp;alignment.
                </p>
                <div className="flex items-center gap-x-3 xs:gap-x-6">
                  <ColorButton/>
                </div>
              </div>
              <div className=" bg-[#09060a] border border-[rgba(229,231,235,0.09)] -m-3 md:mt-0 md:mx-0 relative lg:flex lg:-translate-x-10 3xl:-translate-x-14 transition-transform duration-1000 ease-out rounded-[10px] shadow-xl xl:shadow-super overflow-hidden lg:mb-0 mb-9 lg:w-1/2 xl:w-[649px] xl:h-[402px] select-none aspect-[649/402] min-w-full lg:min-w-[50%] xl:min-w-[unset] max-w-[calc(100%+24px)]">
                <div className="overflow-hidden rounded-[10px] w-full relative aspect-[649/402] box_box__chat__AoICB">
                  <div className="grid grid-cols-3 p-2 sm:p-3 md:grid-cols-3">
                    <div className="flex space-x-[3px] sm:space-x-1.5">
                      <div className="w-1.5 sm:w-3 h-1.5 sm:h-3 bg-red-400 rounded-full"></div>
                      <div className="w-1.5 sm:w-3 h-1.5 sm:h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-1.5 sm:w-3 h-1.5 sm:h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex text-[7px] sm:text-base font-medium pt-2 justify-center text-neutral-200">
                      AI Text Generator
                    </div>
                    <div></div>
                  </div>
                  <div className="relative h-full px-6 py-3 space-y-1 text-xs sm:space-y-2 text-neutral-200">
                    <div className="flex px-1.5 md:pr-3 md:pl-[7px] md:py-[4.5px] w-fit py-[3px] space-x-1 sm:space-x-2 bg-white/5 border border-white border-opacity-[0.16] items-center rounded-[18px]">
                      <img
                        className="inline-block h-2 sm:w-[18px] w-2 sm:h-[18px] rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <div className="transition-opacity text-[7px] sm:text-sm">
                        Why is human feedback necessary for accurate llm
                        responses?
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <div
                        className="rounded-[18px] p-[0.5px] sm:p-px"
                        style={{
                          background:
                            "linear-gradient(97deg, rgb(255, 255, 255), rgb(154, 119, 255), rgb(77, 125, 247), rgb(225, 81, 255), rgb(255, 247, 89))",
                        }}
                      >
                        <div className="rounded-[18px] w-full flex items-center space-x-1 sm:space-x-2 bg-black p-[3px] h-[19px] md:h-auto">
                          <div className="px-1.5 md:pl-3 md:pr-[7px] md:py-[3px] w-fit py-[3px] transition-opacity">
                            ...
                          </div>
                          <img
                            className="inline-block w-2 h-2 rounded-full sm:w-[18px] sm:h-[18px]"
                            src="/static/images/icons/llm-1.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 z-10 w-full">
                    <div
                      className="after:bg-[linear-gradient(180deg,_rgba(243,_238,_255,_0)_0%,_rgba(243,_238,_255,_0.04)_100%)] after:absolute after:inset-0 after:content-[''] before:border before:border-white/5 before:inset-0 before:absolute relative flex flex-col p-2 pb-[14px] sm:pb-6 md:pb-9 m-1 sm:m-2 space-y-2.5 sm:space-y-6 text-sm before:rounded-sm before:sm:rounded-md rounded-sm sm:rounded-md text-neutral-700 transition ease-in-out duration-500 transform opacity-100 translate-y-0 scale-100"
                      data-enter=""
                      data-transition=""
                      style={{}}
                    >
                      <p className="text-[6px] sm:text-[13px] sm:leading-6 text-center text-purple-200 md:pt-6">
                        Human Feedback Ranking
                      </p>
                      <div className="flex justify-center">
                        <div className="flex flex-col items-center space-y-1 sm:space-y-[7px]">
                          <div className="text-[7px] px-1 py-0.5 md:px-3 md:py-1 rounded-full w-fit bg-black/25 border border-white border-opacity-[0.16] text-neutral-200 transform transition duration-500 ease-in-out text-right md:text-sm">
                            LLMs are trained by garden gnomes, who are known to
                            lie
                          </div>
                          <div className="text-[7px] px-1 py-0.5 md:px-3 md:py-1 rounded-full w-fit bg-black/25 border border-white border-opacity-[0.16] text-neutral-200 transform transition-all duration-500 ease-in-out text-right md:text-sm">
                            LLMs are not always truthful or aligned with human
                            preferences
                          </div>
                          <div className="text-[7px] px-1 py-0.5 md:px-3 md:py-1 rounded-full w-fit bg-black/25 border border-white border-opacity-[0.16] text-neutral-200 transform transition duration-500 ease-in-out text-center md:text-sm">
                            Humans enjoy giving opinions. It makes them feel
                            important
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Labeling Section */}
          <div className="box_box__wrapper__jXRQR flex justify-center">
            <div className="bg-[#09060a] w-[1096px] border border-[rgba(229,231,235,0.09)] flex 3xl:py-[95px] z-10 relative xl:py-20 md:p-10 lg:py-12 p-6 flex-col-reverse rounded-2xl lg:rounded-[34px] overflow-hidden md:overflow-visible lg:flex-row xl:pl-20">
              <div className="xl:flex xl:w-auto w-full flex-col justify-center lg:items-start xl:min-w-[466px] xl:max-w-[466px] flex-1">
                <p className="font-aeonik text-3.5xl xl:text-4xl mb-2 text-white">
                  Data Labeling
                </p>
                <p className="text-zinc-400">
                  The best quality data to fuel the best performing models
                </p>
                <div className="mt-8 lg:mt-10">
                  <div>
                    <div className="flex flex-col-reverse items-start lg:flex-row">
                      <div className="relative no-scrollbar sm:mx-0 lg:w-[47%] overflow-visible xl:w-auto max-w-full">
                        <div className="px-8 mb-8 -mx-8 overflow-x-auto lg:overflow-x-visible lg:overflow-y-visible no-scrollbar">
                          <div
                            className="tabs_tabs__qQMp5"
                            role="tablist"
                            aria-orientation="horizontal"
                          >
                            <div
                              className="absolute border rounded-full bg-white/10 border-white/10"
                              style={{
                                height: "38px",
                                width: "51px",
                                left: "4px",
                              }}
                            ></div>
                            <button
                              className="rounded-full py-2 px-4 relative transition-colors duration-200 focus:outline-none after:w-px after:transition-transform after:duration-100 after:absolute after:bg-white after:right-0 after:bg-opacity-[0.15] after:h-1/2 after:inline-block after:top-1/2 after:-translate-y-1/2 after:scale-y-0 text-white"
                              id="headlessui-tabs-tab-:R6bdnluqd6:"
                              role="tab"
                              type="button"
                              aria-selected="true"
                              tabIndex={0}
                              data-headlessui-state="selected"
                              data-selected=""
                              aria-controls="headlessui-tabs-panel-:Rddnluqd6:"
                            >
                              3D
                            </button>
                            <button
                              className="rounded-full py-2 px-4 relative transition-colors duration-200 focus:outline-none after:w-px after:transition-transform after:duration-100 after:absolute after:bg-white after:right-0 after:bg-opacity-[0.15] after:h-1/2 after:inline-block after:top-1/2 after:-translate-y-1/2 text-white/50"
                              id="headlessui-tabs-tab-:Rabdnluqd6:"
                              role="tab"
                              type="button"
                              aria-selected="false"
                              tabIndex={-1}
                              data-headlessui-state=""
                              aria-controls="headlessui-tabs-panel-:Rldnluqd6:"
                            >
                              Image
                            </button>
                            <button
                              className="rounded-full py-2 px-4 relative transition-colors duration-200 focus:outline-none after:w-px after:transition-transform after:duration-100 after:absolute after:bg-white after:right-0 after:bg-opacity-[0.15] after:h-1/2 after:inline-block after:top-1/2 after:-translate-y-1/2 text-white/50"
                              id="headlessui-tabs-tab-:Rebdnluqd6:"
                              role="tab"
                              type="button"
                              aria-selected="false"
                              tabIndex={-1}
                              data-headlessui-state=""
                              aria-controls="headlessui-tabs-panel-:Rtdnluqd6:"
                            >
                              Mapping
                            </button>
                            <button
                              className="rounded-full py-2 px-4 relative transition-colors duration-200 focus:outline-none after:w-px after:transition-transform after:duration-100 after:absolute after:bg-white after:right-0 after:bg-opacity-[0.15] after:h-1/2 after:inline-block after:top-1/2 after:-translate-y-1/2 text-white/50"
                              id="headlessui-tabs-tab-:Ribdnluqd6:"
                              role="tab"
                              type="button"
                              aria-selected="false"
                              tabIndex={-1}
                              data-headlessui-state=""
                              aria-controls="headlessui-tabs-panel-:R15dnluqd6:"
                            >
                              Text
                            </button>
                            <button
                              className="rounded-full py-2 px-4 relative transition-colors duration-200 focus:outline-none text-white/50"
                              id="headlessui-tabs-tab-:Rmbdnluqd6:"
                              role="tab"
                              type="button"
                              aria-selected="false"
                              tabIndex={-1}
                              data-headlessui-state=""
                              aria-controls="headlessui-tabs-panel-:R1ddnluqd6:"
                            >
                              Audio
                            </button>
                          </div>
                        </div>
                        <p className="mb-8 text-[#F5F5F5]">
                          Scale has pioneered in the data labeling industry by
                          combining AI-based techniques with human-in-the-loop,
                          delivering labeled data at unprecedented quality,
                          scalability, and efficiency.
                        </p>
                        <div className="!gap-x-3 xs:!gap-x-6 flex items-center gap-x-6">
                        <ColorButton/>
                        </div>
                      </div>
                      <div className="w-full lg:w-auto">
                        <div
                          id="headlessui-tabs-panel-:Rddnluqd6:"
                          role="tabpanel"
                          tabIndex={0}
                          data-headlessui-state="selected"
                          data-selected=""
                          aria-labelledby="headlessui-tabs-tab-:R6bdnluqd6:"
                        >
                          <div className="bg-black relative w-full border border-[#D1AAD7]/[0.16] lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-10 3xl:translate-x-14 transition-transform duration-1000 ease-out rounded-[10px] shadow-xl xl:shadow-super overflow-hidden lg:mb-0 mb-9 lg:w-1/2 xl:w-[530px] xl:h-[402px] select-none aspect-[649/402] min-w-full lg:min-w-[50%] xl:min-w-[unset] max-w-max">
                            <iframe
                              src="https://lidar-now.scale.com/scene?title=Scene%20%231"
                              className="absolute inset-0 w-full h-full bg-black"
                            ></iframe>
                          </div>
                        </div>
                        <span
                          aria-hidden="true"
                          id="headlessui-tabs-panel-:Rldnluqd6:"
                          role="tabpanel"
                          tabIndex={-1}
                          style={{
                            position: "fixed",
                            top: "1px",
                            left: "1px",
                            width: "1px",
                            height: "0",
                            padding: "0",
                            margin: "-1px",
                            overflow: "hidden",
                            clip: "rect(0, 0, 0, 0)",
                            whiteSpace: "nowrap",
                            borderWidth: "0",
                          }}
                          aria-labelledby="headlessui-tabs-tab-:Rabdnluqd6:"
                        ></span>
                        <span
                          aria-hidden="true"
                          id="headlessui-tabs-panel-:Rtdnluqd6:"
                          role="tabpanel"
                          tabIndex={-1}
                          style={{
                            position: "fixed",
                            top: "1px",
                            left: "1px",
                            width: "1px",
                            height: "0",
                            padding: "0",
                            margin: "-1px",
                            overflow: "hidden",
                            clip: "rect(0, 0, 0, 0)",
                            whiteSpace: "nowrap",
                            borderWidth: "0",
                          }}
                          aria-labelledby="headlessui-tabs-tab-:Rebdnluqd6:"
                        ></span>
                        <span
                          aria-hidden="true"
                          id="headlessui-tabs-panel-:R15dnluqd6:"
                          role="tabpanel"
                          tabIndex={-1}
                          style={{
                            position: "fixed",
                            top: "1px",
                            left: "1px",
                            width: "1px",
                            height: "0",
                            padding: "0",
                            margin: "-1px",
                            overflow: "hidden",
                            clip: "rect(0, 0, 0, 0)",
                            whiteSpace: "nowrap",
                            borderWidth: "0",
                          }}
                          aria-labelledby="headlessui-tabs-tab-:Ribdnluqd6:"
                        ></span>
                        <span
                          aria-hidden="true"
                          id="headlessui-tabs-panel-:R1ddnluqd6:"
                          role="tabpanel"
                          tabIndex={-1}
                          style={{
                            position: "fixed",
                            top: "1px",
                            left: "1px",
                            width: "1px",
                            height: "0",
                            padding: "0",
                            margin: "-1px",
                            overflow: "hidden",
                            clip: "rect(0, 0, 0, 0)",
                            whiteSpace: "nowrap",
                            borderWidth: "0",
                          }}
                          aria-labelledby="headlessui-tabs-tab-:Rmbdnluqd6:"
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Curation Section */}
          <div className="box_box__wrapper__jXRQR flex justify-center">
            <div className="w-[1096px] bg-[#09060a] border border-[rgba(229,231,235,0.09)] flex 3xl:py-[95px] z-10 relative xl:py-20 md:p-10 lg:py-12 p-6 flex-col-reverse rounded-2xl lg:rounded-[34px] overflow-hidden md:overflow-visible lg:flex-row-reverse xl:pr-20">
              <div className="xl:flex xl:w-auto w-full flex-col justify-center lg:items-start xl:min-w-[466px] xl:max-w-[466px] flex-1">
                <p className="font-aeonik text-3.5xl xl:text-4xl mb-2 text-white">
                  Data Curation
                </p>
                <p className="text-zinc-400">
                  Unearth the most valuable data by intelligently managing your
                  dataset
                </p>
                <p className="my-8 text-[#F5F5F5]">
                  Scale's suite of dataset management, testing, model
                  evaluation, and model comparison tools enable you to "label
                  what matters." Maximize the value of your labeling budget by
                  identifying the highest value data to label, even without
                  ground truth&nbsp;labels.
                </p>
                <div className="flex items-center gap-x-3 xs:gap-x-6">
                <ColorButton/>
                </div>
              </div>
              <div className="ml-[-14px] border border-[rgba(229,231,235,0.09)] -m-3 md:mt-0 md:mx-0 relative lg:flex lg:-translate-x-10 3xl:-translate-x-14 transition-transform duration-1000 ease-out rounded-[10px] shadow-xl xl:shadow-super overflow-hidden lg:mb-0 mb-9 lg:w-1/2 xl:w-[630px] xl:h-[420px] select-none aspect-[630/420] min-w-full lg:min-w-[50%] xl:min-w-[unset] max-w-[calc(100%+24px)]">
                <div className="border-[rgba(229,231,235,0.09)] overflow-hidden rounded-[10px] w-full relative aspect-[630/420] box_box__chat__AoICB">
                  <img
                    alt="data-curation"
                    loading="lazy"
                    width="649"
                    height="432"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src={datacuration.src}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildAISection;
