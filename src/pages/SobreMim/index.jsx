import PostModelo from "@/components/PostModelo";
import fotoCapa from "@/assets/sobre_mim_capa.png";
import styles from "./SobreMim.module.css";
import fotoSobreMim from "@/assets/minhaFoto.png";

export default function SobreMim() {
	return (
		<PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
			<h3 className={styles.subtitulo}>
				Olá, eu sou o Frederico Augusto!
			</h3>
			<img
				src={fotoSobreMim}
				alt="Foto do Frederico Augusto"
				className={styles.fotoSobreMim}
			/>
			<p className={styles.paragrafo}>
				Oi, tudo bem? Eu sou um estudante de Engenharia de Software e
				estou muito feliz que você se interessou por saber mais sobre
				mim. Vamos lá?
			</p>
			<p className={styles.paragrafo}>
				Eu e a informática nos conhecemos bem cedo, quando eu tinha por
				volta de 5 anos descobri o mundo dos jogos eletrônicos com um
				computador bem simples comparado com os de hoje em dia e comecei
				com sites de jogos grátis como o Click Jogos. E aos meus 7 anos
				ganhei meu primeiro console, o Playstation 2, a partir dai meu
				interesse pela informática cresceu ainda mais e comecei a querer
				conhecer tudo desse “mundo”.
			</p>
			<p className={styles.paragrafo}>
				Com o decorrer da minha infância e adolescência fui adquirindo
				conhecimentos e experimentando algumas áreas, como o
				desenvolvimento de jogos e design, mas foi quando fiz meu curso
				técnico em informática no Senac que descobri que a área que mais
				me chamava atenção era o desenvolvimento de software. Durante o
				curso, explorei áreas como manutenção de computadores,
				administração de redes e por último, mas não menos importante,
				programação. Durante essa parte do curso aprendi lógica de
				programação, gerenciar banco de dados com o MySQL Workbench e
				algumas linguagens, como JavaScript, PHP e tive minhas primeiras
				experiências com a criação de sites utilizando HTML e CSS.
			</p>
			<p className={styles.paragrafo}>
				Durante o curso tive minhas primeiras experiências com a
				realidade dev, como prazos de entregas, projetos com trabalho em
				equipe, etc.
			</p>

			<p className={styles.paragrafo}>
				Quando finalizei o ensino médio, eu já sabia que era isso que eu
				queria fazer durante minha vida, então, assim que me formei, me
				matriculei na Universidade Católica de Brasília (UCB) e escolhi
				o curso de engenharia de software. Assim que iniciei o curso,
				tive aulas para matérias que já tinha visto durante o curso
				técnico, mas com mais profundidade e detalhes teóricos.
			</p>

			<p className={styles.paragrafo}>
				Desde então, tem sido aprendizados e mais aprendizados e agora
				estou em busca do meu primeiro emprego, pois acredito que com
				isso minha carga de conhecimento irá ficar ainda mais rica, além
				das pessoas que irei conhecer que será super importante para meu
				crescimento pessoal e intelectual. Atualmente ainda faço o curso
				e sou muito feliz de ter a oportunidade de fazer parte dessa
				comunidade que tanto amo. Espero que você tenha gostado!
			</p>
		</PostModelo>
	);
}
