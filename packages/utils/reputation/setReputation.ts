import {ReputationTyp, InfoTyp} from '../types'

export function setReputation(info: InfoTyp | null): ReputationTyp {
		if (!info) return 'inert';
		switch (info) {
				case "success":
						return 'positive'
				case 'warning':
						return 'warning'
				case 'danger':
						return 'annoying'
				case 'error':
						return 'negative'
				case "default":
				default:
						return 'inert'
		}
}