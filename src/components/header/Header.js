import { useNavigate } from 'react-router-dom';

import styles from './Header.module.css';
import logo from '../../logo_head_experts.svg';

const Header = () => {
	const navigate = useNavigate();

	return(
		<div className={styles.container}>
			<img
				alt="logo"
				className={styles.logo}
				src={logo}
				onClick={() => navigate('/')}
			/>
		</div>
	);
}

export default Header;