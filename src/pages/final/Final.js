import { useLocation, useNavigate } from 'react-router-dom';

import styles from './Final.module.css';

const Final = () => {
	const navigate = useNavigate();
	const { state } = useLocation();
	const rightAnswers = state?.rightAnswers || 0;

	return(
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h1>World Travel Quiz</h1>
				<p>{`Congratulations, you answered ${rightAnswers} ${rightAnswers === 1 ? 'question' : 'questions'} correctly`}</p>
				<button className="accent" onClick={() => navigate('/quiz')}>Neu starten</button>
			</div>
		</div>
	);
}

export default Final;