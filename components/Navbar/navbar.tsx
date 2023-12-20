import { LOGO } from "@/constants/logo"

import Container from "../ui/container"
import { ModeToggle } from "../ui/mode-toggle"
import MobileNavigation from "./mobile-navigation"
import NavRoutes from "./nav-routes"

function Navbar() {
    return (
        <div className="flex w-full justify-center py-10">
            <Container>
                <nav className="flex w-full items-center justify-between">
                    {LOGO}
                    <NavRoutes className="hidden md:inline-flex" />
                    <div className="items flex">
                        <MobileNavigation className="block md:hidden" />
                        <ModeToggle />
                    </div>
                </nav>
            </Container>
        </div>
    )
}
export default Navbar
