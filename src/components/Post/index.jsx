import styles from "./styles.module.css";

export function Post() {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<img src="https://github.com/PatricFonseca.png" alt="" />
					<div className={styles.authorInfo}>
						<strong>Patric Fonseca</strong>
						<span>Web Developer</span>
					</div>
				</div>

				<time title="22 de Fevereiro às 08:08h" dateTime="2023-02-22 08:08:08">
					Publicado há 1h
				</time>
			</header>

			<div className={styles.content}>
				<p>Fala galeraa</p>
				<p>
					👋 Acabei de subir mais um projeto no meu portifa. É um projeto que
					fiz no NLW Return, evento da Rocketseat. O nome do projeto é
					DoctorCare 🚀
				</p>
				<p>
					👉 <a href="#">jane.design/doctorcare</a>
				</p>
				<p>
					<a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
					<a href="">#rocketseat</a>
				</p>
			</div>

			<form className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>
				<textarea placeholder="Deixe um comentário" />
				<footer>
					<button type="submit">Publicar</button>
				</footer>
			</form>
		</article>
	);
}
