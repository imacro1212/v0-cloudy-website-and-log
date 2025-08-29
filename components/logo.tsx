import { Cloud, Server, Zap } from "lucide-react"

interface LogoProps {
  className?: string
  showText?: boolean
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", showText = true, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  }

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-3xl",
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        {/* Main cloud shape */}
        <div className="relative bg-gradient-to-br from-accent to-accent/80 rounded-full p-2">
          <Cloud className={`${sizeClasses[size]} text-white`} fill="currentColor" />
        </div>
        {/* Server indicator */}
        <div className="absolute -bottom-1 -right-1 bg-foreground rounded-full p-1">
          <Server className="h-3 w-3 text-background" />
        </div>
        {/* Performance indicator */}
        <div className="absolute -top-1 -left-1 bg-yellow-400 rounded-full p-1">
          <Zap className="h-2 w-2 text-black" fill="currentColor" />
        </div>
      </div>
      {showText && <span className={`font-bold text-foreground ${textSizeClasses[size]} tracking-tight`}>Cloudy</span>}
    </div>
  )
}
