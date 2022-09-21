import Head from "next/head"
import Layout from "@comps/fragments/layout"
import { About, Contact, Hero, Projects, Services } from "@comps/sections"

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<Hero />
				<Services />
				<About />
				<Projects />
				<Contact />
			</Layout>
		</>
	)
}
