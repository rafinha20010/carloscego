"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import OrderTable from "./components/OrderTable";
import AlertPanel from "./components/AlertPanel";
import EmployeeStatus from "./components/EmployeeStatus";
import styles from "./styles/Dashboard.module.css";

export default function Page() {
  const [alerts, setAlerts] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [employees, setEmployees] = useState<any[]>([]);

  // Simula atualizações em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      const newAlertChance = Math.random() < 0;
      if (newAlertChance) {
        const newAlert = {
          id: Date.now(),
          message: "🚨 Ruptura detectada: item XYZ fora de estoque!",
          time: new Date().toLocaleTimeString(),
        };
        setAlerts((prev) => [newAlert, ...prev]);
      }

      setOrders([
        { id: 1, cliente: "João", status: "Preparando" },
        { id: 2, cliente: "Maria", status: "Enviando" },
        { id: 3, cliente: "Carlos", status: "Aguardando item" },
      ]);

      setEmployees([
        { nome: "Ana", tarefa: "Separando pedidos" },
        { nome: "Bruno", tarefa: "Conferindo estoque" },
        { nome: "Luiza", tarefa: "Despachando entregas" },
      ]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className={styles.container}>
      <Header />
      <div className={styles.grid}>
        <div className={styles.left}>
          <OrderTable orders={orders} />
        </div>
        <div className={styles.right}>
          <AlertPanel alerts={alerts} />
          <EmployeeStatus employees={employees} />
        </div>
      </div>
    </main>
  );
}
