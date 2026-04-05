export default function Loading() {
  return (
    <div className="min-h-screen bg-olive-900 flex items-center justify-center">
      <div className="flex flex-col items-center animate-pulse">
        <div className="w-16 h-16 border-4 border-amber-cta border-t-transparent rounded-full animate-spin mb-6"></div>
        <div className="font-display text-2xl text-white tracking-widest">THRIVENI CARS</div>
      </div>
    </div>
  );
}
