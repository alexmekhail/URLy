import Link from 'next/link'
import { ShieldWarningIcon } from '@/components/icons'

export default function LinkUnsafePage() {
  return (
    <div className="flex min-h-[calc(100vh-65px)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md text-center">
        <ShieldWarningIcon className="mx-auto mb-5 h-10 w-10 text-red-400/70" aria-hidden />
        <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-zinc-50 sm:text-4xl">
          This link was flagged as unsafe
        </h1>
        <p className="mb-8 text-zinc-400">
          The destination was flagged by Google Safe Browsing and this short link has
          been deactivated to protect you.
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
