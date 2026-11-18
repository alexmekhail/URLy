'use client'

import { useEffect, useRef, useState } from 'react'
import { shortenUrl } from '@/lib/api'
import { ApiError } from '@/types'
import Spinner from '@/components/Spinner'
import QrCode from '@/components/QrCode'
import { CheckIcon, WarningIcon } from '@/components/icons'

const EXPIRATION_LABELS: Record<string, string> = {
  '': 'Never expires',
  '1h': 'Expires in 1 hour',
  '1d': 'Expires in 1 day',
  '7d': 'Expires in 7 days',
  '30d': 'Expires in 30 days',
}

const ALIAS_PATTERN = /^[A-Za-z0-9_-]{3,30}$/

export default function HomePage() {
  const [inputUrl, setInputUrl] = useState('')
  const [expiresIn, setExpiresIn] = useState('')
  const [alias, setAlias] = useState('')
  const [previewHost, setPreviewHost] = useState('url-y.net')
  const [shortUrl, setShortUrl] = useState<string | null>(null)
  const [resultExpiresIn, setResultExpiresIn] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const resultRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setPreviewHost(window.location.host)
  }, [])

  useEffect(() => {
    if (shortUrl && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }, [shortUrl])

  const aliasFormatError =
    alias && !ALIAS_PATTERN.test(alias)
      ? 'Alias must be 3–30 characters: letters, numbers, hyphens, underscores.'
      : null

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setShortUrl(null)

    if (aliasFormatError) {
      setError(aliasFormatError)
      return
    }

    setLoading(true)

    try {
      const result = await shortenUrl(inputUrl, expiresIn, alias || undefined)
      setShortUrl(result)
      setResultExpiresIn(expiresIn)
    } catch (err) {
      setError(
        err instanceof ApiError
          ? err.message
          : 'Something went wrong. Please try again.',
      )
    } finally {
      setLoading(false)
    }
  }

  async function handleCopy() {
    if (!shortUrl) return
    try {
      await navigator.clipboard.writeText(shortUrl)
      setCopied(true)
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current)
      copyTimerRef.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API unavailable (e.g. non-HTTPS) — fall back silently
    }
  }

  return (
    <div className="flex min-h-[calc(100vh-65px)] items-center justify-center px-6 py-16">
      <div className="w-full max-w-5xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left — brand + pitch */}
          <div>
            <p className="mb-8 text-xs font-bold uppercase tracking-[0.15em] text-violet-400">
              URLy
            </p>
            <h1 className="mb-5 text-4xl font-extrabold leading-[1.1] tracking-[-0.03em] text-zinc-50 sm:text-5xl">
              Share any link,{' '}
              <span className="text-violet-400">instantly.</span>
            </h1>
            <p className="mb-8 max-w-sm text-sm leading-relaxed text-zinc-500">
              No sign-up required. Paste any URL and get a short link in one click.
            </p>
            <ul className="space-y-3">
              {['Custom alias', 'QR code included', 'Link analytics'].map((feat) => (
                <li key={feat} className="flex items-center gap-3 text-sm text-zinc-500">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500/50" aria-hidden />
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form + result */}
          <div>
            <form onSubmit={handleSubmit} noValidate>
              <div className="glass space-y-3 rounded-2xl border border-white/10 p-5 shadow-violet-glow">

                {/* URL input */}
                <label htmlFor="url-input" className="sr-only">
                  Long URL
                </label>
                <input
                  id="url-input"
                  type="url"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  placeholder="https://example.com/your/very/long/path"
                  required
                  className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-4 py-3.5 font-mono text-sm text-zinc-100 transition
                    placeholder:text-zinc-600
                    focus:border-violet-500/25 focus:outline-none focus:ring-2 focus:ring-violet-500/15
                    disabled:opacity-60"
                  disabled={loading}
                  aria-describedby={error ? 'url-error' : undefined}
                />

                {/* Custom alias row */}
                <div className="overflow-hidden rounded-xl border border-white/10 bg-zinc-950/60">
                  <div className="flex items-center">
                    <span className="shrink-0 select-none border-r border-white/10 px-3 py-3.5 font-mono text-xs text-zinc-600">
                      {previewHost}/
                    </span>
                    <label htmlFor="alias-input" className="sr-only">
                      Custom alias
                    </label>
                    <input
                      id="alias-input"
                      type="text"
                      value={alias}
                      onChange={(e) => setAlias(e.target.value)}
                      placeholder="custom-alias  (optional)"
                      disabled={loading}
                      className="min-w-0 flex-1 bg-transparent px-3 py-3.5 font-mono text-sm text-zinc-100 placeholder:text-zinc-600
                        focus:outline-none disabled:opacity-60"
                    />
                  </div>
                  {aliasFormatError && (
                    <p className="border-t border-white/10 px-3 py-2 text-xs text-red-400" role="alert">
                      {aliasFormatError}
                    </p>
                  )}
                </div>

                {/* Expiry + submit */}
                <div className="flex items-center gap-3">
                  <label htmlFor="expires-select" className="shrink-0 text-xs font-medium text-zinc-500">
                    Expires
                  </label>
                  <select
                    id="expires-select"
                    value={expiresIn}
                    onChange={(e) => setExpiresIn(e.target.value)}
                    disabled={loading}
                    className="flex-1 rounded-lg border border-white/10 bg-zinc-900/60 px-3 py-2 text-xs text-zinc-300 transition
                      focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/10
                      disabled:opacity-60"
                  >
                    <option value="">Never</option>
                    <option value="1h">1 hour</option>
                    <option value="1d">1 day</option>
                    <option value="7d">7 days</option>
                    <option value="30d">30 days</option>
                  </select>
                  <button
                    type="submit"
                    disabled={loading || !inputUrl}
                    className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-violet-500 px-5 py-2.5
                      text-sm font-bold text-white shadow-sm transition
                      hover:bg-violet-600 active:scale-[.97]
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950
                      disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {loading && <Spinner />}
                    {loading ? 'Shortening…' : 'Shorten →'}
                  </button>
                </div>
              </div>

              {/* Inline error */}
              {error && (
                <p
                  id="url-error"
                  className="mt-3 flex items-start gap-1.5 px-1 text-sm text-red-400"
                  role="alert"
                >
                  <WarningIcon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                  {error}
                </p>
              )}
            </form>

            {/* Success result */}
            {shortUrl && (
              <div
                ref={resultRef}
                className="mt-6 animate-scale-in rounded-2xl border border-white/10 bg-zinc-900/60 p-5 shadow-violet-glow backdrop-blur-sm"
                role="region"
                aria-label="Your short link"
              >
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                  Your short link
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-0 flex-1 truncate rounded-lg border border-white/10 bg-zinc-950/60 px-3 py-2.5
                      font-mono text-sm text-zinc-100 underline decoration-dotted underline-offset-2 transition
                      hover:border-violet-500/30 hover:text-violet-400"
                  >
                    {shortUrl}
                  </a>
                  <button
                    onClick={handleCopy}
                    className={`shrink-0 flex items-center gap-1.5 rounded-lg border px-4 py-2.5
                      text-xs font-semibold shadow-sm transition active:scale-95
                      ${copied
                        ? 'border-violet-500/30 bg-violet-500/10 text-violet-400'
                        : 'border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10 hover:border-white/20'
                      }`}
                    aria-label={copied ? 'Link copied!' : 'Copy short link'}
                  >
                    {copied ? (
                      <>
                        <CheckIcon className="h-3.5 w-3.5" aria-hidden />
                        Copied!
                      </>
                    ) : (
                      'Copy'
                    )}
                  </button>
                </div>
                <p className="mt-3 text-xs text-zinc-500">{EXPIRATION_LABELS[resultExpiresIn]}</p>

                <div className="mt-5 flex justify-center border-t border-white/10 pt-5">
                  <QrCode value={shortUrl} />
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}
