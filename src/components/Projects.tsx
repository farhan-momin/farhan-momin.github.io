import { ProjectCard } from "./ProjectCard"

export const Projects = () => {
    const projects = ['Developed a cost effective solution for interactive virtual reality experiences. Project Selected for DIPEX finals, a state level project competition.', 'A typing analysis web application providing key metrics such as typing speed, accuracy, and errors.'];

    return <div className="flex flex-col space-y-8 mt-4">
        <ProjectCard name='GestureSphere Explorer' tech={['Java', 'XML', 'Godot', 'RTP Protocol']}
            description={projects[0]} link="https://github.com/farhan-momin/GestureSphere-Explorer">

            <div className="absolute w-full h-full 
            bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-indigo-400/20  
            inset-0 opacity-0 group-hover:opacity-100 transition-opacity
            duration-500"></div>

        </ProjectCard>

        <ProjectCard name='RapidType' tech={['Javascript', 'CSS', 'HTML']} description={projects[1]}
        link="https://github.com/farhan-momin/RapidType">

            <div className="absolute w-full h-full 
            bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-red-400/20
            inset-0 opacity-0 group-hover:opacity-100 transition-opacity
            duration-500"></div>

        </ProjectCard>
    </div>
}