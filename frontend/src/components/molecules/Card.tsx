interface props {
	w?: number
	h?: number

	handleClick?: () => void

	img?: string
	title?: string
	description?: string
}

export function Card({
	w = 135,
	h = 200,

	handleClick,

	img = '',
	title = 'title',
	description = 'description',
}: props) {
	return (
		<div
			style={{ width: w, height: h }}
			className={`p-10 rounded-2xl shw || transition-transform m-5 || hover:opacity-70`}
		>
			{/* IMG */}
			<div className='rounded-full w-[100px] h-[100px] bg-white/10 mx-auto'>
				<img src={img} alt=' ' className='rounded-full' />
			</div>

			<h2 className='text-center my-5 text-2xl font-black'>{title}</h2>

			<p className='text-center'>{description}</p>

			<div className=''>
				<button onClick={handleClick} className='my-2 mb-auto'>
					подробнее
				</button>
			</div>
		</div>
	)
}
