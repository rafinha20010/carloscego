import styles from "../styles/Dashboard.module.css";

interface Order {
  id: number;
  cliente: string;
  status: string;
}

export default function OrderTable({ orders }: { orders: Order[] }) {
  return (
    <section className={styles.panel}>
      <h2>📦 Pedidos em Andamento</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Cliente</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className={
                order.status.includes("Aguardando") ? styles.alertRow : ""
              }
            >
              <td>{order.id}</td>
              <td>{order.cliente}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
