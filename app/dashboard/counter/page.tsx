import { Counter } from "@/app/shopping-cart";

export const metadata = {
	title: "Counter",
	description: "Counter Page - Dashboard",
};

export default function CounterPage() {
	return (
		<div className="flex flex-col items-center justify-center w-full h-full">
			<span>Products on shopping Cart</span>
			<Counter value={20} />
		</div>
	);
}
