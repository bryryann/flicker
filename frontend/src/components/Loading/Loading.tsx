import "./style.css";

type LoadingVariant = "spinner";
interface LoadingProps {
    variant?: LoadingVariant
}

const Loading: React.FC<LoadingProps> = ({ variant = "spinner" }) => {
    return <div className={`loading-${variant}`}></div>
}

export default Loading;
