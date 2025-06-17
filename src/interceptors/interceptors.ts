import {
	AxiosError,
	AxiosHeaders,
	type AxiosInstance,
	type AxiosResponse,
	type InternalAxiosRequestConfig,
} from 'axios'
import { toast } from 'sonner'

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
	const token = localStorage.getItem('token')

	if (token) {
		if (!config.headers) {
			config.headers = new AxiosHeaders()
		}

		config.headers.Authorization = `Bearer ${token}`
	}

	return config
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
	console.error('Request configuration error:', error.message)

	if (error.code === 'ECONNABORTED') {
		toast.error('Request timeout - check your connection')
	} else if (error.code === 'ERR_NETWORK') {
		toast.error('Network error - check your internet connection')
	} else if (error.code === 'ERR_INVALID_URL') {
		toast.error('Invalid URL configuration')
	} else {
		toast.error('Request configuration error')
	}

	return Promise.reject(error)
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
	return response
}

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
	if (error.response) {
		const status = error.response.status

		switch (status) {
			case 401:
				console.error('Unauthorized access:', error.response.data)
				toast.error('Unauthorized access')
				break
			case 403:
				console.error('Forbidden access:', error.response.data)
				toast.error('Forbidden access')
				break
			case 404:
				console.error('Resource not found:', error.response.data)
				toast.error('Resource not found')
				break
			case 500:
				console.error('Server error:', error.response.data)
				toast.error('Server error')
				break
			default:
				console.error('Error response:', error.response.data)
				toast.error(`Error: ${status}`)
		}
	} else if (error.request) {
		console.error('No response received:', error.request)
		toast.error('No response from server')
	} else {
		console.error('Error message:', error.message)
		toast.error('Something went wrong')
	}

	return Promise.reject(error)
}

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
	axiosInstance.interceptors.request.use(onRequest, onRequestError)
	axiosInstance.interceptors.response.use(onResponse, onResponseError)

	return axiosInstance
}
