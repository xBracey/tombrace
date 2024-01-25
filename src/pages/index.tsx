
import { Automation, Email, Game, Github, Linkedin, Meals, Notes, Share, Todo } from "../components/Icons";
import { Project } from "../components/Project";
import { SelfHostedProject } from "../components/SelfHostedProject";

const projects = [
  {
    title: "First Team Physiotherapy",
    description:
      "A website for a physiotherapy based in Hartlepool. Built with React and Strapi CMS.",
    href: "https://www.firstteamphysiotherapy.co.uk/",
    image: "/physio.png",
  },

  {
    title: "Neeya Community",
    description:
      "A community interest company based in West London. Built with React and Directus CMS.",
    href: "https://neeya.co.uk/",
    image: "/neeya.png",
  },

  {
    title: "South London United",
    description:
      "My local football team website built with React and Directus CMS.",
    href: "https://www.southlondonunited.co.uk/",
    image: "/football.png",
  },

  {
    title: "My Game Library",
    description: "My personal game library built with React and PixiJS.",
    href: "https://game.tombrace.co.uk/",
    image: <Game className="h-24 w-24 px-4" />,
  },
];

const selfHostedProjects = [
  {
    title: "Share",
    href: "https://share.tombrace.co.uk/",
    image: <Share className="h-24 w-24 px-4" />,
    bg: "bg-red-300",
  },
  {
    title: "Meals",
    href: "https://meals.tombrace.co.uk/",
    image: <Meals className="h-24 w-24 px-4" />,
    bg: "bg-pink-300",
  },
  {
    title: "Todo",
    href: "https://todo.tombrace.co.uk/",
    image: <Todo className="h-24 w-24 px-4" />,
    bg: "bg-purple-300",
  },
  {
    title: "Notes",
    href: "https://notes.tombrace.co.uk/",
    image: <Notes className="h-24 w-24 px-4" />,
    bg: "bg-blue-300",
  },
  {
    title: "Automation",
    href: "https://automation.tombrace.co.uk/",
    image: <Automation className="h-24 w-24 px-4" />,
    bg: "bg-green-300",
  },
 
];

export const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-8 p-8 flex-col md:flex-row">
        <div className="min-w-72">
          <img
            src="/me.JPG"
            alt="Web developer"
            className="h-72 w-72 rounded-full border-indigo-400 border-8"
          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold text-center">Tom Brace</h1>

          <p className="text-xl text-center">
            Hi I'm Tom, a fullstack developer based in London and welcome to my
            website! Here you can find out more about me, my projects and how to
            get in touch.
          </p>

          <div className="mt-4 flex gap-4 justify-center items-center">
            <a
              href="https://github.com/xBracey"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-12 w-12 aspect-auto" />
            </a>

            <a
              href="https://www.linkedin.com/in/thomas-brace-793690131/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-12 w-12" />
            </a>

            <a
              href="mailto:thomasbrace22@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Email className="h-14 w-14" />
            </a>
          </div>
        </div>
      </div>

      <div>
        <h2
          className="text-3xl font-bold text-center py-6 border-indigo-400 border-b-2"
          id="projects"
        >
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 my-6">
          {projects.map((project) => (
            <Project {...project} />
          ))}
        </div>
      </div>

      <div>
        <h2
          className="text-3xl font-bold text-center py-6 border-indigo-400 border-b-2"
          id="self-hosted"
        >
          Self Hosted Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 my-6">
          {selfHostedProjects.map((project) => (
            <SelfHostedProject {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};
