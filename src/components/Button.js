import "../styles/index.css";
import PropTypes from "prop-types";

Button.propTypes = {
	children: PropTypes.any
};

export default function Button({ children }) {
	return (
		<>
			<button className="uppercase tracking-[0.4em] text-[color:hsl(36,100%,99%)] py-4 hover:bg-[color:hsl(240,100%,5%)] px-10 bg-[color:hsl(5,85%,63%)] mt-8 mb-0 rounded text-base">
				{children}
			</button>
		</>
	);
}
