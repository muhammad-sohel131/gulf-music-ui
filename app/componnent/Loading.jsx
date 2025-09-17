import styles from "../styles/Loading.module.css";

const Loading = () => {
    return (
        <div className="fixed top-0 left-0 bg-gray-700 opacity-80 w-screen h-screen flex items-center justify-center z-50">
            <div className={styles.loader}></div>
        </div>
    )
}


export default Loading;