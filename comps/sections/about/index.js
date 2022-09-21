import Image from "next/image"
import { FaUserTie } from "react-icons/fa"
import AboutImg from "@images/about-img.png"
import { Headline } from "@comps/fragments"

export default function About() {
	return (
		<div className='about' id='about'>
			<Headline
				title={"Who are we?"}
				icon={<FaUserTie className='headline-icon' />}
				info={"Team of talents, who thrive & excel at every opportunity"}
				customClass={"headline2"}
			/>
			<div className='about-container'>
				<div className='left-about'>
					<div className='static-img'>
						<Image
							objectFit='cover'
							layout='responsive'
							src={AboutImg}
							alt='About Us'
							placeholder='blurred'
						/>
					</div>
				</div>
				<div className='right-about'>
					<p>
						GoDigital is a Full-Service social marketing agency. We've been providing a wide range
						of services to clients of all industries since 2018. From targeting a specific audience
						segment, to preparing &amp; Integrating the right strategies and tactics, to producing
						and designing high-quality and engaging content, we ensure to not only successed but to
						excel in every campaign we're contributing in.
					</p>
				</div>
			</div>
		</div>
	)
}
