import { Carousel } from "react-bootstrap"
import Image from "next/image"

export default function CarouselCard({ alt, interval, images, ...rest }) {
	return (
		<div className='img-container use-bootstrap'>
			<Carousel {...rest}>
				{images?.map((props, index) => (
					<Carousel.Item key={index} interval={interval}>
						<Image objectFit='cover' layout='responsive' {...props} />
					</Carousel.Item>
				))}
			</Carousel>
		</div>
	)
}
