import './App.css'
import Nav from './Components/Nav/Nav'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
function App() {
  const { t } = useTranslation("global");

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
    <Nav/>
      <h1>M4LIFE</h1>
      <h2>{t("header.title")}</h2>
    </>
  )
}

export default App
