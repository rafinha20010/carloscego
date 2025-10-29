import styles from "../styles/Dashboard.module.css";

interface Employee {
  nome: string;
  tarefa: string;
}

interface EmployeeStatusProps {
  employees: Employee[];
}

export default function EmployeeStatus({ employees }: EmployeeStatusProps) {
  return (
    <section className={styles.panel}>
      <h2>👥 Funcionários</h2>
      <ul className={styles.employeeList}>
        {employees.map((emp: Employee, i: number) => (
          <li key={i} className={styles.employeeItem}>
            <strong>{emp.nome}</strong>
            <p>{emp.tarefa}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
