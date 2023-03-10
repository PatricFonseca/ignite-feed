import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post, PostI } from "./components/Post";

const posts: PostI[] = [
	{
		id: 1,
		author: {
			avatarUrl: "https://github.com/PatricFonseca.png",
			name: "Patric Fonseca",
			role: "Web Developer",
		},
		content: [
			{ type: "paragraph", content: "Fala galera 👋" },
			{
				type: "paragraph",
				content:
					"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
			},
			{ type: "link", content: "jane.design/doctorcare" },
		],
		publishedAt: new Date("2022-05-03 20:20:20"),
	},
	{
		id: 2,
		author: {
			avatarUrl: "https://github.com/maykbrito.png",
			name: "MaykBrito",
			role: "Educator",
		},
		content: [
			{ type: "paragraph", content: "Fala galera 👋" },
			{
				type: "paragraph",
				content:
					"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
			},
			{ type: "link", content: "jane.design/doctorcare" },
		],
		publishedAt: new Date("2022-05-22 15:20:20"),
	},
];

function App() {
	return (
		<>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map((post) => {
						return <Post key={post.id} post={post} />;
					})}
				</main>
			</div>
		</>
	);
}

export default App;
