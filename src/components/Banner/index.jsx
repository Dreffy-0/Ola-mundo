import styles from "./Banner.module.css";
import circuloColorido from "@/assets/circulo_colorido.png";
import minhaFoto from "@/assets/MeuAvatar.png";

export default function Banner() {
	return (
		<div className={styles.banner}>
			<div className={styles.apresentacao}>
				<h1 className={styles.titulo}>Olá, mundo!</h1>
				<p className={styles.paragrafo}>
					Bem vindo ao meu portfólio! Meu nome é Frederico Augusto,
					sou estudante de Engenharia de software e estou em busca do
					meu primeiro emprego. Aqui posto e falo alguns detalhes os
					meus principais projetos e falo algumas curiosidades sobre
					mim, espero que goste. &#x1F917;
				</p>
			</div>

			<div className={styles.imagens}>
				<img
					className={styles.circuloColorido}
					src={circuloColorido}
					aria-hidden={true}
				/>
				<img
					className={styles.minhaFoto}
					src={minhaFoto}
					alt="Avatar do Frederico Augusto"
				/>
			</div>
		</div>
	);
}
