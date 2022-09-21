import { useState } from "react"
import { bottomServices, topServices } from "@data/index"
import { CgAdd, CgRemove } from "react-icons/cg"
import { ServiceCard } from "@comps/fragments"

export default function Services() {
	const [toggle, setToggle] = useState(false)

	const toggleHandler = () => setToggle(!toggle)

	return (
		<div className='services' id='services'>
			<ul className='services-top'>
				{topServices?.map((props) => (
					<ServiceCard key={props?.alt} {...props} />
				))}
			</ul>
			<ul className={`services-bottom ${toggle ? "show-bottom" : "hide-bottom"}`}>
				{bottomServices?.map((props) => (
					<ServiceCard key={props?.alt} {...props} />
				))}
			</ul>
			<div
				className='btn'
				role='button'
				tabIndex={0}
				onClick={toggleHandler}
				onKeyDown={toggleHandler}>
				<h5>{toggle ? "view less" : "view more"}</h5>
				{toggle ? <CgRemove className='btn-icon' /> : <CgAdd className='btn-icon' />}
			</div>
		</div>
	)
}
