import Link from "next/link"
import { BsArrowRightShort } from "react-icons/bs"

export default function CarouselWrapper({ idx, info, children }) {
	return (
		<Link href={`/project${idx}`} className='carousel-card' passHref>
			<a>
				{children}
				<div className='info'>
					<p>{info}</p>
					<BsArrowRightShort className='arrow' />
				</div>
			</a>
		</Link>
	)
}
