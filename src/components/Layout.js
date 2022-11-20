import styled from "styled-components";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  button {
    cursor: pointer;
  }
`
