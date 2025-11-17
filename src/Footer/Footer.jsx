import styles from './Footer.module.css'

const Footer = () => {
    const mailAddress = 'willdoan17@gmail.com'
    return (
        <div
            className = {`${styles['container']}`}
        >
            <h2
                className = {`${styles['footer-header']}`}
            >
                Have feedback or questions?
            </h2>
            <p
                className = {`${styles['footer-para']}`}
            >
                If you have any feedback or questions, feel free to email me! I will get back to you as soon as possible.
            </p>
            <div
                className = {`${styles['contact']}`}
            >
                <svg 
                    className = {`${styles[`mail-icon`]}`}
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    aria-hidden="true" 
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    >
                    </path>
                </svg>
                <a
                    href = {`mailto:${mailAddress}`}
                    className = {`${styles['mail-address']}`}
                >
                    {mailAddress}
                </a>
            </div>
        </div>
    )
}

export default Footer;