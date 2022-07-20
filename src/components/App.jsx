import React, { useState } from "react";
import Icon from "./Icon";

// bootstrap
import { Button, Container, Row, Col, Card, CardBody } from "reactstrap";

import { ToastContainer, toast } from "react-toastify";

const iconArray = new Array(9).fill("empty");

export default function App() {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    iconArray.fill("empty", 0, 8);
  };

  const checkWinner = () => {
    if (
      iconArray[0] !== "empty" &&
      iconArray[0] === iconArray[1] &&
      iconArray[0] === iconArray[2]
    ) {
      setWinMessage(`${isCross ? "Cross" : "Circle"}  win the game`);
    }
    if (
      iconArray[3] !== "empty" &&
      iconArray[3] === iconArray[4] &&
      iconArray[3] === iconArray[8]
    ) {
      setWinMessage(`${isCross ? "Cross" : "Circle"}  win the game`);
    }
    if (
      iconArray[6] !== "empty" &&
      iconArray[6] === iconArray[7] &&
      iconArray[6] === iconArray[8]
    ) {
      setWinMessage(`${isCross ? "Cross" : "Circle"}  win the game`);
    }
    if (
      iconArray[0] !== "empty" &&
      iconArray[0] === iconArray[3] &&
      iconArray[0] === iconArray[6]
    ) {
      setWinMessage(`${isCross ? "Cross" : "Circle"}  win the game`);
    }
    if (
      iconArray[1] !== "empty" &&
      iconArray[1] === iconArray[4] &&
      iconArray[1] === iconArray[7]
    ) {
      setWinMessage(`${isCross ? "Cross" : "Circle"}  win the game`);
    }
    if (
      iconArray[2] !== "empty" &&
      iconArray[2] === iconArray[5] &&
      iconArray[2] === iconArray[8]
    ) {
      setWinMessage(`${isCross ? "Cross" : "Circle"}  win the game`);
    }
    if (
      iconArray[0] !== "empty" &&
      iconArray[0] === iconArray[4] &&
      iconArray[0] === iconArray[8]
    ) {
      setWinMessage(`${isCross ? "Cross" : "Circle"}  win the game`);
    }
    if (
      iconArray[2] !== "empty" &&
      iconArray[2] === iconArray[4] &&
      iconArray[2] === iconArray[6]
    ) {
      setWinMessage(`${isCross ? "Cross" : "Circle"}  win the game`);
    }
    if (
      iconArray[0] !== "empty" &&
      iconArray[1] !== "empty" &&
      iconArray[2] !== "empty" &&
      iconArray[3] !== "empty" &&
      iconArray[4] !== "empty" &&
      iconArray[5] !== "empty" &&
      iconArray[6] !== "empty" &&
      iconArray[7] !== "empty" &&
      iconArray[8] !== "empty"
    ) {
      setWinMessage("Nobody Win the game");
    }
  };

  const handleItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }

    if (iconArray[itemNumber] === "empty") {
      iconArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("already filled", {
        type: "error",
      });
    }

    checkWinner();
  };
  return (
    <div className="app text-center mt-5">
      {winMessage === "" ? (
        <div>
          <div className="text-white fs-2">
            {isCross ? "Cross" : "Circle"} turns
          </div>
        </div>
      ) : (
        <div>
          <div className="text-success fs-2">{winMessage}</div>
          <Button onClick={reloadGame}>Relaod the game</Button>
        </div>
      )}

      <Container className="mt-5">
        <div className="box-margin">
          <Row>
            <Col className="row gap-2 justify-content-center">
              {iconArray.map((item, i) => (
                <Card key={i} className="col-3 bg-primary">
                  <CardBody
                    onClick={() => {
                      handleItem(i);
                    }}
                  >
                    <Icon name={item} />
                  </CardBody>
                </Card>
              ))}
            </Col>
          </Row>
        </div>
      </Container>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />
    </div>
  );
}
