import { VscGithubInverted } from "react-icons/vsc"
import styles from "./styles.module.scss"

export function LoginBox(): JSX.Element {
  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href="#" className={styles.signInWithGithub}>
        <VscGithubInverted size="1.5rem" />
        Entrar com Github
      </a>
    </div>
  )
}
