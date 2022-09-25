import Link from "next/link"
import { BsArrowRightShort } from "react-icons/bs"

export default function CarouselWrapper({ idx, info, children }) {
	return (
		<Link href={`/project${idx}`} passHref>
			<a className='carousel-card'>
				{children}
				<div className='info'>
					<p>{info}</p>
					<BsArrowRightShort className='arrow' />
				</div>
			</a>
		</Link>
	)
}
