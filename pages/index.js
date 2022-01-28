import Head from "next/head";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Home - All Days Task</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Link href='/day01'><a><h3>Day01 - HTML : Doctype, Head, HTML, Title, Tags</h3> </a></Link>
		</div>
	)
}
