import Link from "next/link"
import Image from "next/image"
import { Headline } from "@comps/fragments"
// Images
import HandImg from "@images/hero-hand.png"
import heroImg from "@images/hero-img.svg"
// ICONS
import { AiOutlineThunderbolt } from "react-icons/ai"
import { BsChevronDoubleDown, BsBriefcaseFill } from "react-icons/bs"

export default function Hero() {
	return (
		<div className='hero'>
			<div className='right-hero'>
				<Image src={heroImg} objectFit='cover' layout='responsive' alt="You're Going Viral!!" />
			</div>
			<div className='left-hero'>
				<h1>
					Let's <span>Grow</span>
					<br />
					Your <span>Business</span>
					<br />
					to the <span>Next Level</span>
				</h1>
				<div className='cta'>
					<Link href='#projects' role='button' tabIndex={0} className='btn' passHref>
						<a>
							<h5>See Work</h5>
							<BsBriefcaseFill className='btn-icon' />
						</a>
					</Link>
					<div className='scroll'>
						<p>
							Scroll for
							<br />
							more
						</p>
						<BsChevronDoubleDown className='scroll-ic' />
					</div>
				</div>
			</div>
			<div className='bottom'>
				<Headline
					title={"What we do?"}
					icon={<AiOutlineThunderbolt className='headline-icon' />}
					info={"We create customer relationships that last forever!"}
				/>
			</div>

			<div className='hero-hand'>
				<Image src={HandImg} objectFit='cover' layout='responsive' alt="It's Perfect!" />
			</div>
		</div>
	)
}
