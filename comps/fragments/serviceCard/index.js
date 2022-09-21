import Image from "next/image"

export default function ServiceCard({ src, text, alt }) {
	return (
		<li className='card'>
			<div className='img-wrapper'>
				<Image objectFit='cover' layout='intrinsic' src={src} alt={alt} className='card-img' />
			</div>
			<div className='info'>
				<p>{text}</p>
			</div>
		</li>
	)
}
