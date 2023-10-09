import styles from './Loader.module.css';
import loading from '../../loading.gif';

const Loader = () => {

	return(
		<div className={styles.container}>
			<img
				alt="Loader"
				className={styles.spinner}
				src={loading}
			/>
		</div>
	);
}

export default Loader;