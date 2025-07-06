export function Logo() {
	const handleClick = () => {
		location.href = '/'
	}
	return (
		<div className='cursor-pointer' onClick={handleClick}>
			<span className='text-[20px] font-bold'>syntax</span>
		</div>
	)
}
