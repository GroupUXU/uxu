import { useState, useEffect, RefObject } from 'react';

type Dimensions = {
		width: number;
		height: number;
};

export function useResizeDivObserver(ref: RefObject<HTMLDivElement>): Dimensions {
		const [dimensions, setDimensions] = useState<Dimensions>({ width: 0, height: 0 });
		
		useEffect(() => {
				if (ref.current) {
						const resizeObserver = new ResizeObserver(entries => {
								entries.forEach(entry => {
										const { width, height } = entry.contentRect;
										setDimensions({ width, height });
								});
						});
						
						resizeObserver.observe(ref.current);
						
						return () => {
								if (ref.current) {
										resizeObserver.unobserve(ref.current);
								}
						};
				}

		}, [ref]);
		
		return dimensions;
}
