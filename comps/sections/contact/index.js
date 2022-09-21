import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { dropOptions } from "@data/index"
// ASSETS
import guy from "@images/guy.svg"
import phone from "@images/phone.svg"
import { FcIdea } from "react-icons/fc"
import { Headline } from "@comps/fragments"

function encode(data) {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&")
}

export default function Contact() {
	const [state, setState] = useState()
	const router = useRouter()

	const handleChange = (e) => setState({ ...state, [e.target.name]: e.target.value })

	const handleSubmit = (e) => {
		e.preventDefault()
		const form = e.target
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({
				"form-name": form.getAttribute("name"),
				...state,
			}),
		})
			.then(() => router?.push(form.getAttribute("action")))
			.catch((error) => alert(error))
	}

	return (
		<div className='contact' id='contact'>
			<Headline
				title={"Got an idea?"}
				icon={<FcIdea className='headline-icon' />}
				info={"Let's help you grow and boost your sales!"}
				customClass={"headline4"}
			/>
			<div className='contact-container'>
				<div className='left-info'>
					<Image objectFit='cover' layout='intrinsic' src={guy} alt='contact information' />
				</div>
				<div className='form-container'>
					<div className='phone'>
						<Image objectFit='cover' layout='fixed' src={phone} alt='form structure' />
					</div>
					<form
						className='form'
						onSubmit={handleSubmit}
						name='contact'
						method='post'
						action='/thanks/'
						data-netlify='true'
						data-netlify-honeypot='bot-field'>
						<input type='hidden' name='contact' value='contact' />
						<p className='hidden'>
							<label id='contact-form-bot-label'>
								Don't fill this out if you're human:{" "}
								<input name='bot-field' aria-labelledby='contact-form-bot-label' />
							</label>
						</p>
						<div className='row'>
							<input type='text' name='name' onChange={handleChange} placeholder='Full name' />
						</div>
						<div className='row'>
							<input type='email' name='email' onChange={handleChange} placeholder='Email' />
						</div>
						<div className='row'>
							<label>
								Interested in:
								<select name='option' onChange={handleChange}>
									{dropOptions?.map((op, idx) => (
										<option name={op} value={op}>
											{idx === 3 && "Full"} {op} {(idx === 0 || idx === 1) && "Campaign"}
										</option>
									))}
								</select>
							</label>
						</div>
						<div className='row'>
							<textarea name='message' onChange={handleChange} placeholder='Message' />
						</div>
						<div className='row custom-row'>
							<input type='submit' />
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
