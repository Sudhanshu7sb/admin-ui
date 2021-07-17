import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import UserList from "./components/UserList";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

function App() {
  const [userList, setUserList] = useState("");

  useEffect(() => {
    fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    )
      .then((response) => response.json())
      .then((users) => setUserList(users));
    return console.log(userList, "users");
  }, []);
  return (
    <div>
      <Container className="d-inline-flex justify-content-center" fluid="md">
        <h1>ADMIN UI</h1>
      </Container>
      {userList ? (
        <UserList userlist={userList} />
      ) : (
        <>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
