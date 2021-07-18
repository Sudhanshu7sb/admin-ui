import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Pagination from "react-bootstrap/Pagination";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";

function UserList(props) {
  const [selectAll, setSelectAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const list = props.userlist;
  // const total = list.length;

  return (
    <div>
      <Container>
        <InputGroup className="mb-3 g-3">
          <FormControl
            placeholder="Search by Name,Email or Role"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
        </InputGroup>
        <h3>User List</h3>
        <Table bordered hover size="sm" responsive>
          <thead>
            <tr>
              <th>
                <Form.Check
                  aria-label="option 1"
                  onChange={(e) => {
                    setSelectAll(e.target.checked);
                  }}
                />
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list &&
              list
                .filter((user) => {
                  if (searchTerm === "") {
                    return user;
                  } else if (
                    user.name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    user.email
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    user.role.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return user;
                  }
                })
                .map((singleUser) => {
                  return (
                    <tr key={singleUser.id}>
                      <td>
                        <Form.Check aria-label="option 1" checked={selectAll} />
                      </td>
                      <td>{singleUser.name}</td>
                      <td>{singleUser.email}</td>
                      <td>{singleUser.role}</td>
                      <td>
                        <ButtonToolbar>
                          <ButtonGroup
                            className="me-2"
                            aria-label="First group"
                          >
                            <Button variant="light">
                              <FiEdit />
                            </Button>
                          </ButtonGroup>
                          <ButtonGroup
                            className="me-2"
                            aria-label="Second group"
                          >
                            <Button variant="danger">
                              <RiDeleteBin2Line className="delete" />
                            </Button>
                          </ButtonGroup>
                        </ButtonToolbar>
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </Table>
        <Pagination size="md" className="justify-content-center">
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>

          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>
          <Pagination.Item>{5}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </Container>
    </div>
  );
}

export default UserList;
