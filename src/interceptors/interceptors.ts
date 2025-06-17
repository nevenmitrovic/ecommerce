import {
	AxiosError,
	type AxiosInstance,
	type AxiosRequestConfig,
	type AxiosResponse,
	type InternalAxiosRequestConfig,
} from 'axios'
import { toast } from 'sonner'

const onRequest = (config: AxiosRequestConfig): InternalAxiosRequestConfig => {
	return config as InternalAxiosRequestConfig
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
	if (error.request) {
		if (error.request.status === 401) {
			console.error('Unauthorized access:', error.request.data)
			toast.error('Unauthorized access')
		} else if (error.request.status === 403) {
			console.error('Forbidden access:', error.request.data)
			toast.error('Forbidden access')
		} else if (error.request.status === 404) {
			console.error('Resource not found:', error.request.data)
			toast.error('Resource not found')
		} else if (error.request.status === 500) {
			console.error('Server error:', error.request.data)
			toast.error('Server errror')
		} else {
			console.error('Error request:', error.request.data)
			toast.error('Error request')
		}
	} else if (error.response) {
		console.error('No response:', error.request)
		toast.error('No response')
	} else {
		console.error('Error message:', error.message)
		toast.error('something went wrong')
	}
	return Promise.reject(error)
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
	return response
}

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
	if (error.response) {
		// add toast
		if (error.response.status === 401) {
			console.error('Unauthorized access:', error.response.data)
			toast.error('Unauthorized access')
		} else if (error.response.status === 403) {
			console.error('Forbidden access:', error.response.data)
			toast.error('Forbidden access')
		} else if (error.response.status === 404) {
			console.error('Resource not found:', error.response.data)
			toast.error('Resource not found')
		} else if (error.response.status === 500) {
			console.error('Server error:', error.response.data)
			toast.error('Server errror')
		} else {
			console.error('Error response:', error.response.data)
			toast.error('Error response')
		}
	} else if (error.request) {
		console.error('No requst:', error.request)
		toast.error('No request')
	} else {
		console.error('Error message:', error.message)
		toast.error('something went wrong')
	}
	return Promise.reject(error)
}

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
	axiosInstance.interceptors.request.use(onRequest, onRequestError)
	axiosInstance.interceptors.response.use(onResponse, onResponseError)
	return axiosInstance
}
