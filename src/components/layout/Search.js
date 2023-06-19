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
				padding: !mobile ? ' 38px 0 ' : '8px 0',
				display: openSearchComponent ? 'block' : mobile ? 'grid' : 'none',
				marginBottom: mobile && '1rem',
				justifyContent: 'center',
			}}
			className="container"
		>
			<div
				style={{
					display: 'flex',
					justifyContent: !mobile && 'space-between',
					alignItems: 'center',
					background: '#F2F4F7',
					borderRadius: '40px',
					padding: !mobile ? '8px 16px ' : '7px 4px',
					width: mobile && '99%',
				}}
			>
				<div
					style={{
						display: 'flex',
						flex: !mobile && '1',
						gap: !mobile ? '19px' : '2px',
						alignItems: 'center',
					}}
				>
					<i className="ri-search-line"></i>
					<input
						onChange={(e) => setSearchQuery(e.target.value)}
						value={searchQuery}
						style={{
							border: 'none',
							flex: !mobile && 1,
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
						padding: !mobile ? '10px 16px' : '0 3px',
						height: mobile && '100%',
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
