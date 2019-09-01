import React, { Component } from "react"; // let's also import Component
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { xor } from "lodash";
import ReactGA from "react-ga";
import axios from "axios";

import Number from "../components/Number";
import Section from "../components/Section";
import MagicWand from "../components/MagicWand";
import generate from "../helpers/generateValues";
import checkVictory from "../helpers/checkVictory";
import canAddNumber from "../helpers/canAddNumber";
import {
  Wrapper,
  Header,
  Submitbutton
} from "../components/StyledComponents/indexPage";

type State = {
  firstRowValues: [number?];
  secondRowValues: [number?];
  showAnswer: boolean;
};

type Props = {
  time: Date;
};

export default class Index extends Component<Props, State> {
  amountInFirstRow: number;
  amountInSecondRow: number;
  requiredInFirstRow: number;
  requiredInSecondRow: number;
  correctFirstRowValues: [number];
  correctSecondRowValues: [number];

  constructor(props: Props) {
    super(props);
    this.amountInFirstRow = 19;
    this.amountInSecondRow = 2;
    this.requiredInFirstRow = 8;
    this.requiredInSecondRow = 1;
    this.correctFirstRowValues = generate(
      this.requiredInFirstRow,
      this.amountInFirstRow
    );
    this.correctSecondRowValues = generate(
      this.requiredInSecondRow,
      this.amountInSecondRow
    );
    this.state = {
      firstRowValues: [],
      secondRowValues: [],
      showAnswer: false
    };
  }

  // обработчик клика по числу
  handleClickNumber = (
    keyState: "firstRowValues" | "secondRowValues",
    value: number
  ): void => {
    ReactGA.event({
      category: "Number",
      action: "Click"
    });
    switch (keyState) {
      case "firstRowValues":
        if (
          canAddNumber(
            this.state.firstRowValues.length,
            this.requiredInFirstRow,
            this.state.firstRowValues.indexOf(value)
          )
        ) {
          this.setState({
            firstRowValues: xor(this.state.firstRowValues, [value])
          });
        } else {
          toast(`Ну хватит, куда уже больше?`);
        }
        break;

      case "secondRowValues":
        if (
          canAddNumber(
            this.state.secondRowValues.length,
            this.requiredInSecondRow,
            this.state.secondRowValues.indexOf(value)
          )
        ) {
          this.setState({
            secondRowValues: xor(this.state.secondRowValues, [value])
          });
        } else {
          toast(`Здесь необходимо выбрать только одно число`);
        }
        break;
    }
  };

  // Победил или нет?
  isVictory = (showNotification: boolean) => {
    const victory = checkVictory(
      {
        firstField: this.state.firstRowValues,
        secondField: this.state.secondRowValues
      },
      {
        firstField: this.correctFirstRowValues,
        secondField: this.correctSecondRowValues
      }
    );
    if (showNotification && victory) {
      toast.success("ПОЗДРАВЛЯЕМ, ВЫ ВЫИГРАЛИ НИЧЕГО");
      ReactGA.event({
        category: "End game",
        action: "Victory"
      });
    } else if (showNotification && !victory) {
      ReactGA.event({
        category: "End game",
        action: "Lose"
      });
      toast.info("Вы ничего не выиграли, попытайте удачу в следующий раз");
    }
    return victory;
  };

  // обработчик клика по "Показать результаты"
  showAnswers = () => {
    if (!this.isValidate()) return null;
    this.isVictory(true);
    this.setState({ showAnswer: true });
  };

  // обработчик клика по "Проверить на сервере"
  sendToServer = (count: number = 0) => {
    if (!this.isValidate()) return null;
    if (count > 2) {
      toast.error(`Ошибка на стороне сервера`);
      return null;
    }
    ReactGA.event({
      category: "Send to server",
      action: ""
    });
    axios
      .post("/finch-test", {
        selectedNumber: {
          firstField: this.state.firstRowValues,
          secondField: this.state.secondRowValues
        },
        isTicketWon: this.isVictory(false)
      })
      .then(({ status }) => {
        if (status !== 200) {
          throw new Error("Статус ответа не равен 200");
        }
      })
      .catch(error => {
        this.sendToServer(count + 1);
      });
  };

  // Проверка на заполненость полей по правилам игры
  isValidate = () => {
    if (
      this.state.firstRowValues.length == this.requiredInFirstRow &&
      this.state.firstRowValues.length == this.requiredInFirstRow &&
      this.state.secondRowValues.length == this.requiredInSecondRow &&
      this.state.secondRowValues.length == this.requiredInSecondRow
    ) {
      return true;
    }
    toast.warning(
      `Необходимо в первом поле ${this.requiredInFirstRow} чисел   
      Во втором ${this.requiredInSecondRow} число`
    );
    return false;
  };

  // Заполнение полей случайными данными
  randomize = (): void => {
    ReactGA.event({
      category: "Randomize",
      action: "Click"
    });
    this.setState({
      showAnswer: false,
      firstRowValues: generate(this.requiredInFirstRow, this.amountInFirstRow),
      secondRowValues: generate(
        this.requiredInSecondRow,
        this.amountInSecondRow
      )
    });
  };

  render() {
    const firstField = Array(this.amountInFirstRow)
      .fill(1)
      .map((_, index) => (
        <Number
          key={index}
          onClick={(): void => {
            this.handleClickNumber("firstRowValues", index);
          }}
          value={index}
          styledProps={{
            isChoosen: this.state.firstRowValues.indexOf(index) !== -1,
            isCorrectValue: this.correctFirstRowValues.indexOf(index) !== -1,
            showAnswer: this.state.showAnswer
          }}
        />
      ));

    const secondField = Array(this.amountInSecondRow)
      .fill(1)
      .map((_, index) => (
        <Number
          key={index}
          onClick={(): void => {
            this.handleClickNumber("secondRowValues", index);
          }}
          value={index}
          styledProps={{
            isChoosen: this.state.secondRowValues.indexOf(index) !== -1,
            isCorrectValue: this.correctSecondRowValues.indexOf(index) !== -1,
            showAnswer: this.state.showAnswer
          }}
        />
      ));
    return (
      <Wrapper>
        <Header>
          <div>Билет 1</div>
          <MagicWand onClick={this.randomize} />
        </Header>
        <Section title={1} amount={this.requiredInFirstRow}>
          <>{firstField}</>
        </Section>
        <Section title={2} amount={this.requiredInSecondRow}>
          <>{secondField}</>
        </Section>
        <Submitbutton onClick={this.showAnswers}>
          <div>Показать результаты</div>
        </Submitbutton>
        <Submitbutton onClick={() => this.sendToServer()}>
          <div>Проверить на сервере</div>
        </Submitbutton>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </Wrapper>
    );
  }
}
