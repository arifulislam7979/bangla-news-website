const LoadingPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Glow Effect in Background */}
      <div className="absolute w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="flex flex-col items-center space-y-6 z-10">
        {/* Animated Spinner with Gradient Ring */}
        <div className="relative flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border-4 border-slate-800 border-t-indigo-500 border-r-purple-500 animate-spin" />
          <div className="absolute w-10 h-10 rounded-full bg-indigo-500/20 animate-ping" />
        </div>

        {/* Loading Text & Dots Animation */}
        <div className="flex items-center space-x-1">
          <span className="text-slate-200 font-semibold text-lg tracking-wider">
            Loading
          </span>
          <span className="inline-flex space-x-1 text-indigo-400 font-bold text-xl">
            <span className="animate-bounce [animation-delay:-0.3s]">.</span>
            <span className="animate-bounce [animation-delay:-0.15s]">.</span>
            <span className="animate-bounce">.</span>
          </span>
        </div>

        {/* Subtitle / Status */}
        <p className="text-slate-400 text-xs sm:text-sm tracking-wide">
          Please wait while we prepare your page
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
