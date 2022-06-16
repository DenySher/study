import styles from './Header.module.scss'

const Header = () => {
    return (
        <>
        <header className={styles.header}>
            <div className={styles.logo}>LOGO</div>
            <ul className={styles.navMenu}>
                <li>О компании</li>
                <li>Контрактное производство</li>
                <li>Собственные торговые марки</li>
                <li>Новости</li>
                <li>Контакты</li>
            </ul>
            <div className={styles.contactsFeedback}>
                <p>+7 (499) 686-10-14</p>
                <button>Получить консультацию</button>
            </div>
        </header>
        </>
    )
}

export default Header