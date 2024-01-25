interface SelfHostedProjectProps {
  title: string;
  href: string;
  image: string | JSX.Element;
  bg?: string;
}

export const SelfHostedProject = ({
  title,
  href,
  image,
  bg,
}: SelfHostedProjectProps) => (
  <a href={href} target="_blank" rel="noreferrer">
    <div
      className={`rounded-lg shadow-xl overflow-hidden ${bg} h-full transition-all hover:scale-105`}
    >
      <div className="flex gap-4 items-center">
        {image}

        <h2 className="text-xl font-bold text-center flex-1 mr-4">{title}</h2>
      </div>
    </div>
  </a>
);
