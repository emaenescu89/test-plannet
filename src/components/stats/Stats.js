import styles from './Stats.module.css';

const Stats = ({ color = 'green', percentage = 0, text = '' }) => {
	const width = `${percentage}%`;

	return(
		<div className={styles.container}>
			<div className={styles.progressContainer}>
				<div className={`${styles.progress} ${styles[color]}`} style={{width}}></div>
			</div>
			<p>{width} {text}</p>
		</div>
	);
}

export default Stats;