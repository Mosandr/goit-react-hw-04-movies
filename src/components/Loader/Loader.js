import ReactLoader from "react-loader-spinner";
import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.Loader}>
      <ReactLoader type="ThreeDots" color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default Loader;
