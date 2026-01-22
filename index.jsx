import image1Copy1 from "./image-1-copy-1.png";
import image from "./image.svg";
import maskGroup from "./mask-group.png";
import vector from "./vector.svg";

export const Box = () => {
  return (
    <div className="relative w-[1440px] h-[750px]">
      <div className="fixed top-0 left-0 w-[1442px] h-[750px]">
        <img
          className="absolute top-0 left-0 w-[1440px] h-[750px]"
          alt="Mask group"
          src={maskGroup}
        />

        <div className="h-[750px] bg-[#03214c] opacity-70 absolute top-0 left-0 w-[1440px]" />

        <div className="h-[434px] bg-[linear-gradient(180deg,rgba(3,33,76,1)_0%,rgba(3,33,76,0)_100%)] absolute top-0 left-0 w-[1440px]" />

        <header className="flex w-[1170px] items-center justify-between absolute top-10 left-[135px] bg-transparent">
          <div className="relative w-[296px] h-9">
            <div className="absolute top-0 left-0 w-[294px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
              Dr. Rich Kalina
            </div>
          </div>

          <div className="inline-flex items-center gap-10 relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-10 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal]">
                HOME
              </div>

              <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal]">
                ABOUT
              </div>

              <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal]">
                SPECIALTIES
              </div>

              <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal]">
                ACHIEVEMENTS
              </div>
            </div>

            <button className="all-[unset] box-border inline-flex items-center justify-center gap-[5px] px-5 py-2.5 relative flex-[0_0_auto] bg-[#00cde5]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal]">
                CONTACT
              </div>

              <div className="relative w-5 h-5 rotate-180">
                <img
                  className="absolute w-[54.69%] h-[54.69%] top-[22.66%] left-[22.66%] -rotate-180"
                  alt="Vector"
                  src={vector}
                />
              </div>
            </button>
          </div>
        </header>

        <img
          className="absolute top-24 left-[770px] w-[519px] h-[654px] object-cover"
          alt="Image copy"
          src={image1Copy1}
        />

        <div className="flex flex-col w-[670px] items-start gap-3 absolute top-[217px] left-[135px]">
          <div className="inline-flex items-center justify-center gap-2.5 px-[25px] py-2.5 relative flex-[0_0_auto] bg-[#ffffff1a] rounded-[100px] border-[0.92px] border-solid border-[#9393934c] backdrop-blur-[22.93px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(22.93px)_brightness(100%)]">
            <p className="relative w-fit mt-[-0.92px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal]">
              Expert in Ophthalmic Care &amp; Research
            </p>
          </div>

          <p className="relative self-stretch h-[117px] [font-family:'Poppins-Bold',Helvetica] font-bold text-white text-[46px] tracking-[0] leading-[58px]">
            Over 25 Years of Excellence in Ophthalmology
          </p>

          <div className="flex items-center justify-center gap-2.5 pt-0 pb-5 px-0 relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative flex-1 h-[131px] mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-3xl tracking-[0] leading-[normal]">
              Specializing in medical eyecare and the treatment of cataracts,
              glaucoma, retina conditions, and diabetic eyecare
            </p>
          </div>

          <button className="all-[unset] box-border inline-flex items-center justify-center gap-[5px] px-5 py-2.5 relative flex-[0_0_auto] bg-[#00cde5]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-[normal]">
              CONTACT
            </div>

            <div className="relative w-5 h-5 rotate-180">
              <img
                className="absolute w-[54.69%] h-[54.69%] top-[22.66%] left-[22.66%] -rotate-180"
                alt="Vector"
                src={image}
              />
            </div>
          </button>
        </div>

        <div className="absolute top-[655px] left-[766px] w-[519px] [text-shadow:2px_2px_1px_#000000cc] [font-family:'Allura-Regular',Helvetica] font-normal text-white text-[70px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          Dr. Rich Kalina
        </div>
      </div>
    </div>
  );
};
