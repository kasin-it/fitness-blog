import { LOGO } from "@/constants/logo"

import { ModeToggle } from "../ui/mode-toggle"
import MobileNavigation from "./mobile-navigation"
import NavRoutes from "./nav-routes"

function Navbar() {
    return (
        <div className="flex w-full justify-center py-10">
            <nav className="flex w-full max-w-[1920px] items-center justify-between px-10">
                {LOGO}
                <NavRoutes className="hidden md:inline-flex" />
                <div className="items flex">
                    <MobileNavigation className="block md:hidden" />
                    <ModeToggle />
                </div>
            </nav>
        </div>
    )
}
export default Navbar
