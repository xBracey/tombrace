interface HeaderItem {
  label: string;
  href: string;
}

const headerItems: HeaderItem[] = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
];

export const Header = () => (
  <div className="flex items-center justify-center w-full">
    <div className="flex w-full max-w-4xl mx-auto border-b-2 border-indigo-400 items-center">
      {headerItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-md xs:text-lg md:text-2xl font-bold flex-1"
        >
          <h2 className="font-bold duration-300 text-center hover:bg-indigo-400 py-2 xs:px-1 md:p-6 pb-4 transition-all hover:text-indigo-950">
            {item.label}
          </h2>
        </a>
      ))}
    </div>
  </div>
);
