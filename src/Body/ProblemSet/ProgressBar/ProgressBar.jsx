import styles from './ProgressBar.module.css'

const ProgressBar = ({ currentValue, maxValue, className, style }) => {
    // Input validation and safety checks
    const safeCurrent = Math.max(0, Number(currentValue) || 0);
    const safeMax = Math.max(1, Number(maxValue) || 1); // Prevent division by zero
    const percentage = Math.min(100, (safeCurrent / safeMax) * 100);

    const ProgressBarStyles = {
        ...style,
        background: `linear-gradient(to right, rgb(16 185 129) ${percentage}%, rgb(209 213 219) ${percentage}%)`,
    }

    return (
        <div
            style={ProgressBarStyles}
            className={`${styles.container} ${className}`}
            role="progressbar"
            aria-valuenow={safeCurrent}
            aria-valuemin={0}
            aria-valuemax={safeMax}
            aria-label={`Progress: ${percentage.toFixed(1)}%`}
        />
    )
}

export default ProgressBar