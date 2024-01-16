import Table from 'react-bootstrap/Table';

function Daftar() {
  return (
    <Table striped="columns">
      <thead>
        <tr>
          <th>#</th>
          <th>Nama Buku</th>
          <th>Author</th>
          <th>Deskripsi</th>
          <th>Harga</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Koeno</td>
          <td>Hajima</td>
          <td>Romance</td>
          <td>32000</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Attack on Titan</td>
          <td>Isayama</td>
          <td>50000</td>
        </tr>
        <tr>
          <td>3</td>
          <td>The Journey</td>
          <td>Anonim</td>
          <td>?</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Daftar;