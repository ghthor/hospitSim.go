<table style="display: none;">
  <caption>Testing</caption>
  <thead>
    <tr>
      <td></td>
      {.repeated section Patients}<th scope="col">{@}</th>{.end}
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">WaitingForDoctor</th>
      {.repeated section WaitingForDoctor}<td>{@}</td>{.end}
    </tr>
    <tr>
      <th scope="row">WaitingForNurse</th>
      {.repeated section WaitingForNurse}<td>{@}</td>{.end}
    </tr>
    <tr>
      <th scope="row">WithNurse</th>
      {.repeated section WithNurse}<td>{@}</td>{.end}
    </tr>
    <tr>
      <th scope="row">WithDoctor</th>
      {.repeated section WithDoctor}<td>{@}</td>{.end}
    </tr>
  </tbody>
</table>
