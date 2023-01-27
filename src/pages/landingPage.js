import React from "react";
import { useTranslation } from "react-i18next";

import Footer from "../components/Footer";
import List from "../components/List";
import mainPreview from "../images/background.png";
import image3 from "../images/bilpencildesign.png";
import i18n from "../lang/i18n";

const LandingPage = ({ className }) => {
  // const [t, i18n] = useTranslation();
  i18n.changeLanguage("kk");

  return (
    <div className={"flex flex-col h-full to-black bg-cyan-200" + className}>
      <div className="flex lg:flex-row flex-col  lg:items-center mb-4">
        <div className="flex flex-col lg:w-1/2 items-left justify-left lg:pl-20 px-10">
          <h1 className="font-Merriweather font-bold text-[35px] text-left mx-left flex mt-40  ">
            {i18n.t("welcome.examination")}
          </h1>
          <div className="flex flex-col items-left">
            <p className="text-[20px] ">
              {" "}
              {i18n.t("welcome.registration_ended")}
            </p>
            <div className="flex flex-row mt-4">
              <button
                type="button"
                className="text-cyan-600 hover:text-white border border-cyan-600 hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
              >
                {i18n.t("welcome.login")}
              </button>

              <button
                type="button"
                className=" whitespace-nowrap text-cyan-600 hover:text-white border border-cyan-600 hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
              >
                {i18n.t("welcome.have_account")}
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img
            className=" sm:w-[718px] sm:h-[734px] w-[479] h-[489]"
            alt={"some preview"}
            src={mainPreview}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center bg-right ">
        <div className="flex flex-col w-[550px] h-[400px] text-left px-6 justify-start gap-4 pt-8 bg-cyan-600 sm:rounded-t-2xl lg:rounded-r-none lg:rounded-l-2xl ">
          <p className="text-[36px]">{i18n.t("welcome.examination")}</p>
          <p className="text-gray-50 text-[20px] mt-4 leading-8">
            {i18n.t("welcome.registration_period")}: 01.02 - 22.04.2022
            <ul>
              <li> {i18n.t("welcome.first_round_exam")}: 24.04.2022 </li>
            </ul>
          </p>
        </div>
        <div className="flex flex-col w-[550px] md:h-[400px] h-[550px] text-left px-6 justify-start gap-4 pt-8 bg-gray-50 sm:rounded-b-2xl lg:rounded-l-none lg:rounded-r-2xl ">
          <p className="text-[36px] text-cyan-800 ">
            {" "}
            {i18n.t("welcome.practice_test")}
          </p>
          <p className="text-[20px]">
            {i18n.t("welcome.practice_test_dear")}
            {i18n.t("welcome.practice_test_desc")}
            {i18n.t("welcome.practice_test_tip_1")}
            {i18n.t("welcome.practice_test_tip_2")}
          </p>
        </div>
      </div>
      <h1 className="text-[33px] text-cyan-900  text-center my-10">
        {i18n.t("welcome.how_to_apply")}
      </h1>
      <div className="flex  lg:flex-row flex-col gap-4 justify-center items-center mx-2">
        <div className="flex md:flex-row flex-col  gap-4">
          <div className="flex flex-col w-64 h-96  items-center justify-between px-2 bg-gray-50 rounded-2xl">
            <p className="text-[24px] mt-16 font-bold">
              {" "}
              {i18n.t("welcome.registration")}
            </p>
            <p className="text-[18px] text-center">
              {i18n.t("welcome.apply_step_1")}
            </p>
            <button
              type="button"
              className="mb-8 text-cyan-600 hover:text-white border border-cyan-600 hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
            >
              Бастау{" "}
            </button>
          </div>

          <div className="flex flex-col w-64 h-96  items-center justify-start px-2 bg-gray-50 rounded-2xl">
            <p className="text-[24px] mt-16 font-bold">
              {" "}
              {i18n.t("welcome.confirmation")}
            </p>
            <p className="text-[18px] text-center mt-16">
              {i18n.t("welcome.apply_step_2")}
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col  gap-4">
          <div className="flex flex-col w-64 h-96  items-center justify-start px-2 bg-gray-50 rounded-2xl">
            <p className="text-[24px] mt-16 font-bold text-center ">
              {i18n.t("welcome.first_round_exam")}
            </p>
            <p className="text-[18px] text-center mt-16">
              {i18n.t("welcome.apply_step_3")}
            </p>
          </div>

          <div className=" flex flex-col w-64 h-96 items-center justify-start px-2 bg-gray-50 rounded-2xl">
            <h3 className="text-[24px] mt-16 font-bold text-center">
              {i18n.t("welcome.second_round_exam")}
            </h3>
            <p className="text-[18px] text-center mt-16">
              {i18n.t("welcome.apply_step_4")}
            </p>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col px-2 mt-40 justify-center items-center ">
        <div
          className="flex flex-col w-[370px] h-[500px] left bg-cyan-600 sm:rounded-t-lg

          lg:rounded-r-none lg:rounded-l-2xl items-center px-2 duration-200 ease-in-out transform 
                       sm:hover:scale-110 p-4   "
        >
          <p className="text-[24px] mt-16 font-bold">
            {" "}
            {i18n.t("welcome.exam_rules")}
          </p>
          <p className="text-[20px] text-center mt-20 mx-8 leading-9 text-white">
            {i18n.t("welcome.exam_rule_1")} {i18n.t("welcome.exam_rule_2")}
          </p>
        </div>
        <div
          className="flex flex-col w-[370px] h-[500px] items-center left bg-cyan-400 duration-200 ease-in-out transform 
          sm:hover:scale-110  "
        >
          <p className="text-[24px] mt-16 font-bold">
            {" "}
            {i18n.t("welcome.first_period")}
          </p>
          <ul className="text-[18px] mt-16 ">
            <li>~ 100 минут</li>
            <li>~ емтиханы 60 сұрақтан тұрады:</li>
          </ul>
          <ul className="lg:text-[18px] sm:text-sm mt-10 mt-10 leading-8">
            <li>1. {i18n.t("welcome.math")}– 40 сұрақ;</li>
            <li> 2. {i18n.t("welcome.kazakh")} – 10 сұрақ;</li>
            <li> 3. {i18n.t("welcome.history")} – 10 сұрақ. </li>
          </ul>
        </div>
        <div
          className="flex flex-col w-[370px] h-[500px] items-center left' bg-cyan-100 sm:rounded-b-2xl lg:rounded-l-none lg:rounded-r-2xl duration-200 ease-in-out transform 
          sm:hover:scale-110 p-4 "
        >
          <p className="text-[24px] mt-16 font-bold">2 - кезең</p>
          <ul className="text-[18px] mt-16">
            <li> ~ 130 минут</li>
            <li> ~ емтиханы 75 сұрақтан тұрады:</li>
          </ul>

          <ul className="lg:text-[18px] sm:text-sm mt-10 leading-8">
            <li className="break-all"> {i18n.t("welcome.math")} – 55 сұрақ;</li>
            <li> 2. {i18n.t("welcome.kazakh")} – 10 сұрақ;</li>
            <li>3. {i18n.t("welcome.history")}– 10 сұрақ.</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row lg:justify-around justify-center">
        <h1 className="text-[33px]  text-cyan-900 text-center my-10">
          {i18n.t("welcome.examination_results")}
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-center">
        <img
          className=" top-[2550px] w-[434px] h-[480px] left-[252px] rounded-l-2xl "
          alt={"some preview"}
          src={image3}
        />
        <div
          className="flex flex-col justify-center top-[2550px] md:w-[434px] w-[320px]  md:h-[480px] h-[600px] items-center px-3 bg-cyan-400 border-4 border-slate-50 justify-self-end duration-200 ease-in-out transform 
          sm:hover:scale-110 p-4  "
        >
          <p className="lg:text-[20px] sm:text-[18px] mt-10 text-center ">
            {i18n.t("welcome.examination_results_1")}
            <a className="hover:underline hover text-blue-50 ">
              www.bilemtihan.kz
            </a>
            {i18n.t("welcome.examination_results_1_1")}{" "}
            {i18n.t("welcome.examination_results_2")}{" "}
            {i18n.t("welcome.examination_results_2_1")}{" "}
            {i18n.t("welcome.examination_results_2_2")}{" "}
          </p>
        </div>
        <div
          className="flex flex-col justify-center top-[2550px] md:w-[434px] w-[320px]  md:h-[480px] h-[600px] items-center px-3 bg-cyan-400 sm:rounded-b-2xl lg:rounded-l-none lg:rounded-r-2xl  border-4 border-slate-50 justify-self-end duration-200 ease-in-out transform 
          sm:hover:scale-110 p-4 "
        >
          <p className="lg:text-[20px] sm:text-[10px] mt-2 text-center ">
            <h2 className="lg:text-[24px] sm:text-[10px] text-cyan-900">
              {" "}
              {i18n.t("welcome.appeal_warning")}
            </h2>{" "}
            {i18n.t("welcome.appeal")} {i18n.t("welcome.appeal_end")}
            <ul className="lg:text-[20px] sm:text-[10px]">
              <li> {i18n.t("welcome.appeal_1")}</li>
              <li>{i18n.t("welcome.appeal_2")}</li>
              <li>{i18n.t("welcome.appeal_3")}</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-20 mt-20">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col justify-center w-[360px] h-[100px] items-center px-3 bg-cyan-600 rounded-lg border-4 border-slate-50 justify-self-end">
            <p className="text-[28px] text-center text-blue-50">
              {i18n.t("welcome.examination_day")}{" "}
              <ul>
                <li className="text-[18px]">
                  {i18n.t("welcome.necessary_things")}
                </li>
              </ul>
            </p>
          </div>
          <div
            className="flex flex-col justify-center w-[360px] h-[80px] left-[685px] items-center px-3 bg-cyan-100 rounded-lg border-2 border-cyan-500 justify-self-end  duration-200 ease-in-out transform 
                       hover:scale-105"
          >
            <p className="text-[19px] text-center text-cyan-600">
              1. {i18n.t("welcome.certificate")}
            </p>
          </div>
          <div
            className="flex flex-col justify-center w-[360px] h-[80px] left-[685px] items-center px-3 bg-cyan-100 rounded-lg border-2 border-cyan-500 justify-self-end  duration-200 ease-in-out transform 
                       hover:scale-105"
          >
            <p className="text-[19px] text-center text-cyan-600">
              2. {i18n.t("welcome.form")}
            </p>
          </div>
          <div
            className="flex flex-col justify-center w-[360px] h-[80px] left-[685px] items-center px-3 bg-cyan-100 rounded-lg border-2 border-cyan-500 justify-self-end  duration-200 ease-in-out transform 
                       hover:scale-105"
          >
            <p className="text-[19px] text-center text-cyan-600">
              3. {i18n.t("welcome.pen")}
            </p>
          </div>
          <div
            className="flex flex-col justify-center w-[360px] h-[80px] left-[685px] items-center px-3 bg-cyan-100 rounded-lg border-2 border-cyan-500 justify-self-end  duration-200 ease-in-out transform 
                       hover:scale-105"
          >
            <p className="text-[19px] text-center text-cyan-600">
              4. {i18n.t("welcome.eraser")}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col justify-center w-[360px] h-[100px] items-center px-3 bg-cyan-600 rounded-lg border-4 border-slate-50 justify-self-end">
            <p className="text-[28px] text-center text-blue-50">
              {i18n.t("welcome.required_docs")}
            </p>
          </div>
          <div
            className="flex flex-col justify-center w-[360px] h-[80px] items-center px-3 bg-cyan-100 rounded-lg border-2 border-cyan-500 justify-self-end  duration-200 ease-in-out transform 
                       hover:scale-105"
          >
            <p className="text-[19px] text-center text-cyan-600">
              {i18n.t("welcome.application_form")}
            </p>
          </div>
          <div
            className="flex flex-col justify-center w-[360px] h-[80px] items-center px-3 bg-cyan-100 rounded-lg border-2 border-cyan-500 justify-self-end  duration-200 ease-in-out transform 
                       hover:scale-105"
          >
            <p className="text-[19px] text-center text-cyan-600">
              {i18n.t("welcome.birth_certificate")}
            </p>
          </div>
          <div
            className="flex flex-col justify-center w-[360px] h-[80px] items-center px-3 bg-cyan-100 rounded-lg border-2 border-cyan-500 justify-self-end  duration-200 ease-in-out transform 
                       hover:scale-105"
          >
            <p className="text-[19px] text-center text-cyan-600">
              3*4 фотосурет{" "}
            </p>
          </div>
          <div
            className="flex flex-col justify-center w-[360px] h-[80px] items-center px-3 bg-cyan-100 rounded-lg border-2 border-cyan-500 justify-self-end  duration-200 ease-in-out transform 
                       hover:scale-105"
          >
            <p className="text-[19px] text-center text-cyan-600">
              {i18n.t("welcome.process")}
            </p>
          </div>
        </div>
      </div>
      <List className={" justify-center items-center w-full "} />
      <div className="flex flex-col items-center mt-4">
        <h1 className="text-[33px] text-cyan-800  text-center my-10">
          {i18n.t("welcome.faq_1")}
        </h1>
        <details className="bg-cyan-800 text-cyan-50 shadow group w-11/12 rounded-t-2xl">
          <summary className="list-none flex flex-wrap items-center cursor-pointer">
            <h3 className="flex flex-1 p-4 font-semibold justify-around">
              {i18n.t("welcome.faq_question_6")}
            </h3>
            <div className="flex w-10 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </summary>
          <div className="p-6 bg-gray-100 text-black text-left px-14 text-base">
            <p> {i18n.t("welcome.faq_answer_6")}</p>
          </div>
        </details>
        <details className="bg-cyan-800 text-cyan-50 shadow group w-11/12 ">
          <summary className="list-none flex flex-wrap items-center cursor-pointer">
            <h3 className="flex flex-1 p-4 font-semibold justify-around">
              {i18n.t("welcome.faq_question_2")}
            </h3>
            <div className="flex w-10 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </summary>
          <div className="p-6 bg-gray-100 text-black text-left px-14 text-base">
            <p>{i18n.t("welcome.faq_answer_2")}</p>
          </div>
        </details>
        <details className="bg-cyan-800 text-cyan-50 shadow group w-11/12 ">
          <summary className="list-none flex flex-wrap items-center cursor-pointer">
            <h3 className="flex flex-1 p-4 font-semibold justify-around">
              {i18n.t("welcome.faq_question_3")}
            </h3>
            <div className="flex w-10 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </summary>
          <div className="p-6 bg-gray-100 text-black text-left px-14 text-base">
            <p>{i18n.t("welcome.faq_answer_3")}</p>
          </div>
        </details>
        <details className="bg-cyan-800 text-cyan-50 shadow group w-11/12 ">
          <summary className="list-none flex flex-wrap items-center cursor-pointer">
            <h3 className="flex flex-1 p-4 font-semibold justify-around">
              {i18n.t("welcome.faq_question_4")}
            </h3>
            <div className="flex w-10 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </summary>
          <div className="p-6 bg-gray-100 text-black text-left px-14 text-base">
            <p>{i18n.t("welcome.faq_answer_4")}</p>
          </div>
        </details>
        <details className="bg-cyan-800 text-cyan-50 shadow group w-11/12 ">
          <summary className="list-none flex flex-wrap items-center cursor-pointer">
            <h3 className="flex flex-1 p-4 font-semibold justify-around">
              {i18n.t("welcome.faq_question_5")}
            </h3>
            <div className="flex w-10 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </summary>
          <div className="p-6 bg-gray-100 text-black text-left px-14 text-base">
            <p>{i18n.t("welcome.faq_answer_5")}</p>
          </div>
        </details>
        <details className="bg-cyan-800 text-cyan-50 shadow group w-11/12 ">
          <summary className="list-none flex flex-wrap items-center cursor-pointer">
            <h3 className="flex flex-1 p-4 font-semibold justify-around">
              {i18n.t("welcome.faq_question_1")}
            </h3>
            <div className="flex w-10 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </summary>
          <div className="p-6 bg-gray-100 text-black text-left px-14 text-base">
            <p> {i18n.t("welcome.faq_answer_1")}</p>
          </div>
        </details>
        <details className="bg-cyan-800 text-cyan-50 shadow group w-11/12 ">
          <summary className="list-none flex flex-wrap items-center cursor-pointer">
            <h3 className="flex flex-1 p-4 font-semibold justify-around">
              {i18n.t("welcome.faq_question_7")}
            </h3>
            <div className="flex w-10 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </summary>
          <div className="p-6 bg-gray-100 text-black text-left px-14 text-base">
            <p>
              {i18n.t("welcome.faq_answer_7")}
              <li> {i18n.t("welcome.faq_answer_7_1")}</li>
              <li>{i18n.t("welcome.faq_answer_7_2")} </li>
              <li>{i18n.t("welcome.faq_answer_7_3")} </li>
            </p>
          </div>
        </details>
        <details className="bg-cyan-800 text-cyan-50 shadow group w-11/12 ">
          <summary className="list-none flex flex-wrap items-center cursor-pointer">
            <h3 className="flex flex-1 p-4 font-semibold justify-around">
              {i18n.t("welcome.faq_question_8")}
            </h3>
            <div className="flex w-10 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </summary>
          <div className="p-6 bg-gray-100 text-black text-left px-14 text-base">
            <p>{i18n.t("welcome.faq_answer_8")}</p>
          </div>
        </details>
        <details className="bg-cyan-800 text-cyan-50 shadow group w-11/12 ">
          <summary className="list-none flex flex-wrap items-center cursor-pointer">
            <h3 className="flex flex-1 p-4 font-semibold justify-around">
              {i18n.t("welcome.faq_question_9")}
            </h3>
            <div className="flex w-10 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </summary>
          <div className="p-6 bg-gray-100 text-black text-left px-14 text-base">
            <p className="">
              {i18n.t("welcome.faq_answer_9")}
              <ul className="list-decimal ">
                <li>{i18n.t("welcome.faq_answer_9_2")}</li>
                <li>{i18n.t("welcome.ffaq_answer_9_3")}</li>{" "}
                <li>{i18n.t("welcome.faq_answer_10")}</li>{" "}
              </ul>
            </p>
          </div>
        </details>
        <details className="bg-cyan-800 text-cyan-50 shadow group w-11/12 rounded-b-lg ">
          <summary className="list-none flex flex-wrap items-center cursor-pointer">
            <h3 className="flex flex-1 p-4 font-semibold justify-around">
              {i18n.t("welcome.faq_question_10")}
            </h3>
            <div className="flex w-10 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </summary>
          <div className="p-6 bg-gray-100 text-black text-left px-14 text-base">
            <p>{i18n.t("welcome.faq_answer_10")}</p>
          </div>
        </details>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
