
import Head from "next/head"

const Layout = ({ children }) => {
	return (<>
		<Head>
      <meta name="description" content="Description" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
		<div>
			{children}
		</div>
	</>)
}
export default Layout