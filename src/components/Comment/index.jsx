import { Trash, ThumbsUp } from "phosphor-react";
import { Avatar } from "../Avatar";
import styles from "./styles.module.css";

export function Comment() {
	return (
		<div className={styles.comment}>
			<Avatar src="https://github.com/Andarist.png" hasBorder={false} />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Patric Fonseca</strong>
							<time
								title="22 de Fevereiro às 08:08h"
								dateTime="2023-02-22 08:08:08"
							>
								Cerca de 1h atrás
							</time>
						</div>

						<button title="Deletar comentário">
							<Trash size={24} />
						</button>
					</header>

					<p>Muito bom Devon, parabéns!! 👏👏</p>
				</div>

				<footer>
					<button>
						<ThumbsUp />
						Aplaudir <span>20</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
