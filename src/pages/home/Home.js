import { useNavigate } from 'react-router-dom';

import styles from './Home.module.css';

const Home = () => {
	const navigate = useNavigate();

	return(
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h1>World Travel Quiz</h1>
				<p> Wir wünschen viel Spaß und viel Erfolg</p>
				<button className="accent" onClick={() => navigate('/quiz')}>Spiel starten</button>
			</div>
		</div>
	);
}

export default Home;