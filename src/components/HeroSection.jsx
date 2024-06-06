
export const HeroSection = () => {
  return (
    <div className="h-screen overflow-hidden -mt-14 w-full gap-1  flex flex-col justify-center items-center">

<div className="absolute inset-0 flex justify-center items-center z-0">
    <div className="bg-shape1 absolute  opacity-50 filter blur-3xl rounded-full -top-10 -left-20"></div>
    <div className="bg-shape2 absolute opacity-50 filter blur-3xl rounded-full top-20 -right-20"></div>
  </div>

  <div className="relative z-10 text-center">
        <h1 className="text-1xl sm:text-1xl lg:text-2xl tracking-[.70em]">
            WEB <span className="inline text-teal-400">DEVELOPER</span>
        </h1>
        <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold">
            HASBY AS'SYADIQI
        </h1>
        <button className="border border-blue-200 py-1 px-5 mt-5 rounded-lg">
            Hire Me
        </button>
    </div>
    
    </div>
  )
}
