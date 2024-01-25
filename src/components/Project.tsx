interface ProjectProps {
  title: string;
  description: string;
  href: string;
  image: string | JSX.Element;
}

export const Project = ({ title, description, href, image }: ProjectProps) => (
  <a href={href} target="_blank" rel="noreferrer">
    <div className="rounded-lg shadow-xl overflow-hidden bg-indigo-300 h-full transition-all hover:scale-105">
      <div className="flex gap-4 items-center bg-indigo-100">
        {typeof image === "string" ? (
          <img src={image} className="h-24 min-w-24 p-1" />
        ) : (
          image
        )}

        <h2 className="text-xl font-bold text-center flex-1 mr-4">{title}</h2>
      </div>

      <p className="text-lg text-center p-4 text-indigo-950">{description}</p>
    </div>
  </a>
);
