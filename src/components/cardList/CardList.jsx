import Pagination from "../pagination/Pagination";
import styles from "./cardList.module.css"

const CardList = () => {

    return (
        <div className={styles.container}>
            <h2>Card List</h2>
            <Pagination /> 
        </div>
    )
};

export default CardList