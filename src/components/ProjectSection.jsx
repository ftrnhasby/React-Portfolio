import { projects } from "../constants/Index"

export const ProjectSection = () => {
  return (
    <div className="h-screen flex  justify-center flex-col  lg:-mt-12">
<div className="border-b  border-neutral-900 pb-4">
        <h1 className="my-24 text-center text-4xl font-bold lg:-mt-12 md:mt-10 sm:mt-10 tracking-[.10em]">Projects</h1>
        <div>
            {projects.map((item, index) => (
            <div key={index} className="flex flex-wrap ml-10 my-20  lg:justify-center">
                    <div className="w-full lg:w-1/4">
                    <img src={item.Image} width={150} height={150} alt={item.title} className="mb-66 rounded" />
                    </div>
                <div className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">{item.title}</h6>
                    <p className="mb-4 text-neutral-400">{item.description}</p>
                    {item.technologies.map((tech, index) => (
                        <span key={index} className="mr-2 rounded border border-teal-400 bg-teal-400 bg-opacity-20 px-1">{tech}</span>
                    ))}
                </div>
                
            </div>
            ))}
        </div>
    </div>
</div>
    
    
  )
}
