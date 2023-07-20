import LanguageIcon from "@mui/icons-material/Language";
import { Alert, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { Link } from "react-router-dom";
import { properties } from "../../properties";
import Navbar from "../Navbar";
import ThemedButton from "../ThemedButton";
import { useQuery } from "./Quote";

const SplashPageTitle = styled(Typography)(() => ({
  fontFamily: "Josefin Sans",
  fontSize: "30px",
  color: properties.style.primary.grey,
}));

const SplashPageBody = styled(Typography)(() => ({
  fontSize: "18px",
  color: properties.style.primary.grey,
}));

const TimeRemaining = styled(Typography)(() => ({
  fontFamily: "Roboto",
  fontSize: "18px",
  color: properties.style.primary.grey,
}));

const pageContent = {
  navbar: {
    about: {
      en: "About",
      pr: "Sobre",
    },
    services: {
      en: "Services",
      pr: "Serviços",
    },
    contact: {
      en: "Contact",
      pr: "Contato",
    },
    workshop: {
      en: "Find workshops near you...",
      pr: "Encontre oficinas perto de você...",
    },
  },
  educator: {
    pageTitle: {
      en: "How can we help your education centre?",
      pr: "Como podemos ajudar o seu centro educativo?",
    },
    pageBody: {
      en:
        "Steampunk's mission is to improve proficicy in core STEM concepts in evey education center in Canada. " +
        "Steampunk provides the curriculm, hardware and staff to run STEM programs." +
        "The education centers provide the space and adversize the programs. " +
        "If you would like your education centre to host a Steampunk workshops, " +
        "fill out the follow quiz to see which program is best suited your needs.",
      pr: "A missão do Steampunk é melhorar a proficiência nos principais conceitos STEM em todos os centros educacionais do Canadá. Steampunk fornece o currículo, hardware e equipe para executar programas STEM. Os centros de educação fornecem o espaço e divulgam os programas. Se você deseja que seu centro educacional hospede workshops Steampunk, preencha o questionário a seguir para ver qual programa é mais adequado às suas necessidades.",
    },
  },
  student: {
    pageTitle: {
      en: "Which workshop is the best fit for you?",
      pr: "Qual oficina é a mais adequada para você?",
    },
    pageBody: {
      en:
        "A STEM workshop run by Steampunk is unlike anything taught in the classroom. " +
        "Take this quiz to find out which Steampunk workshop you are best suited for.",
      pr: "Um workshop STEM administrado por Steampunk é diferente de tudo o que é ensinado em sala de aula. Faça este teste para descobrir para qual oficina Steampunk você é mais adequado.",
    },
  },
  parent: {
    pageTitle: {
      en: "Which workshop is the best fit for your child?",
      pr: "Qual oficina é a mais adequada para o seu filho?",
    },
    pageBody: {
      en:
        "Steampunk has the highest standards for STEM education; " +
        "we work with education centers across Ontario and Québec to run engaging STEM workshops for students of all ages.",
      pr: "Steampunk tem os mais altos padrões de educação STEM; trabalhamos com centros educacionais em Ontário e Québec para realizar workshops STEM envolventes para alunos de todas as idades.",
    },
  },
  timeToCompleteDesc: {
    en: "Time to compelete: ",
    pr: "Hora de completar: ",
  },
  timeToComplete: {
    en: "2 min",
    pr: "2 minutos",
  },
  startQuiz: {
    en: "Start Quiz",
    pr: "Iniciar Questionário",
  },
  translateAlertText: {
    en: "Esta página está disponível em Português. ",
    pr: "This page is available in English. ",
  },
  translateLink: {
    en: "Traduzir",
    pr: "Translate",
  },
};

function Quiz() {
  let query = useQuery();
  const userType = query.get("usertype");
  const lang = query.get("lang");
  const otherLang = lang === "en" ? "pr" : "en";

  return (
    <div>
      <Navbar
        aboutTitle={pageContent["navbar"]["about"][lang]}
        servicesTitle={pageContent["navbar"]["services"][lang]}
        contactTitle={pageContent["navbar"]["contact"][lang]}
        workshopTitle={pageContent["navbar"]["workshop"][lang]}
        lang={lang}
      />
      <SplashPageTitle aria-description="Quiz Title" sx={{ pt: 4, ml: 3 }}>
        {pageContent[userType]["pageTitle"][lang]}
      </SplashPageTitle>
      <SplashPageBody aria-description="Quiz body" sx={{ pt: 2, pb: 3, ml: 3 }}>
        {pageContent[userType]["pageBody"][lang]}
      </SplashPageBody>
      <TimeRemaining aria-description="Time to complete" sx={{ pb: 2, ml: 3 }}>
        {pageContent["timeToCompleteDesc"][lang]}{" "}
        <strong>{pageContent["timeToComplete"][lang]}</strong>
      </TimeRemaining>
      <Link to="/quizcontent">
        <ThemedButton
          aria-description="Start Quiz Button"
          sx={{ ml: 3 }}
          btnText={pageContent["startQuiz"][lang]}
        />
      </Link>
      <Alert
        aria-description="Alert to translate page"
        icon={<LanguageIcon fontSize="inherit" />}
        sx={{ position: "absolute", right: "25px", bottom: "25px" }}
        severity="info"
      >
        {pageContent["translateAlertText"][lang]}
        <Link to={"/quiz?lang=" + otherLang + "&usertype=" + userType}>
          {pageContent["translateLink"][lang]}
        </Link>
      </Alert>
    </div>
  );
}

export default Quiz;
