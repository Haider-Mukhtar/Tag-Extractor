import { Outlet } from "react-router"
import MaxWidthWrapper from "./max-width-wrapper";

const GlobalBackground = () => {
  return (
    <div className="bg-[#0A0B1A] w-full h-screen overflow-auto px-2 md:px-10 pt-20 md:pt-24">
      <div className="relative h-full">
        {/* Blue blur effects */}
        <div className="bg-[#0A0B1A] w-full h-full relative overflow-hidden rounded-2xl borde">
          <div className="absolute top-0 -left-40 w-[60%] md:w-[50%] h-[90%] bg-gradient-to-br from-[#0000B6] to-black rounded-br-full blur-[100px]" />
          <div className="absolute top-0 -right-40 w-[60%] md:w-[50%] h-[90%] bg-gradient-to-bl from-[#0000B6] to-black rounded-bl-full blur-[100px]" />
        </div>
        <div className="flex flex-col items-center absolute left-0 right-0 top-0 z-10">
          <MaxWidthWrapper className="h-full">
            <Outlet />
          </MaxWidthWrapper>
        </div>
      </div>
    </div>
  );
};

export default GlobalBackground;