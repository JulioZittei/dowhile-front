import styles from "./styles.module.scss"
import logo from "../../assets/logo.svg"

export function MessageList(): JSX.Element {
  return (
    <div className={styles.messageListWrapper}>
      <img src={logo} alt="DoWhile 2021" />
      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            tenetur autem accusamus voluptates repudiandae animi, nobis ratione
            cumque. Repellendus a facere et, harum iusto atque ipsum. Temporibus
            placeat non et.
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src="https://github.com/juliozittei.png"
                alt="Julio Zittei"
              />
            </div>
            <span>Julio Zittei</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            tenetur autem accusamus voluptates repudiandae animi, nobis ratione
            cumque. Repellendus a facere et, harum iusto atque ipsum. Temporibus
            placeat non et.
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src="https://github.com/juliozittei.png"
                alt="Julio Zittei"
              />
            </div>
            <span>Julio Zittei</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            tenetur autem accusamus voluptates repudiandae animi, nobis ratione
            cumque. Repellendus a facere et, harum iusto atque ipsum. Temporibus
            placeat non et.
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/diego3g.png" alt="Julio Zittei" />
            </div>
            <span>Julio Zittei</span>
          </div>
        </li>
      </ul>
    </div>
  )
}
