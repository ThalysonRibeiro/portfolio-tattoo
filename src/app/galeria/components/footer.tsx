export function Footer() {
  return (
    <div className="w-full h-16 flex items-center justify-center flex-col text-gray-400 bg-zinc-950 text-sm z-10">
      <p> &copy; {new Date().getFullYear()} - STIG tattoo Todos os direitos reservados.</p>
      <p>Desenvolvido por <span>Thalyson.dev</span></p>
    </div>
  )
}