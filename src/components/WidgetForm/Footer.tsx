import { Heart } from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer>
    <span className="text-[1.2rem] text-gray-400 flex items-center gap-[0.5rem] ">
      Feito com
      <Heart color="#cecece" weight="fill" size={14} /> por
      <a href="www.SmadCode.com" className="underline underline-offset-4">
        Mauro Dennis
      </a>
    </span>
  </footer>
  )
}
