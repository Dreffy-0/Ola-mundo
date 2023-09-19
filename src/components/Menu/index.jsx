import { Link } from "react-router-dom";
import MenuLink from "../MenuLink";
import styles from "./Menu.module.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Menu() {
	return (
		<header>
			<nav className={styles.navegacao}>
				<MenuLink to="/">Início</MenuLink>
				<MenuLink to="/sobremim">Sobre Mim</MenuLink>
				<Link
					to="https://github.com/Dreffy-0"
					target="_blank"
					rel="noopener noreferrer"
				>
					<AiFillGithub size={32} />
				</Link>
				<Link
					to="https://www.linkedin.com/in/frederico-augusto-ferreira-146187227/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<AiFillLinkedin size={32} />
				</Link>
			</nav>
		</header>
	);
}
