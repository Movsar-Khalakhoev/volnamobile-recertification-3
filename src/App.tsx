import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { Container, Form, Table } from "react-bootstrap";
import { useStore } from "store/use-store";

function App() {
  const store = useStore((store) => store);

  useEffect(() => {
    store.fetchUsers();
  }, []);

  return (
    <div className="app">
      <Container className="pt-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Имя</th>
              <th>Фамилия</th>
              <th>Возраст</th>
              <th>Адрес</th>
              <th>номер телефона</th>
            </tr>
            <tr>
              <th>
                <Form.Group>
                  <Form.Control type="number" placeholder="input" onChange={(event) => store.setSearch("id", event.target.value ? Number(event.target.value) : undefined)} />
                </Form.Group>
              </th>
              <th>
                <Form.Group>
                  <Form.Control placeholder=" input" onChange={(event) => store.setSearch("firstName", event.target.value ?? undefined)} />
                </Form.Group>
              </th>
              <th>
                <Form.Group>
                  <Form.Control placeholder=" input" onChange={(event) => store.setSearch("lastName", event.target.value ?? undefined)} />
                </Form.Group>
              </th>
              <th>
                <Form.Group>
                  <Form.Control type="number" placeholder=" input" onChange={(event) => store.setSearch("age", event.target.value ? Number(event.target.value) : undefined)} />
                </Form.Group>
              </th>
              <th>
                <Form.Group>
                  <Form.Control placeholder="input" onChange={(event) => store.setSearch("address", event.target.value ?? undefined)} />
                </Form.Group>
              </th>
              <th>
                <Form.Group>
                  <Form.Control placeholder="input" onChange={(event) => store.setSearch("phone", event.target.value ?? undefined)} />
                </Form.Group>
              </th>
            </tr>
          </thead>
          <tbody>
            {store.users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.age}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
