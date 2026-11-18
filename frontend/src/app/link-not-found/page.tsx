import Link from 'next/link'
import { QuestionCircleIcon } from '@/components/icons'

export default function LinkNotFoundPage() {
  return (
    <div className="flex min-h-[calc(100vh-65px)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md text-center">
        <QuestionCircleIcon className="mx-auto mb-5 h-10 w-10 text-zinc-500" aria-hidden />
        <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-zinc-50 sm:text-4xl">
          This short link doesn&apos;t exist
        </h1>
        <p className="mb-8 text-zinc-400">
          It may have been deactivated, or the link was mistyped.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-xl bg-violet-500 px-5 py-3
            text-sm font-semibold text-white shadow-sm transition hover:bg-violet-600 active:scale-[.97]"
        >
          Shorten a new link
        </Link>
      </div>
    </div>
  )
}
