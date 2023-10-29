import "../styles/index.css";

export default function Button({ children }) {
	return (
		<>
			<button className="uppercase tracking-[0.4em] text-[color:hsl(36,100%,99%)] py-4 px-10 bg-[color:hsl(5,85%,63%)] my-8 rounded text-base">
				{children}
			</button>
		</>
	);
}
