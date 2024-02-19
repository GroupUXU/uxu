import type {ReputationTyp} from "../types";

export function setReputationPL(reputationEn?: ReputationTyp | null): string {
		switch (reputationEn) {
				case 'positive':
						return 'Pozytywny';
				case 'inert':
						return 'Obojętny';
				case 'annoying':
						return 'Irytujący';
				case 'negative':
						return 'Negatywny';
				case 'warning':
				default:
						return 'Nieznany';
		}
}