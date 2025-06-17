import { ClipLoader } from 'react-spinners'

import './spinner.style.css'

const Spinner = () => {
	return (
		<div className='spinner-container'>
			<ClipLoader color='var(--clr-indigo)' loading={true} size={40} />
		</div>
	)
}

export default Spinner
