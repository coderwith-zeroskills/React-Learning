// import logo from "./logo.svg";
// import { useEffect, useState } from "react";
import { useReducer } from "react";
import "./App.css";
import MainSearchApi from "./component/ProjectSortApi/MainSearchApi";
// import Welcome from './component/welcome';
// import MainBmi from "./component/ProjectBmi/MainBmi";
// import Greet from './component/Greet';
// import MyApp from "./component/FunctionalComponent/Counter";
// import MyApp from "./component/FunctionalComponent/CounterUpdatingTogether";
// import ClickToReveal from "./component/FunctionalComponent/ClickToReveal";
// import ListAndKeys from "./component/FunctionalComponent/ListAndKeys";
// import PreviousStateCounter from "./component/FunctionalComponent/PreviousStateCounter";
// import Form from "./component/FunctionalComponent/Form";
// import UseStateObject from "./component/Concept/UseStateObject";
// import ValidationForm from "./component/FunctionalComponent/ValidationForm";
// import UseEffectOnce from "./component/FunctionalComponent/UseEffectOnce";
// import DataFetching from "./component/DataFetching/DataFetching";
// import DataFetching2 from "./component/DataFetching/DataFetching2";
// import UseStateObject from "./component/FunctionalComponent/UseStateObject";
// import ToDoForm from "./component/ProjectsToDo/ToDoForm";
// import ToDoList from "./component/ProjectsToDo/ToDoList";
// import Loginpage from "./component/ProjectLoginPage/Loginpage";
// import LogoutPage from "./component/ProjectLoginPage/LogoutPage";
// import Background from "./component/ProjectAccordionIntro/Background";
// import List from "./component/ProjectAccordionIntro/List";
// import { dataArray } from "./component/ProjectAccordionIntro/Data";
// import NavButton from "./component/ProjectMenuDisplay/NavButton";
// import Content from "./component/ProjectMenuDisplay/Content";
// import DisplayPage from "./component/Concept/Practise/DisplayPage";
// import Layout from "./component/ProjectBurger/Layout";
// import Main from "./component/Concept/Routing/Main";
// import Home from "./component/Concept/Routing/Home";
// import Service from "./component/Concept/Routing/Service";
// import About from "./component/Concept/Routing/About";
// import MainButtonProject from "./component/ProjectButtonToNext/MainButtonProject";
// import Form from "./component/Formik/Form";
import MainSortApi from "./component/ProjectSortApi/MainSortApi";
import UseReducer from "./component/Concept/useReducer";
import UseTransition from "./component/Concept/UseTransition";
import Main from "./component/Concept/Routing/Main";
import MainSearchApiRoute from "./component/ProjectSortApi/MainSearchApiRoute";
// import { Form } from "react-router-dom";
import FormBoiler from "./component/Formik/FormBoiler";
import FormikComponent from "./component/Formik/FormikComponent";
import CakeContainer from "./component/REDUX/CakeContainer";
// import New from "./component/New";
import { Provider } from "react-redux";
import { store } from "./ReduxC/Cake/Store";
import BPlaceholder from "./BootStrap/BPlaceholder";
import BProgressBar from "./BootStrap/BProgressBar";
import BTable from "./BootStrap/BTable";
import BTabs from "./BootStrap/BTabs";
import MuiBox from "./MaterialUI/Box";
import MuiCard from "./MaterialUI/MuiCard";
import MuiAccordion from "./MaterialUI/MuiAccordion";
import MuiResponsive from "./MaterialUI/MuiResponsive";
import MuiCustomizing from "./MaterialUI/MuiCustomizing";

function App() {
  return (
    <>
      {" "}
      {/* <MainBmi /> */}
      {/* <Form /> */}
      {/* <ToDoForm /> */}
      {/* <ToDoForm /> */}
      {/* <ToDoList /> */}
      {/* <FormBoiler /> */}
      {/* <FormikComponent /> */}
      {/* <MainSortApi /> */}
      {/* <MainSearchApi /> */}
      {/* <MainSearchApiRoute /> */}
      {/* <UseReducer /> */}
      {/* <UseTransition /> */}
      {/* <Main /> */}
      {/* <Provider store={store}>
        <CakeContainer />
      </Provider> */}
      {/* <BPlaceholder /> */}
      {/* <BProgressBar /> */}
      {/* <BTable /> */}
      {/* <BTabs /> */}
      {/* <MuiBox /> */}
      {/* <MuiCard /> */}
      {/* <MuiAccordion /> */}
      {/* <MuiResponsive /> */}
      <MuiCustomizing />
    </>
  );
}

export default App;
