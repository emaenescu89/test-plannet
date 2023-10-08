import styles from './AnswerCard.module.css';

const AnswerCard = ({ correctAnswer, description = '', title = '' }) => {

	return(
		<div className={styles.container}>
			<div className={`${styles.header} ${correctAnswer ? styles.correct : styles.wrong}`}>
				{correctAnswer && <h3>Richtig</h3>}
				{!correctAnswer && <h3>Falsch</h3>}
			</div>
			<div className={styles.content}>
				<div className={styles.title}>{title}</div>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default AnswerCard;