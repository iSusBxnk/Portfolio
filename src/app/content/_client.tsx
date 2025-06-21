import About from "./about/page"
import Experience from "./Experience/page"
import Project from "./project/page"

function _client() {
  return (
    <div className="space-y-16 md:space-y-24">
      <About />
      <Experience />
      <Project />
      <footer className="text-center text-slate-500 text-sm py-8">
        <p>
          Loosely designed in <span className="text-slate-400">Figma</span> and coded in{" "}
          <span className="text-slate-400">Visual Studio Code</span> by yours truly. Built with{" "}
          <span className="text-slate-400">Next.js</span> and <span className="text-slate-400">Tailwind CSS</span>,
          deployed with <span className="text-slate-400">Vercel</span>.
        </p>
      </footer>
    </div>
  )
}

export default _client
