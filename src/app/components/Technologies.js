import { RiReactjsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiSass,
  SiBootstrap,
  SiNodedotjs,
} from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title="MongoDB"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </div>
        <div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title="Express.js"
        >
          <SiExpress className="text-7xl text-gray-500" />
        </div>
        <div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title="React.js"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title="Node.js"
        >
          <SiNodedotjs className="text-7xl text-green-600" />
        </div>
        <div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title="Next.js"
        >
          <SiNextdotjs className="text-7xl text-white" />
        </div>
        <div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title="Tailwind CSS"
        >
          <SiTailwindcss className="text-7xl text-blue-400" />
        </div>
        <div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title="Tailwind CSS"
        >
          <SiBootstrap className="text-7xl text-blue-400" />
        </div>
        <div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title="SCSS"
        >
          <SiSass className="text-7xl text-pink-400" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
