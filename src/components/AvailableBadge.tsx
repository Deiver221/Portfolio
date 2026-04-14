export default function AvailableBadge() {
  return (
    <>
      <style>{`
        @keyframes rotate {
          100% {
            transform: rotate(1turn);
          }
        }

        .rainbow::before {
          content: '';
          position: absolute;
          z-index: -2;
          left: -50%;
          top: -50%;
          width: 200%;
          height: 200%;
          background-position: 100% 50%;
          background-repeat: no-repeat;
          background-size: 50% 30%;
          filter: blur(6px);
          background-image: linear-gradient(#00F5FF, #0080FF);
          animation: rotate 4s linear infinite;
        }
      `}</style>
      <div className="rainbow relative z-0 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
        <span className="px-4 text-sm py-1.5 text-white rounded-full font-medium bg-[#0a0a0f]/90 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse inline-block"></span>
          Disponible para trabajar
        </span>
      </div>
    </>
  )
}