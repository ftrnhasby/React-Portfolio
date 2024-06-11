import { projects } from "../constants/Index"

export const ProjectSection = () => {
  return (
    <div className="h-screen" >
        <h1 id="projects" className="my-24 text-center text-4xl font-bold  tracking-[.10em]">Projects</h1>
        <div>
            <div className="grid grid-rows-2 grid-cols-3 gap-5 px-5">
            {projects.map((item, index) => (
                <div key={index} className="rounded-lg py-2 px-2 shadow-xl bg-white/5 ring-1 ring-white/20 backdrop-blur-4xl">
                    <img src={item.Image} className="mb-2 w-full h-auto rounded-lg"  alt={item.title}  />
                    <div className="flex space-x-56">
                    <h6 className="mb-2  font-semibold">{item.title}</h6>
                    <h6 className="text-neutral-400">{item.date}</h6>
                    </div>
                    <p className=" text-neutral-400 mb-14">{item.description}</p>
                    {item.technologies.map((tech, index) => (
                        <span key={index} className="mr-2 rounded border-[1px] border-teal-400 bg-teal-400 bg-opacity-5 px-1">{tech}</span>
                    ))}   
               </div>          
            ))}
            </div>
        </div>
</div>
    
    
  )
}
