import styles from "./App.module.scss"
import { LoginBox } from "./components/LoginBox"
import { MessageList } from "./components/MessageList"

export function App(): JSX.Element {
  return (
    <main className={styles.contentWrapper}>
      <MessageList />
      <LoginBox />
    </main>
  )
}
