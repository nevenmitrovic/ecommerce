import Spinner from '@/components/common/spinner/Spinner'
import './page-loading.style.css'

const PageLoading = () => {
	return (
		<div className='page-loading-container'>
			<div className='page-loading-content'>
				<Spinner />
				<p className='page-loading-text'>Loading page...</p>
			</div>
		</div>
	)
}

export default PageLoading
