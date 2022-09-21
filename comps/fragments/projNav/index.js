import Link from "next/link"
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs"

export default function ProjNav({ link1, link2, text1, text2 }) {
	return (
		<div className='projNav'>
			<Link href={link1} class='prev' passHref>
				<a>
					<h2>Prev</h2>
					<BsArrowLeftShort className='arrow' />
					<p>{text1}</p>
				</a>
			</Link>
			<Link href={link2} class='next' passHref>
				<a>
					<h2>Next</h2>
					<BsArrowRightShort className='arrow' />
					<p>{text2}</p>
				</a>
			</Link>
		</div>
	)
}
