import { useState } from "react"
import Link from "next/link"
// Images
import logo from "@images/logo.svg"
import hands from "@images/letstalk-hands.svg"
import Image from "next/image"

export default function Navbar() {
	const [click, setClick] = useState(false)

	const links = [
		{ text: "Services", href: "#services" },
		{ text: "About Us", href: "#about" },
		{ text: "Our Work", href: "#projects" },
		{ text: "Lets Talk!", href: "#contact" },
	]

	return (
		<header className='navbar'>
			<Link href='/' className='logo' passHref>
				<a>
					<img src={logo} alt='' />
				</a>
			</Link>
			<div
				className='bars'
				onClick={() => setClick((prev) => !prev)}
				onKeyUp={() => setClick((prev) => !prev)}
				role='button'
				tabIndex={0}>
				<div className={click ? "open" : "close"}></div>
				<div className={click ? "open" : "close"}></div>
				<div className={click ? "open" : "close"}></div>
			</div>
			<nav className={click ? "show" : "hide"}>
				<div className='container'>
					{links?.map(({ text, href }, idx) => (
						<Link key={text} href={href} passHref>
							<a onClick={() => setClick(false)}>
								{text}{" "}
								{idx === 3 && <Image width={40} height={40} src={hands} alt='hands illustration' />}
							</a>
						</Link>
					))}
				</div>
			</nav>
		</header>
	)
}
