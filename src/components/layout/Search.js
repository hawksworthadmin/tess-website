const { useRouter } = require('next/router')

const Search = ({
	searchQuery,
	setSearchQuery,
	openSearchComponent,
	setOpenSearchComponent,
	mobile,
}) => {
	const router = useRouter()

	const handleSubmit = (e) => {
		e.preventDefault()
		router.push(`/search?query=${searchQuery}`)
	}
	return (
		<form
			onSubmit={handleSubmit}
			style={{
				width: '100%',
				padding: !mobile ? ' 38px 0 ' : '5px',
				display: openSearchComponent ? 'block' : mobile ? 'block' : 'none',
				marginBottom: mobile && '1rem',
			}}
			className="container"
		>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					background: '#F2F4F7',
					borderRadius: '40px',
					padding: !mobile ? '8px 16px ' : '5px',
				}}
			>
				<div
					style={{
						display: 'flex',
						flex: !mobile && '1',
						gap: '19px',
						alignItems: 'center',
					}}
				>
					<i className="ri-search-line"></i>
					<input
						onChange={(e) => setSearchQuery(e.target.value)}
						value={searchQuery}
						style={{
							border: 'none',
							flex: 1,
							padding: '4px',
							marginRight: '8px',
							background: 'transparent',
						}}
						className=" "
						placeholder="Search for anything"
						type="text"
					/>
				</div>
				<button
					style={{
						backgroundColor: 'transparent',
						border: '1px solid #12B76A',
						padding: !mobile ? '10px 16px' : '4px',
						borderRadius: '32px',
						color: '#12B76A',
					}}
				>
					Search
				</button>
			</div>
		</form>
	)
}

export default Search
