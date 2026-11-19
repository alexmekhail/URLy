import Link from 'next/link'

function GridIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="1" y="1" width="6" height="6" rx="1.2" />
      <rect x="9" y="1" width="6" height="6" rx="1.2" />
      <rect x="1" y="9" width="6" height="6" rx="1.2" />
      <rect x="9" y="9" width="6" height="6" rx="1.2" />
    </svg>
  )
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3.5">
        <Link
          href="/"
          className="flex items-baseline gap-0 transition-opacity hover:opacity-75"
          aria-label="URLy home"
        >
          <span className="font-mono text-[17px] font-medium tracking-tight text-white/40">/</span>
          <span className="font-mono text-[17px] font-bold tracking-tight text-violet-400">y</span>
        </Link>

        <nav>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-zinc-400 transition-colors hover:border-white/20 hover:bg-white/[0.07] hover:text-zinc-100"
          >
            <GridIcon className="h-3.5 w-3.5" />
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  )
}
