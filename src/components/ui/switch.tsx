import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"

interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    ref={ref}
    className={cn(
      "relative inline-flex h-[24px] w-[44px] cursor-pointer rounded-full transition-colors duration-200 ease-in-out",
      "focus:outline-none focus-visible:ring focus-visible:ring-cyan-500 focus-visible:ring-opacity-75",
      "bg-cyan-950",
      "data-[state=checked]:bg-cyan-600",
      className
    )}
    {...props}
  >
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
