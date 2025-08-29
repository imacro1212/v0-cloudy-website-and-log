export function BackgroundPattern() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Network grid pattern */}
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-blue-500" />
        </svg>
      </div>

      {/* Floating cloud shapes */}
      <div className="absolute top-20 left-10 w-32 h-20 bg-blue-500/15 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-16 bg-blue-500/15 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-1/4 w-28 h-18 bg-blue-500/15 rounded-full blur-xl animate-pulse delay-2000"></div>

      {/* Data flow lines */}
      <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-500/25 to-transparent"></div>
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-500/25 to-transparent"></div>

      {/* Server rack inspired elements */}
      <div className="absolute top-1/4 right-10 space-y-2">
        <div className="w-2 h-1 bg-blue-500/40 rounded-sm animate-pulse"></div>
        <div className="w-2 h-1 bg-blue-500/40 rounded-sm animate-pulse delay-500"></div>
        <div className="w-2 h-1 bg-blue-500/40 rounded-sm animate-pulse delay-1000"></div>
      </div>

      {/* Connection nodes */}
      <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-blue-500/50 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-blue-500/50 rounded-full animate-ping delay-1000"></div>
      <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-blue-500/50 rounded-full animate-ping delay-2000"></div>
    </div>
  )
}
