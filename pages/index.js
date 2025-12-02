import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Backgroundanimation from '../components/animation'

export default function Home() {
  return (
    <div>
      <Head>
        <title> venu | full stack-Developer</title>
        <meta name="description" content="I’m a software developer specializing in building exceptional applications on both the frontend and backend." />
      </Head>
    <Main />
    <About />
    <Education/>
    <Skills />
    <Projects />
    <Backgroundanimation/>
    <Contact />
    </div>
  )
}
