import Layout from '@/components/layout/Layout'
import React, { useState } from 'react'

const index = ({ query }) => {
	const [searchQuery, setSearchQuery] = useState(query)
	return (
		<Layout>
			<div>
				<form
					style={{
						width: '100%',
						padding: '38px ',
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<div
						style={{
							display: 'flex',
							flex: '1',
							gap: '19px',
							alignItems: 'center',
						}}
					>
						<i class="ri-search-line"></i>
						<input
							onChange={(e) => setSearchQuery(e.target.value)}
							style={{
								border: 'none',
								flex: 1,
								padding: '4px',
								marginRight: '8px',
							}}
							className=" "
							placeholder="Search for anything"
							type="text"
						/>
					</div>
					{/* <button
							style={{
								backgroundColor: 'transparent',
								border: '1px solid #12B76A',
								padding: '10px 16px',
								borderRadius: '32px',
								color: '#12B76A',
							}}
						>
							Search
						</button> */}
				</form>
			</div>
		</Layout>
	)
}

export const getServerSideProps = async ({ query }) => {
	const { query: searchQuery } = query

	console.log(searchQuery)

	return {
		props: {
			query: searchQuery,
		},
	}
}

export default index
