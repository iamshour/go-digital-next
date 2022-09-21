import { useState } from "react"
import { CgAdd, CgRemove } from "react-icons/cg"
import { CarouselCard, CarouselWrapper, Headline } from "@comps/fragments"
import { bottomProjects, topProjects } from "@data/index"
import { MdWork } from "react-icons/md"

export default function Projects() {
	const [toggle, setToggle] = useState(false)

	return (
		<div className='projects' id='projects'>
			<Headline
				title={"What we did?"}
				icon={<MdWork className='headline-icon' />}
				info={"Check out some of our featured work, and get inspired!"}
				customClass={"headline3"}
			/>
			<div className='projects-container'>
				<div className='top-projects'>
					{topProjects?.map((props) => (
						<CarouselWrapper key={props?.idx} idx={props?.idx} info={props?.info}>
							<CarouselCard
								fadeSlide={true}
								controls={false}
								touch={false}
								indicators={false}
								{...props}
							/>
						</CarouselWrapper>
					))}
				</div>
				<div className={`bottom-projects ${toggle ? "show-bottom" : "hide-bottom"}`}>
					{bottomProjects?.map((props) => (
						<CarouselWrapper key={props?.idx} idx={props?.idx} info={props?.info}>
							<CarouselCard
								fadeSlide={true}
								controls={false}
								touch={false}
								indicators={false}
								{...props}
							/>
						</CarouselWrapper>
					))}
				</div>
				<button
					className='btn'
					role='button'
					tabIndex={0}
					onClick={() => setToggle(!toggle)}
					onKeyDown={() => setToggle(!toggle)}>
					<h5>{toggle ? "view less" : "view more"}</h5>
					{toggle ? <CgRemove className='btn-icon' /> : <CgAdd className='btn-icon' />}
				</button>
			</div>
		</div>
	)
}
