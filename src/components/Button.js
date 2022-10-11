import { useTheme } from "../context/ThemeContext";

function Button() {
	const { theme, setTheme } = useTheme();

	return (
		<div className = "button-div">
			<h4 className = "text">{theme} theme</h4>
			<br />
			<button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className ={`btn button ${theme}`}>
				Change Theme
			</button>
		</div>
	);
}

export default Button;
