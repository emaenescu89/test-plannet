import styles from './Stepper.module.css';

const Stepper = ({ activeStep = 0, steps = [] }) => {

	const classes = steps.length > 0 ? steps.reduce((acc, curr) => {

		if (curr === true) {
			acc = [...acc, 'correct'];
		} else if (curr === false) {
			acc = [...acc, 'wrong'];
		} else if (acc.length === activeStep) {
			acc = [...acc, 'current'];
		} else {
			acc = [...acc, 'disabled'];
		}

		return acc;
	}, []) : [];

	return(
		<div className={styles.container}>
			{steps.length > 0 && classes.map((c, i) => <span key={`step${i}`} className={styles[c]}></span>)}
			<span></span>
		</div>
	);
}

export default Stepper;