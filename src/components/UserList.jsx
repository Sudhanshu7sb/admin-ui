import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Container from "react-bootstrap/Container";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";
import _ from "lodash";

function UserList(props) {
  const [selectAll, setSelectAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [userPerPage, setUserPerPage] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const list = props.userlist;
  const pageSize = 10;

  useEffect(() => {
    setUserPerPage(_(list).slice(0).take(pageSize).value());
  }, [list]);
  // delete User
  const deleteUser = (userId) => {
    const updatedListAfterDeletion = list.filter((user) => userId !== user.id);
    props.setUserList(updatedListAfterDeletion);
  };

  const pageCount = list ? Math.ceil(list.length / pageSize) : 0;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
    const startIndex = (pageNumber - 1) * pageSize;
    const paginateUser = _(list).slice(startIndex).take(pageSize).value();
    setUserPerPage(paginateUser);
  };

  return (
    <div>
      <Container>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search by Name,Email or Role"
            aria-describedby="basic-addon2"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <button type="button" class="btn btn-primary">
            Search
          </button>
        </div>

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
            {userPerPage &&
              userPerPage.map((singleUser) => {
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
                        <ButtonGroup className="me-2" aria-label="First group">
                          <Button variant="light">
                            <FiEdit />
                          </Button>
                        </ButtonGroup>
                        <ButtonGroup className="me-2" aria-label="Second group">
                          <Button
                            variant="danger"
                            onClick={() => deleteUser(singleUser.id)}
                          >
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

        <div>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="##" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="##">
                  Previous
                </a>
              </li>
              {pages.map((page) => (
                <li
                  class={
                    page === currentPage ? "page-item active" : "page-item"
                  }
                >
                  <p class="page-link" onClick={() => changePage(page)}>
                    {page}
                  </p>
                </li>
              ))}
              <li class="page-item">
                <a class="page-link" href="##">
                  Next
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="##" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  );
}

export default UserList;
