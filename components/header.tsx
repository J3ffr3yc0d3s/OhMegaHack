

import Image from "next/image"
import { GlowingButton } from "@/components/ui/glowing-button"

export default function Header() {

  return (
    <header className="relative mx-2 sm:mx-4 md:mx-6 mt-4 sm:mt-6 rounded-2xl border border-accent/40 bg-gradient-to-br from-black/70 via-black/60 to-accent/10 backdrop-blur-lg py-6 sm:py-8 md:py-12 shadow-2xl shadow-accent/20">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-6">
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 tracking-normal">
            <Image
              src="/icsd-logo.png"
              alt="ICSD Logo"
              width={80}
              height={80}
              className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 drop-shadow-lg"
              priority
            />
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tighter text-foreground drop-shadow-lg md:text-5xl">
              ICSD
            </h1>
          </div>

          <div className="text-center px-2">
            <h2 className="text-base text-accent drop-shadow-lg font-extrabold sm:text-5xl">
              OHMEGAHACK 2025 
            </h2>
            <p className="mt-1 sm:mt-2 md:mt-4 text-xs sm:text-sm text-gray-300 drop-shadow-md italic font-semibold">
              {"DESIGN - INNOVATE - TAPEOUT"} 
            </p>
          </div>
        </div>
        {/* Action buttons row */}
        <div className="flex flex-row justify-between items-end mt-6 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4 md:px-8">
          {/* Register Button (left) */}
          <GlowingButton
            onClick={(e) => {
              e.preventDefault();
              window.open("https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=4jyW1JSvIkGVqWROiwFiTektmUvqliVBgIlC-tfIDcRUQllHVkxMVlNYT0hFNktNMzdFT0JUNjQwRy4u", "_blank", "noopener,noreferrer");
            }}
            color="dark"
            className="min-w-[100px] sm:min-w-[120px] md:min-w-[140px] text-xs sm:text-sm md:text-base py-2 sm:py-2.5 md:py-3 px-4 sm:px-6 md:px-8 cursor-pointer"
          >
            Register
          </GlowingButton>
          {/* Submit Button (right) */}
          <GlowingButton
            onClick={(e) => {
              e.preventDefault();
              window.open("https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=4jyW1JSvIkGVqWROiwFiTektmUvqliVBgIlC-tfIDcRUNVRUMEFKNE8zWUo5N0U3TzZWR0UzN01ZNC4u", "_blank", "noopener,noreferrer");
            }}
            color="cyan"
            className="min-w-[100px] sm:min-w-[120px] md:min-w-[140px] text-xs sm:text-sm md:text-base py-2 sm:py-2.5 md:py-3 px-4 sm:px-6 md:px-8 cursor-pointer"
          >
            Submit
          </GlowingButton>
        </div>
      </div>
    </header>
  )
}
