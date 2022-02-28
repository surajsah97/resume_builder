import { Link } from "react-router-dom";
import "../App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import React, { useContext, useEffect } from "react";
import { useRecoilState } from "recoil";
import { downloadStatus } from "../atom/downloadStatusAtom";
import { FormContext } from "./FormContext";

export default function Review() {
  const [{skills=[]}, setForm] = useContext(FormContext);
    useEffect(()=>{
        var updatedForm = {step: 6}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    },[])
  const [isDownload, setIsDownload] = useRecoilState(downloadStatus);

  const handlePdfDownload = () => {
    setIsDownload("true");
  };

  return (
    <div className="left">
      <Container>
        <Row>
          <Col style={{ display: "flex", justifyContent: "start" }}>
            <Link to="/page/extra">
              <Button variant="warning"> Back </Button>
            </Link>
          </Col>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <Button variant="primary"> Export JSON </Button>
          </Col>
          <Col style={{ display: "flex", justifyContent: "end" }}>
            <Button onClick={handlePdfDownload} variant="success">
              {" "}
              Download PDF{" "}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
