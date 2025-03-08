import Link from "next/link";

export function Header() {
  return (
    <nav className="bg-zinc-950/80 backdrop-blur-sm shadow-lg w-full z-50">
      <div
        className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center"
      >
        <div className="">
          <h1 className="text-3xl text-primary">STIG TATTOO</h1>
        </div>

        <div className="flex space-x-8">
          <Link
            href="/"
            className="font-bold text-gray-300 hover:text-primary transition-colors"
          >
            Inicio
          </Link>
          <Link
            href="/posts"
            className="font-bold text-gray-300 hover:text-primary transition-colors"
          >
            Posts
          </Link>
        </div>
      </div>
    </nav>
  )
}