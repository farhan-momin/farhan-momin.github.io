import pic from '/profile.jpg'
import './App.css'
// import { useState, useEffect } from 'react'
import { ExperienceCard } from './components/ExperienceCard'
import { Projects } from './components/Projects'
import { Contribution } from './components/Contribution'

function App() {
  // const [ready, setReady] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => setReady(true), 20);
  //   // setReady(true);
  // }, []);

  return (
    <>
      <div className='flex flex-col min-h-screen w-full overflow-hidden bg-fixed bg-neutral-50 text-neutral-800 selection:text-neutral-700 selection:bg-neutral-300
        bg-[linear-gradient(to_right,#e8e8e8_1px,transparent_1px),linear-gradient(to_bottom,#e8e8e8_1px,transparent_1px)] 
        bg-[size:44px_44px]'>

        <div className={`flex-grow w-full max-w-3xl  mx-auto mt-20 px-5 

          `}>
          {/* opacity-0 transition-opacity duration-200 ${ready ? 'opacity-100' : 'opacity-0'} */}

          <div className='flex justify-between'>
            <img className='w-32 h-auto rounded-4xl' src={pic} alt="" />

            <div className='flex gap-8 py-2'>
              <a href="https://github.com/farhan-momin" target='_blank'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              </a>
              <a href="https://x.com/FarhanMominHere" target='_blank'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              {/* <img className='w-6 h-6' src={twitter} alt="feathericons com" /> */}

            </div>

          </div>

          <h1 className={`text-3xl font-medium mt-6 text-black`}>
            Hi, I'm Farhan
          </h1>

          <h2>
            India | Full Stack Engineer
          </h2>
          <p className='mt-6 max-w-xl'>
            I’m a CS engineer crafting full-stack solutions.
          </p>


          <div className='mt-10  max-w-2xl mx-auto'>
            <h1 className='text-2xl font-medium text-blue-500'>
              Experience
            </h1>

            <ExperienceCard Role='Full Stack Engineering Intern' Company='Rajavi Technologies'>
              <div className='flex flex-col space-y-1'>
                <p className='flex gap-1'>
                  <span>•</span>Contributed to backend and frontend on different projects.
                </p>
                <p className='flex gap-1'>
                  <span>•</span>Built data pipelines and frontend components.
                </p>
              </div>
            </ExperienceCard>

          </div>

          <div className='mt-16 max-w-2xl mx-auto'>
            <h1 className='text-2xl font-medium text-blue-500'>
              Open-Source Contributions
            </h1>

            <Contribution name='MusicBlocks'>
              <div className='flex flex-col space-y-1'>
                <p className='flex gap-1'>
                  <span>•</span>Worked on audio tuner feature addition for tuning physical instruments.
                </p>
                <p className='flex gap-1'>
                  <span>•</span>Improved UX by making fixes in dark mode
                </p>
              </div>
            </Contribution>

          </div>

          <div className='mt-16 max-w-2xl mx-auto'>
            <h1 className='text-2xl font-medium text-blue-500'>
              Projects
            </h1>

            <Projects></Projects>

          </div>

        </div>


        <footer className='w-full max-w-3xl mx-auto py-7 px-5 mt-10 text-sm text-black/50'>

          <div className='relative flex justify-between w-full items-center'>
            <span>Farhan Momin</span>
            <span className='flex gap-5'>
              <a href="https://github.com/farhan-momin" target='_blank'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              </a>
              <a href="https://x.com/FarhanMominHere" target='_blank'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>


            </span>

            <div className='absolute h-px w-full bg-[#e8e8e8] -top-7 right-0'></div>
          </div>

        </footer>
      </div>

    </>
  )
}

export default App

