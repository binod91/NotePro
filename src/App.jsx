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

      {/* ✅ footer */}
      <footer className={styles.footer}>
        <p>
          Made by <strong>Binod</strong> © 2026
        </p>
      </footer>
    </div>
  );
}

export default App;
