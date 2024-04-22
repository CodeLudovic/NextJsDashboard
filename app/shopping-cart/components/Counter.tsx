"use client";

import React, { useState } from "react";

interface CounterProps {
	value: number;
}

export const Counter = ({ value = 0 }: CounterProps) => {
	const [count, setCount] = useState(value);

	return (
		<div className="flex flex-col items-center">
			<span className="text-9xl">{count}</span>
			<div className="flex flex-row gap-3">
				<button
					onClick={() => setCount(count - 1)}
					className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[90px] mr-2">
					-1
				</button>
				<button
					onClick={() => setCount(count + 1)}
					className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[90px] mr-2">
					+1
				</button>
			</div>
		</div>
	);
};
