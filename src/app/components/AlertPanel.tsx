import styles from "../styles/Dashboard.module.css";

interface Alert {
  id: string;
  message: string;
  time: string;
}

interface AlertPanelProps {
  alerts: Alert[];
}

export default function AlertPanel({ alerts }: AlertPanelProps) {
  return (
    <section className={styles.panel}>
      <h2 className={styles.alertTitle}>⚠️ Alertas</h2>
      {alerts.length === 0 ? (
        <p className={styles.noAlert}>Nenhuma ruptura no momento.</p>
      ) : (
        <ul className={styles.alertList}>
          {alerts.map((a) => (
            <li key={a.id} className={styles.alertItem}>
              <p>{a.message}</p>
              <span>{a.time}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
