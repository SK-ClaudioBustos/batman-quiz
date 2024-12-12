import style from "./styles/Loading.module.css";

export const Loading = ({ label = "Loading" }: { label?: string }) => {
    return (
        <div className={style["container-loading"]}>
            <div>
                <h1>{label}</h1>
                <div className={style["progress-bar"]}>
                    <div className={style["progress"]}></div>
                </div>
            </div>
        </div>
    );
}