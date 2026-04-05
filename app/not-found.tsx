import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-metal-900 flex flex-col items-center justify-center text-center px-4">
      <h1 className="font-display text-[12rem] leading-none text-amber-cta">404</h1>
      <h2 className="font-display text-4xl text-white mt-4 mb-8">Page Not Found</h2>
      <p className="text-metal-400 mb-10 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div className="flex gap-4">
        <Link href="/" className="bg-amber-cta text-metal-900 px-8 py-3 rounded font-semibold hover:bg-amber-light transition-colors">
          Go back home
        </Link>
        <Link href="/inventory" className="border border-metal-400 text-metal-100 px-8 py-3 rounded hover:bg-metal-800 transition-colors">
          View Inventory
        </Link>
      </div>
    </div>
  );
}
