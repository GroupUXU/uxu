export function createNumbersRange(ranges: string): Array<number> {
		const result: number[] = [];
		const matchRange = ranges.match(/\((.*)\)/);
		if (matchRange) {
				const range = matchRange[1].split(',');
				range.forEach(part => {
						const parts = part.split('-').map(Number);
						const start: number = parts[0];
						const end: number = parts.length > 1 ? parts[1] : start;
						
						for (let i = start; i <= end; i++) {
								result.push(parseInt(ranges.replace(/\(.*\)/, i.toString()), 10));
						}
				});
		} else {
				result.push(parseInt(ranges, 10));
		}
		return result;
}