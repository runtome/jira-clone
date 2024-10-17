import { cn } from "@/lib/utils";

interface DottedSeparatorProps {
  className?: string;
  colour?: string;
  height?: string;
  dotSize?: string;
  gapsize?: string;
  direction?: "horizontal" | "vertical";
}

export const DottedSeparator = ({
  className,
  colour = "#d4d4d8",
  height = "2px",
  dotSize = "2px",
  gapsize = "6px",
  direction = "horizontal"
}: DottedSeparatorProps) => {

  const isHorizontal = direction === "horizontal";

  return(
    <div className={cn(
      isHorizontal ? "w-full flex items-center" : "h-full flex  flex-col items-center",
      className,
    )}>
      <div 
      className={isHorizontal ? "flex-grow" : "flex-grow-0"}
      style={{
        width: isHorizontal ? "100%" : height,
        height: isHorizontal ? height : "100%",
        backgroundImage : `radial-gradient(circle, ${colour} 25%, transparent 25%)`,
        backgroundSize: isHorizontal
         ? `${parseInt(dotSize) + parseInt(gapsize)}px ${height}` 
         : `${height} ${parseInt(dotSize) + parseInt(gapsize)}px`,
        backgroundRepeat: isHorizontal ?"repeat-x" : "repeat-y",
        backgroundPosition:"center",
      }}
    />

    </div>
  )

}