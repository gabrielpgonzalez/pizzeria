import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  const pizzas = [
    {
      name: "Napolitana",
      price: 5950,
      ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
      img: "/path-to-napolitana.jpg",
    },
    {
      name: "Española",
      price: 6950,
      ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
      img: "/path-to-espanola.jpg",
    },
    {
      name: "Pepperoni",
      price: 6950,
      ingredients: ["mozzarella", "pepperoni", "orégano"],
      img: "/path-to-pepperoni.jpg",
    },
  ];

  return (
    <>
      <Header />
      <Container fluid className="mt-4">
        <Row>
          {pizzas.map((pizza, index) => (
            <Col md={4} key={index}>
              <CardPizza {...pizza} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
