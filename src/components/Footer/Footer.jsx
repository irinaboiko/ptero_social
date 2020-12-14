import React from 'react';
import styles from './Footer.module.css';

/*const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>Made with love by Irene</div>
        </footer>
    );
}*/

class Footer extends React.Component {
    render() {
        return (
            <footer className={styles.footer}>
                <div>Made with love by Irene</div>
            </footer>
        );
    }
}

export default Footer;