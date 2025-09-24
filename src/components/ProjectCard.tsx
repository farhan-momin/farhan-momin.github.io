import { Badge } from "./Badge"

export const ProjectCard = ({ name, description, tech, link, children }: { name: string, description: string, link: string, tech: string[], children: React.ReactNode }) => {
    return <div className="group relative overflow-hidden border border-[#e8e8e8] rounded-xl h-fit py-6 px-6 bg-[#f1f1f1] cursor-default

    ">

        {children}
        <div className="relative ">
            <div className="flex flex-wrap gap-2 items-center ">
                <span className="font-semibold text-lg text-black">{name}</span>
                {/* <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">hi</span> */}

                <div className="flex flex-wrap gap-2">

                    <a href={link} target="_blank"><Badge>
                        <div className="flex items-center gap-1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github-icon lucide-github w-3 h-3"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                            Github
                        </div>
                    </Badge>
                    </a>

                </div>
            </div>

            <div className="text-sm mt-4 text-black/70">
                {description}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
                {tech.map((tech) => (<Badge>{tech}</Badge>))}
            </div>
        </div>


        {/* <div className="absolute  left-0 top-0 bottom-0 w-1 h-full bg-amber-200"></div> */}
    </div>


}