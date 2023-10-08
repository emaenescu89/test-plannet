import styles from './Footer.module.css';
import starUrl from '../../a_star_alliance_member.svg';

const Footer = () => {
	return(
		<div className={styles.container}>
			<img alt="A start alliance member" src={starUrl} />
		</div>
	);
}

export default Footer;