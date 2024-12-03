import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from "next/link"


export default function NavBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuTrigger>Logo</NavigationMenuTrigger>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/updates" legacyBehavior passHref>
            <NavigationMenuTrigger>Updates</NavigationMenuTrigger>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/faq" legacyBehavior passHref>
            <NavigationMenuTrigger>FAQ</NavigationMenuTrigger>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}