import Link from 'next/link'
import { ClockIcon } from '@/components/icons'

export default function LinkExpiredPage() {
  return (
    <div className="flex min-h-[calc(100vh-65px)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md text-center">
        <ClockIcon className="mx-auto mb-5 h-10 w-10 text-zinc-500" aria-hidden />
        <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-zinc-50 sm:text-4xl">
          This link has expired
        </h1>
        <p className="mb-8 text-zinc-400">
          The short link you followed is no longer active.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-5 py-3
            text-sm font-semibold text-zinc-950 shadow-sm transition hover:bg-amber-600 active:scale-[.97]"
        >
          Shorten a new link
        </Link>
      </div>
    </div>
  )
}
