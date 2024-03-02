import type {Status} from "../types";

export function statusMapToPL(status?: string | null): string {
		switch (status) {
				case 'success':
						return 'pozytywny';
				case 'default':
						return 'obojętny';
				case 'warning':
						return 'nieznany';
				case 'danger':
						return 'irytujący';
				case 'error':
						return 'niebezpieczny';
				default:
						return 'default';
		}
};


export function statusMapFromPL(status?: string | null): Status {
		switch (status) {
				case 'pozytywny':
						return 'success';
				case 'obojętny':
						return 'default';
				case 'nieznany':
						return 'warning';
				case 'irytujący':
						return 'danger';
				case 'niebezpieczny':
						return 'error';
				default:
						return 'default';
		}
};