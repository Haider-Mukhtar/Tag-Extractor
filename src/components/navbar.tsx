import { Home, Phone , Briefcase, Info  } from 'lucide-react'
import { TubeLightNavBar } from "./ui/tubelight-navbar"

export function NavBar() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Tools', url: '/', icon: Briefcase },
    { name: 'About', url: '/', icon: Info },
    { name: 'Contact', url: '/', icon: Phone }
  ]

  return <TubeLightNavBar items={navItems} />
}