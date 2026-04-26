function RegisterPoint() {
  function gerarDiasDoMes(ano: number, mes: number) {
    const diasDoMes = new Date(ano, mes, 0).getDate();

    return Array.from({ length: diasDoMes }, (_, i) => {
      const data = new Date(ano, mes - 1, i + 1);
      return data.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        weekday: "short"
      });
    });
  }

  const dias = gerarDiasDoMes(2026, 4);

  return (
    <div>
      <h1 className="text-[32px]">Registro de Ponto - Abril 2026</h1>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Entrada AM</th>
            <th>Saída AM</th>
            <th>Entrada PM</th>
            <th>Saída PM</th>
            <th>Horas Extras</th>
          </tr>
        </thead>
        <tbody>
          {dias.map((dia) => (
            <tr key={dia}>
              <td>{dia}</td>
              <td><input type="time"/></td>
              <td><input type="time"/></td>
              <td><input type="time"/></td>
              <td><input type="time"/></td>
              <td>01:00</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3">Totais do Mês:</td>
            <td colspan="3">01:00</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default RegisterPoint
