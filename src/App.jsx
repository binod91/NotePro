import NotePage from "./pages/NotePage";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>📝 Note Pro</h1>
        <p>Your personal note taking app</p>
      </header>
      <main className={styles.main}>
        <NotePage />
      </main>
    </div>
  );
}

export default App;
