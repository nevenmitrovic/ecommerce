import type { ISubscriber } from '@/components/common/subscribe/Subscribe'

export function getOptionTitle(value: string): string {
	const titleArr = value.split('_')

	return capitalize(titleArr[0]) + ' ' + capitalize(titleArr[1])
}

export function capitalize(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1)
}

export function loadSubscribersFromStorage(): ISubscriber[] {
	const subscribers = localStorage.getItem('subscribers')
	return subscribers ? (JSON.parse(subscribers) as ISubscriber[]) : []
}

export function setNewSubscriber(existingSubscribers: ISubscriber[], data: ISubscriber): void {
	if (existingSubscribers.length === 0) {
		const newSubscribers: ISubscriber[] = [{ email: data.email }]
		localStorage.setItem('subscribers', JSON.stringify(newSubscribers))
	} else {
		if (existingSubscribers.find((subscriber) => subscriber.email === data.email)) {
			throw Error('You are already subscribed')
		}

		existingSubscribers.push({ email: data.email })
		localStorage.setItem('subscribers', JSON.stringify(existingSubscribers))
	}
}
