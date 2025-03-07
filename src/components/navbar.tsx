import { TubeLightNavBar } from "./ui/tubelight-navbar"
import { navItems } from '../lib/constants'

export function NavBar() {
  return <TubeLightNavBar items={navItems} />
}