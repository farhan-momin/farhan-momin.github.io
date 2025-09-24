import { Badge } from "./Badge"

export const Contribution = ({ name, children }: { name: string, children: React.ReactNode }) => {
    return <div className="relative overflow-hidden border border-[#e8e8e8] rounded-xl min-h-53 py-6 px-6 mt-4 bg-[#f1f1f1] hover:bg-[#e8e8e8] transition-colors cursor-default">

        <div className="flex flex-wrap justify-between gap-2 items-center ">

            <div className="flex flex-wrap gap-2 items-center ">
                <span className="font-semibold text-lg text-black">{name}</span>
                <span className="text-black/40 text-base">•</span>
                <span className="text-black/50 text-base">SugarLabs organization</span>
            </div>


            <div className="flex flex-wrap gap-2">

                <a href="https://www.linkedin.com/company/sugar-labs" target="_blank"><Badge>
                    <div className="flex items-center gap-1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin w-3 h-3"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        Linkedin
                    </div>
                </Badge>
                </a>

                <a href="https://x.com/sugar_labs" target="_blank"><Badge>
                    <div className="flex items-center gap-1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter w-3 h-3"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                        Twitter
                    </div>
                </Badge>
                </a>

                <a href="https://www.sugarlabs.org/" target="_blank"><Badge>
                    <div className="flex items-center gap-1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-globe w-3 h-3"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                        Website
                    </div>
                </Badge>
                </a>
            </div>
        </div>

        <div className="text-sm mt-4 text-black/70">
            {children}
        </div>

        <div className="mt-11 flex flex-wrap gap-2 ">
            <Badge>Tone.js</Badge> <Badge>Node.js</Badge>  <Badge>Jest</Badge> <Badge>CSS</Badge>
        </div>

        <div className="absolute  left-0 top-0 bottom-0 w-1 h-full
        bg-gradient-to-b from-blue-500/60 via-cyan-500/60 to-transparent"></div>
    </div>


}