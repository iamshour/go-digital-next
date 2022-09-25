import { useState } from "react"
import Link from "next/link"
// Images
import logo from "@images/logo.svg"
import hands from "@images/letstalk-hands.svg"
import Image from "next/image"

export default function Navbar() {
	const [navOpen, setNavOpen] = useState(false)

	const links = [
		{ text: "Services", href: "#services" },
		{ text: "About Us", href: "#about" },
		{ text: "Our Work", href: "#projects" },
		{ text: "Lets Talk!", href: "#contact" },
	]

	return (
		<header className='navbar'>
			<div className='logo'>
				<Image src={logo} layout='intrinsic' />
			</div>
			<div
				className={`bars ${navOpen ? "open" : "close"}`}
				onClick={() => setNavOpen((prev) => !prev)}>
				<div />
				<div />
				<div />
			</div>
			<nav className={navOpen ? "open" : "closed"}>
				{links?.map(({ text, href }, idx) => (
					<Link key={text} href={href} passHref>
						<a onClick={() => setNavOpen(false)}>
							{text}
							{idx === 3 && <Image width={40} height={40} src={hands} alt='hands illustration' />}
						</a>
					</Link>
				))}
			</nav>
		</header>
	)
}
