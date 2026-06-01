import Link from "next/link";

export default function GoHomeLink() {
  return (
    <div className="flex justify-center pb-8">
      <Link
        href="/"
        className="group flex items-center gap-2 text-sm text-white/30 hover:text-white/70 transition-all duration-300 tracking-[0.15em] lowercase"
      >
        <span className="group-hover:-translate-x-1 transition-transform duration-300">
          ←
        </span>
        home
      </Link>
    </div>
  );
}
