import Button from "./Button";

import { useTheme } from "../context/ThemeContext";

function Container() {
	const { theme } = useTheme();

	return (
		<div className={`app ${theme}`}>
			<Button />
		</div>
	);
}

export default Container;
