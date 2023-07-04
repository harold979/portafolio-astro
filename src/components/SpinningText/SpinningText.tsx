import { useRef, useEffect } from 'react';

interface SpinningTextProps {
	text: string;
	size: number;
	children: React.ReactNode;
	mobile?: boolean;
}

function SpinningText({ text, size, children, mobile = false }: SpinningTextProps) {
	const length = text.length;
	const deg = 360 / length;

	const circuloRef = useRef<HTMLDivElement>(null);

	// Utiliza useEffect para controlar el estado inicial de animationPlayState
	useEffect(() => {
		const circuloElement = circuloRef.current;
		if (!circuloElement) return;

		circuloElement.style.animationPlayState = 'running';

		return () => {
			circuloElement.style.animationPlayState = 'paused';
		};
	}, []);

	return (
		<div
			className="text-texto-sft relative z-10 flex cursor-pointer select-none items-center justify-center rounded-full font-bold"
			id="circle-wrapper"
			style={{
				fontSize: `${size * 0.00425}rem`,
				width: `${size}px`,
				height: `${size}px`,
				pointerEvents: 'none',
			}}
			/* 	onClick={() => {
				 	const circuloElement = circuloRef.current;
				if (!circuloElement) return;

				const computedStyle = window.getComputedStyle(circuloElement);
				const animationPlayState = computedStyle.getPropertyValue('animation-play-state');

				if (animationPlayState === 'paused') {
					circuloElement.style.animationPlayState = 'running';
				} else if (animationPlayState === 'running') {
					circuloElement.style.animationPlayState = 'paused';
				} 
				
			}} */
		>
			<div
				ref={circuloRef}
				className={`absolute inset-0  animate-spin `}
				style={{
					animation: `spin ${size * (mobile ? 0.15 : 0.05)}s linear infinite`,
				}}
				id="circle"
			>
				<p>
					{text.split('').map((letra, i) => (
						<span
							className="absolute left-1/2 "
							key={i}
							style={{
								transform: `rotate(${i * deg}deg)`,
								transformOrigin: `0 ${size / 2}px`,
							}}
						>
							{letra}
						</span>
					))}
				</p>
			</div>
			{children}
		</div>
	);
}

export default SpinningText;
