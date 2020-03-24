import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import Modal from "./Components/Modal/Modal";

class App extends Component {
  state = {
    isModalSingup: false,
    isModalUsers: false,
    name: "",
    surname: "",
    users: []
  };

  openModal = key => {
    this.setState({
      [key]: true
    });
  };

  closeModal = key => {
    this.setState({
      [key]: false
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const user = {
      name: this.state.name,
      surname: this.state.surname
    };
    this.setState({
      users: this.state.users.concat(user)
    });
  };

  renderModalSingupContent = () => (
    <Form onSubmit={this.handleSubmit}>
      <Name
        value={this.state.name}
        onChange={this.handleChange}
        placeholder="Name"
        name="name"
      />
      <Surname
        value={this.state.surname}
        onChange={this.handleChange}
        placeholder="Surname"
        name="surname"
      />
      <Submit>Submit</Submit>
    </Form>
  );

  renderModalUsersContent = () => (
    <Wrapper>
      {this.state.users.map(user => (
        <List>
          <Item>{user.name}</Item>
          <Item>{user.surname}</Item>
        </List>
      ))}
    </Wrapper>
  );

  render() {
    console.log(this.state.users);
    const { isModalSingup, isModalUsers } = this.state;
    return (
      <Wrapper>
        <Button onClick={() => this.openModal("isModalSingup")}>Sign up</Button>
        <Button onClick={() => this.openModal("isModalUsers")}>
          Show me users
        </Button>
        {isModalSingup && (
          <Modal
            closeModal={this.closeModal}
            id="isModalSingup"
            modalContent={this.renderModalSingupContent()}
          />
        )}
        {isModalUsers && (
          <Modal
            closeModal={this.closeModal}
            id="isModalUsers"
            modalContent={this.renderModalUsersContent()}
          />
        )}
      </Wrapper>
    );
  }
}

export default App;

const Wrapper = styled.div``;

const Button = styled.button``;

const Form = styled.form``;

const Name = styled.input``;

const Surname = styled.input``;

const Submit = styled.button``;

const List = styled.li``;

const Item = styled.ul``;
