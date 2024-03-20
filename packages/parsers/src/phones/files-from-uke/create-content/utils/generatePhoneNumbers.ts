export function* generatePhoneNumbers(startNumber: number, endNumber: number): Generator<number, void> {
		let currentNumber: number = startNumber;
		while (currentNumber <= endNumber) {
				yield currentNumber;
				currentNumber++;
		}
}