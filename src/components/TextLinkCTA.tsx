import { Link } from "react-router-dom";

type Props = {
  to: string;
  label: string;
};

const TextLinkCTA = ({ to, label }: Props) => {
  return (
    <div className="flex justify-center ">
      <Link
        to={to}
        className="group relative inline-flex items-center gap-2 py-4 text-sm tracking-wide text-foreground/90"
      >
        <span>{label}</span>
        <span className="inline-block opacity-70 transition duration-300 group-hover:translate-x-1.5 group-hover:opacity-100">
          →
        </span>
        <span className="pointer-events-none absolute left-0 -bottom-1 h-px w-full bg-foreground/40 transition-all duration-500 group-hover:bg-foreground/80 group-hover:scale-x-110 origin-center" />
      </Link>
    </div>
  );
};

export default TextLinkCTA;