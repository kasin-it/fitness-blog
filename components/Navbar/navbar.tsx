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
                    <MobileNavigation className="block md:hidden" />
                    {LOGO}
                    <NavRoutes className="hidden md:inline-flex" />
                    <ModeToggle />
                </nav>
            </Container>
        </div>
    )
}
export default Navbar
