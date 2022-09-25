import Image from "next/image"
import Link from "next/link"
import { FaFacebookF, FaWhatsapp, FaInstagram, FaRegCopyright } from "react-icons/fa"
import Logo from "@images/logo.svg"

const links = [
	{ href: "https://www.facebook.com/godigitaldesignn/", Icon: FaFacebookF },
	{ href: "https://www.instagram.com/godigitaldesign/", Icon: FaInstagram },
	{ href: "https://wa.me/+96178971073", Icon: FaWhatsapp },
]

export default function Footer() {
	return (
		<div className='footer'>
			<div className='social-icons'>
				{links?.map(({ href, Icon }) => (
					<a href={href} target='_blank' rel='noopener noreferrer' className='circle'>
						<Icon className='ic' />
					</a>
				))}
			</div>
			<div className='copyrights'>
				<p>Copyright</p>
				<FaRegCopyright className='copy-ic' />
				<p>2018-2021 GoDigitalDesign.</p>
				<p>All rights reserved.</p>
			</div>
			<Link href='/' className='logo' passHref>
				<a>
					<Image objectFit='cover' layout='responsive' src={Logo} alt='Go Digital Design logo' />
				</a>
			</Link>
		</div>
	)
}
