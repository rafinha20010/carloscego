"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Rupturas.module.css";

export default function RupturasPage() {
  const [rupturas, setRupturas] = useState([
    { id: 1, item: "Item XYZ", status: "Pendente" },
    { id: 2, item: "Item ABC", status: "Pendente" },
  ]);

  const consertarRuptura = (id: number) => {
    setRupturas((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, status: "Resolvida ✅" } : r
      )
    );
  };

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1>🔧 Gerenciamento de Rupturas</h1>
        <Link href="/" className={styles.backButton}>
          ← Voltar ao Dashboard
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Status</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {rupturas.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.item}</td>
              <td
                className={
                  r.status.includes("Pendente")
                    ? styles.statusPendente
                    : styles.statusResolvida
                }
              >
                {r.status}
              </td>
              <td>
                {r.status === "Pendente" && (
                  <button
                    onClick={() => consertarRuptura(r.id)}
                    className={styles.fixButton}
                  >
                    Consertar
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
