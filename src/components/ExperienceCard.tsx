import { Badge } from "./Badge"

export const ExperienceCard = ({ Role, Company, children }: { Role: string, Company: string, children: React.ReactNode }) => {
    return <div className="relative overflow-hidden border border-[#e8e8e8] rounded-xl min-h-53 py-6 px-6 mt-4 bg-[#f1f1f1]
    hover:bg-[#e8e8e8] transition-colors cursor-default
    ">
        <div className="flex flex-wrap justify-between items-center">
            <div className="flex flex-wrap gap-2 items-center ">
                <span className="font-semibold text-lg text-black">{Role}</span>
                <span className="text-black/40 text-base">•</span>
                <span className="text-black/50 text-base">{Company}</span>
            </div>

            <div className="flex flex-wrap gap-2">

                <a href="https://www.linkedin.com/company/rajavi-technologies" target="_blank"><Badge>
                    <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin w-3 h-3"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        Linkedin
                    </div>
                </Badge>
                </a>

                <a href="https://rajavitech.in" target="_blank"><Badge>
                    <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-globe w-3 h-3"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                        Website
                    </div>
                </Badge>
                </a>
            </div>
        </div>


        <div className="text-sm mt-1 text-black/50">
            Internship
        </div>

        <div className="text-sm mt-4 text-black/70">
            {children}
        </div>

        <div className="mt-6 flex flex-wrap gap-2 ">
            <Badge>Node.js</Badge> <Badge>React</Badge> <Badge>Typescript</Badge>
        </div>

        <div className="absolute  left-0 top-0 bottom-0 w-1 h-full 
        bg-gradient-to-b from-blue-500/60 via-cyan-500/60 to-transparent"></div>
    </div>


}