import logo from "./logo.svg";
import "./App.css";
import Options from "./components/Options";
import StatusBar from "./components/StatusBar";
import { useState } from "react";

function App() {
  const [questions, setQuestions] = useState([
    {
      numb: 1,
      question: "What does HTML stand for?",
      answer: "Hyper Text Markup Language",
      options: [
        "Hyper Text Preprocessor",
        "Hyper Text Markup Language",
        "Hyper Text Multiple Language",
        "Hyper Tool Multi Language",
      ],
    },
    {
      numb: 2,
      question: "What does CSS stand for?",
      answer: "Cascading Style Sheet",
      options: [
        "Common Style Sheet",
        "Colorful Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet",
      ],
    },
    {
      numb: 3,
      question: "What does PHP stand for?",
      answer: "Hypertext Preprocessor",
      options: [
        "Hypertext Preprocessor",
        "Hypertext Programming",
        "Hypertext Preprogramming",
        "Hometext Preprocessor",
      ],
    },
    {
      numb: 4,
      question: "What does SQL stand for?",
      answer: "Structured Query Language",
      options: [
        "Stylish Question Language",
        "Stylesheet Query Language",
        "Statement Question Language",
        "Structured Query Language",
      ],
    },
    {
      numb: 5,
      question: "What does XML stand for?",
      answer: "eXtensible Markup Language",
      options: [
        "eXtensible Markup Language",
        "eXecutable Multiple Language",
        "eXTra Multi-Program Language",
        "eXamine Multiple Language",
      ],
    },
  ]);
  const [indexNumber, setIndexNumber] = useState(0);
  const [marks, setMarks] = useState(0);
  const [result, setResult] = useState(false);

  const checkQuestion = (userSelected, correctAnswer) => {
    console.log("userSelected==================>" + userSelected);
    console.log("CorrectAnswer==================>" + correctAnswer);
    if (userSelected == correctAnswer) {
      setMarks(marks + 1);
    }

    if (indexNumber + 1 == questions.length) {
      setResult(true);
    }
    setIndexNumber(indexNumber + 1);
  };
  const questionOptions = questions[indexNumber].options;
  return (
    <>
      {/*===================== Status Bar ===================== */}

      <div className="py-2 mx-auto">
        <StatusBar />
      </div>

      {/*===================== Questiion Detail ===================== */}

      <div className="py-3  mx-auto">
        <div className="container align-items-center QuestiionDetail rounded-5">
          <div className="row justify-content-center py-3">
            <div className="col-md-4">
              <h1 className="text-center">HTMl,CSS and Javascript</h1>
            </div>
          </div>
          <div className="row justify-content-center py-5">
            <div className="col-md-3">
              <h2>{"Total Marks:" + questions.length * 3}</h2>
            </div>
            <div className="col-md-3">
              <h5>{"Question # " + (indexNumber + 1)} </h5>
            </div>
            <div className="col-md-3">
              <h3>{"Total Questions : " + questions.length}</h3>
            </div>
          </div>
        </div>
      </div>

      {/*===================== Questiion Box ===================== */}
      <div className="py-3 mx-auto">
        <div className="container QuestiionBox p-5 ">
          <div className="row">
            <div className="col-md-12">
              <h2>{questions[indexNumber].question}</h2>
            </div>
          </div>
        </div>
      </div>

      {/*===================== Answer Box ===================== */}
      <Options OptionData={questionOptions} />
    </>
  );
}

export default App;
