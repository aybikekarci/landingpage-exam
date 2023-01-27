import React from "react";
import i18n from "../lang/i18n";

const List = ({ className }) => {
  return (
    <div className={"flex flex-col " + className}>
      <h1 className="text-[33px] text-cyan-800 text-center my-10">
        {" "}
        {i18n.t("welcome.schools")}
      </h1>
      <details className="bg-cyan-800 text-cyan-50 shadow group w-11/12 rounded-t-2xl">
        <summary className="list-none flex flex-wrap items-center cursor-pointer">
          <h3 className="flex flex-1 p-4 font-semibold justify-around">
            {" "}
            {i18n.t("welcome.astana")}
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
        <div className="py-5 bg-gray-100 text-black lg:px-5 px-2">
          <table className="w-full text-left lg:text-base text-xs">
            <thead>
              <tr className="border-t-2 border-b-[3px]">
                <th className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.school_name")}
                </th>
                <th className="py-2"> {i18n.t("welcome.school_address")}</th>
                <th className="py-2 lg:pr-3 pr-5">
                  {" "}
                  {i18n.t("welcome.school_phone")}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2">
                <td className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.astana_bil")}
                </td>
                <td className="py-2">{i18n.t("welcome.astana_bil_address")}</td>
                <td className="py-2 lg:pr-3 pr-5">8 705 131 56 02</td>
              </tr>
              <tr>
                <td className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.astana_kyz")}
                </td>
                <td className="py-2">
                  {" "}
                  {i18n.t("welcome.astana_kyz_address")}
                </td>
                <td className="py-2 lg:pr-3 pr-5">8 702 657 33 96</td>
              </tr>
            </tbody>
          </table>
        </div>
      </details>
      <details className="bg-cyan-800 text-cyan-50 shadow group w-11/12 ">
        <summary className="list-none flex flex-wrap items-center cursor-pointer">
          <h3 className="flex flex-1 p-4 font-semibold justify-around">
            {i18n.t("welcome.almaty")}
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
        <div className="py-5 bg-gray-100 text-black lg:px-5 px-2">
          <table className="w-full text-left lg:text-base text-xs">
            <thead>
              <tr className="border-t-2 border-b-[3px]">
                <th className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.school_name")}
                </th>
                <th className="py-2"> {i18n.t("welcome.school_address")}</th>
                <th className="py-2 lg:pr-3 pr-5">
                  {" "}
                  {i18n.t("welcome.school_phone")}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2">
                <td className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.almaty_bil")}
                </td>
                <td className="py-2">
                  {" "}
                  {i18n.t("welcome.almaty_bil_address")}
                </td>
                <td className="py-2 lg:pr-3 pr-5">8 7272 30 68 78</td>
              </tr>
              <tr className="border-b-2">
                <td className="py-2 lg:pl-3 pl-5">
                  {i18n.t("welcome.almaty_kyz")}
                </td>
                <td className="py-2">{i18n.t("welcome.almaty_kyz_address")}</td>
                <td className="py-2 lg:pr-3 pr-5">8 7252 32 11 56</td>
              </tr>
            </tbody>
          </table>
        </div>
      </details>
      <details className="bg-cyan-800 text-cyan-50 shadow group w-11/12 ">
        <summary className="list-none flex flex-wrap items-center cursor-pointer">
          <h3 className="flex flex-1 p-4 font-semibold justify-around">
            {i18n.t("welcome.shymkent")}
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
        <div className="py-5 bg-gray-100 text-black lg:px-5 px-2">
          <table className="w-full text-left lg:text-base text-xs">
            <thead>
              <tr className="border-t-2 border-b-[3px]">
                <th className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.school_name")}
                </th>
                <th className="py-2"> {i18n.t("welcome.school_address")}</th>
                <th className="py-2 lg:pr-3 pr-5">
                  {" "}
                  {i18n.t("welcome.school_phone")}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2">
                <td className="py-2 lg:pl-3 pl-5">
                  {i18n.t("welcome.shymkent_bil")}
                </td>
                <td className="py-2">
                  {i18n.t("welcome.shymkent_bil_address")}
                </td>
                <td className="py-2 lg:pr-3 pr-5">8 7252 32 11 56</td>
              </tr>
              <tr>
                <td className="py-2 lg:pl-3 pl-5">
                  {i18n.t("welcome.shymkent_kyz")}
                </td>
                <td className="py-2">
                  {i18n.t("welcome.shymkent_kyz_address")}
                </td>
                <td className="py-2 lg:pr-3 pr-5">8 7252 57 66 62</td>
              </tr>
            </tbody>
          </table>
        </div>
      </details>
      <details className="bg-cyan-800 text-cyan-50 shadow group w-11/12 ">
        <summary className="list-none flex flex-wrap items-center cursor-pointer">
          <h3 className="flex flex-1 p-4 font-semibold justify-around">
            {i18n.t("welcome.aqmola_region")}
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
        <div className="py-5 bg-gray-100 text-black lg:px-5 px-2">
          <table className="w-full text-left lg:text-base text-xs">
            <thead>
              <tr className="border-t-2 border-b-[3px]">
                <th className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.school_name")}
                </th>
                <th className="py-2"> {i18n.t("welcome.school_address")}</th>
                <th className="py-2 lg:pr-3 pr-5">
                  {" "}
                  {i18n.t("welcome.school_phone")}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2">
                <td className="py-2 lg:pl-3 pl-5">
                  {i18n.t("welcome.kokshetau_bil")}
                </td>
                <td className="py-2">
                  {i18n.t("welcome.kokshetau_bil_address")}
                </td>
                <td className="py-2 lg:pr-3 pr-5">8 7162 32 83 72</td>
              </tr>
              <tr>
                <td className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.shuchinsk_bil")}
                </td>
                <td className="py-2">
                  {" "}
                  {i18n.t("welcome.shuchinsk_bil_addresss")}
                </td>
                <td className="py-2 lg:pr-3 pr-5">8 7163 62 11 45</td>
              </tr>
            </tbody>
          </table>
        </div>
      </details>
      <details className="bg-cyan-800 text-cyan-50 shadow group w-11/12 ">
        <summary className="list-none flex flex-wrap items-center cursor-pointer">
          <h3 className="flex flex-1 p-4 font-semibold justify-around">
            Ақтөбе облысы
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
        <div className="py-5 bg-gray-100 text-black lg:px-5 px-2">
          <table className="w-full text-left lg:text-base text-xs">
            <thead>
              <tr className="border-t-2 border-b-[3px]">
                <th className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.school_name")}
                </th>
                <th className="py-2"> {i18n.t("welcome.school_address")}</th>
                <th className="py-2 lg:pr-3 pr-5">
                  {" "}
                  {i18n.t("welcome.school_phone")}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2">
                <td className="py-2 lg:pl-3 pl-5">
                  {i18n.t("welcome.aqtobe_bil")}
                </td>
                <td className="py-2">{i18n.t("welcome.aqtobe_bil_addres")}</td>
                <td className="py-2 lg:pr-3 pr-5">8 7132 56 45 78</td>
              </tr>
              <tr>
                <td className="py-2 lg:pl-3 pl-5">
                  {i18n.t("welcome.aqtobe_kyz")}
                </td>
                <td className="py-2">{i18n.t("welcome.aqtobe_kyz_address")}</td>
                <td className="py-2 lg:pr-3 pr-5">8 707 555 24 24</td>
              </tr>
            </tbody>
          </table>
        </div>
      </details>
      <details className="bg-cyan-800 text-cyan-50 shadow group w-11/12 ">
        <summary className="list-none flex flex-wrap items-center cursor-pointer">
          <h3 className="flex flex-1 p-4 font-semibold justify-around">
            {i18n.t("welcome.almaty_region")}
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
        <div className="py-5 bg-gray-100 text-black lg:px-5 px-2">
          <table className="w-full text-left lg:text-base text-xs">
            <thead>
              <th className="py-2 lg:pl-3 pl-5">
                {" "}
                {i18n.t("welcome.school_name")}
              </th>
              <th className="py-2"> {i18n.t("welcome.school_address")}</th>
              <th className="py-2 lg:pr-3 pr-5">
                {" "}
                {i18n.t("welcome.school_phone")}
              </th>
            </thead>
            <tbody>
              <tr className="border-b-2">
                <td className="py-2 lg:pl-3 pl-5">
                  {i18n.t("welcome.taldykorgan_bil")}
                </td>
                <td className="py-2">
                  {i18n.t("welcome.taldykorgan_bil_address")}
                </td>
                <td className="py-2 lg:pr-3 pr-5">8 7282 22 16 57</td>
              </tr>
              <tr>
                <td className="py-2 lg:pl-3 pl-5">
                  {i18n.t("welcome.esik_bil")}
                </td>
                <td className="py-2">{i18n.t("welcome.esik_bil_address")}</td>
                <td className="py-2 lg:pr-3 pr-5">8 727 754 26 36</td>
              </tr>
            </tbody>
          </table>
        </div>
      </details>
      <details className="bg-cyan-800 text-cyan-50 shadow group w-11/12 ">
        <summary className="list-none flex flex-wrap items-center cursor-pointer">
          <h3 className="flex flex-1 p-4 font-semibold justify-around">
            {i18n.t("welcome.atyrau_region")}
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
        <div className="py-5 bg-gray-100 text-black lg:px-5 px-2">
          <table className="w-full text-left lg:text-base text-xs">
            <thead>
              <tr className="border-t-2 border-b-[3px]">
                <th className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.school_name")}
                </th>
                <th className="py-2"> {i18n.t("welcome.school_address")}</th>
                <th className="py-2 lg:pr-3 pr-5">
                  {" "}
                  {i18n.t("welcome.school_phone")}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2">
                <td className="py-2 lg:pl-3 pl-5">
                  {i18n.t("welcome.atyrau_bil")}
                </td>
                <td className="py-2">{i18n.t("welcome.atyrau_bil_address")}</td>
                <td className="py-2 lg:pr-3 pr-5">8 778 133 77 88</td>
              </tr>
              <tr>
                <td className="py-2 lg:pl-3 pl-5">
                  {i18n.t("welcome.atyrau_kyz")}
                </td>
                <td className="py-2">{i18n.t("welcome.atyrau_kyz_address")}</td>
                <td className="py-2 lg:pr-3 pr-5">8 778 871 53 84</td>
              </tr>
              <tr className="border-t-2 border-b-[2px]">
                <td className="py-2 lg:pl-3 pl-5">
                  {i18n.t("welcome.kulsary_bil")}
                </td>
                <td className="py-2">
                  {i18n.t("welcome.kulsary_bil_address")}
                </td>
                <td className="py-2 lg:pr-3 pr-5">8 7123 75 32 68</td>
              </tr>
            </tbody>
          </table>
        </div>
      </details>
      <details className="bg-cyan-800 text-cyan-50 shadow group w-11/12 ">
        <summary className="list-none flex flex-wrap items-center cursor-pointer">
          <h3 className="flex flex-1 p-4 font-semibold justify-around">
            {i18n.t("welcome.batys_kz")}
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
        <div className="py-5 bg-gray-100 text-black lg:px-5 px-2">
          <table className="w-full text-left lg:text-base text-xs">
            <thead>
              <tr className="border-t-2 border-b-[3px]">
                <th className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.school_name")}
                </th>
                <th className="py-2"> {i18n.t("welcome.school_address")}</th>
                <th className="py-2 lg:pr-3 pr-5">
                  {" "}
                  {i18n.t("welcome.school_phone")}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2">
                <td className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.oral_bil")}
                </td>
                <td className="py-2"> {i18n.t("welcome.oral_bil_address")}</td>
                <td className="py-2 lg:pr-3 pr-5">8 706 430 10 46</td>
              </tr>
            </tbody>
          </table>
        </div>
      </details>
      <details className="bg-cyan-800 text-cyan-50 shadow group w-11/12 ">
        <summary className="list-none flex flex-wrap items-center cursor-pointer">
          <h3 className="flex flex-1 p-4 font-semibold justify-around">
            {i18n.t("welcome.zhambyl_region")}
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
        <div className="py-5 bg-gray-100 text-black lg:px-5 px-2">
          <table className="w-full text-left lg:text-base text-xs">
            <thead>
              <tr className="border-t-2 border-b-[3px]">
                <th className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.school_name")}
                </th>
                <th className="py-2"> {i18n.t("welcome.school_address")}</th>
                <th className="py-2 lg:pr-3 pr-5">
                  {" "}
                  {i18n.t("welcome.school_phone")}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2">
                <td className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.taraz_bil")}
                </td>
                <td className="py-2"> {i18n.t("welcome.taraz_bil_address")}</td>
                <td className="py-2 lg:pr-3 pr-5">8 778 171 73 79</td>
              </tr>
              <tr>
                <td className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.taraz_kyz")}
                </td>
                <td className="py-2"> {i18n.t("welcome.taraz_kyz_address")}</td>
                <td className="py-2 lg:pr-3 pr-5">8 747 102 05 84</td>
              </tr>
            </tbody>
          </table>
        </div>
      </details>
      <details className="bg-cyan-800 text-cyan-50 shadow group w-11/12 ">
        <summary className="list-none flex flex-wrap items-center cursor-pointer">
          <h3 className="flex flex-1 p-4 font-semibold justify-around">
            {i18n.t("welcome.karagandy_region")}
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
        <div className="py-5 bg-gray-100 text-black lg:px-5 px-2">
          <table className="w-full text-left lg:text-base text-xs">
            <thead>
              <tr className="border-t-2 border-b-[3px]">
                <th className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.school_name")}
                </th>
                <th className="py-2"> {i18n.t("welcome.school_address")}</th>
                <th className="py-2 lg:pr-3 pr-5">
                  {" "}
                  {i18n.t("welcome.school_phone")}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2">
                <td className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.karagandy_bil")}
                </td>
                <td className="py-2">
                  {" "}
                  {i18n.t("welcome.karagandy_bil_address")}
                </td>
                <td className="py-2 lg:pr-3 pr-5">8 7212 37 11 02</td>
              </tr>
              <tr>
                <td className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.karagandy_kyz")}
                </td>
                <td className="py-2">
                  {" "}
                  {i18n.t("welcome.karagandy_kyz_address")}
                </td>
                <td className="py-2 lg:pr-3 pr-5">8 7212 50 22 20</td>
              </tr>
              <tr className="border-t-2 border-b-[2px]">
                <td className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.zhezkazgan_bil")}
                </td>
                <td className="py-2">
                  {" "}
                  {i18n.t("welcome.zhezkazgan_bil_address")}
                </td>
                <td className="py-2 lg:pr-3 pr-5">8 7102 41 00 99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </details>
      <details className="bg-cyan-800 text-cyan-50 shadow group w-11/12  ">
        <summary className="list-none flex flex-wrap items-center cursor-pointer">
          <h3 className="flex flex-1 p-4 font-semibold justify-around">
            {i18n.t("welcome.kostanay_region")}
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
        <div className="py-5 bg-gray-100 text-black lg:px-5 px-2">
          <table className="w-full text-left lg:text-base text-xs">
            <thead>
              <tr className="border-t-2 border-b-[3px]">
                <th className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.school_name")}
                </th>
                <th className="py-2"> {i18n.t("welcome.school_address")}</th>
                <th className="py-2 lg:pr-3 pr-5">
                  {" "}
                  {i18n.t("welcome.school_phone")}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2">
                <td className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.kostanay_bil")}
                </td>
                <td className="py-2">
                  {" "}
                  {i18n.t("welcome.kostanay_bil_address")}
                </td>
                <td className="py-2 lg:pr-3 pr-5">8 7142 55 04 11</td>
              </tr>
            </tbody>
          </table>
        </div>
      </details>
      <details className="bg-cyan-800 text-cyan-50 shadow group w-11/12  ">
        <summary className="list-none flex flex-wrap items-center cursor-pointer">
          <h3 className="flex flex-1 p-4 font-semibold justify-around">
            {i18n.t("welcome.kyzylorda_region")}
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
        <div className="py-5 bg-gray-100 text-black lg:px-5 px-2">
          <table className="w-full text-left lg:text-base text-xs">
            <thead>
              <tr className="border-t-2 border-b-[3px]">
                <th className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.school_name")}
                </th>
                <th className="py-2"> {i18n.t("welcome.school_address")}</th>
                <th className="py-2 lg:pr-3 pr-5">
                  {" "}
                  {i18n.t("welcome.school_phone")}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2">
                <td className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.kyzylorda_bil")}
                </td>
                <td className="py-2">
                  {" "}
                  {i18n.t("welcome.kyzylorda_bil_address")}
                </td>
                <td className="py-2 lg:pr-3 pr-5">8 724 221 24 92</td>
              </tr>
              <tr>
                <td className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.kyzylorda_kyz")}
                </td>
                <td className="py-2">
                  {" "}
                  {i18n.t("welcome.kyzylorda_kyz_address")}
                </td>
                <td className="py-2 lg:pr-3 pr-5">8 724 270 00 80</td>
              </tr>
            </tbody>
          </table>
        </div>
      </details>
      <details className="bg-cyan-800 text-cyan-50 shadow group w-11/12 ">
        <summary className="list-none flex flex-wrap items-center cursor-pointer">
          <h3 className="flex flex-1 p-4 font-semibold justify-around">
            {i18n.t("welcome.mangystau_region")}
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
        <div className="py-5 bg-gray-100 text-black lg:px-5 px-2">
          <table className="w-full text-left lg:text-base text-xs">
            <thead>
              <tr className="border-t-2 border-b-[3px]">
                <th className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.school_name")}
                </th>
                <th className="py-2"> {i18n.t("welcome.school_address")}</th>
                <th className="py-2 lg:pr-3 pr-5">
                  {" "}
                  {i18n.t("welcome.school_phone")}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2">
                <td className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.aqtau_bil")}
                </td>
                <td className="py-2"> {i18n.t("welcome.aqtau_bil_address")}</td>
                <td className="py-2 lg:pr-3 pr-5">8 7292 33 84 29</td>
              </tr>
              <tr>
                <td className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.zhanaozen_bil")}
                </td>
                <td className="py-2">
                  {" "}
                  {i18n.t("welcome.zhanaozen_bil_address")}
                </td>
                <td className="py-2 lg:pr-3 pr-5">8 7293 45 59 76</td>
              </tr>
            </tbody>
          </table>
        </div>
      </details>
      <details className="bg-cyan-800 text-cyan-50 shadow group w-11/12  ">
        <summary className="list-none flex flex-wrap items-center cursor-pointer">
          <h3 className="flex flex-1 p-4 font-semibold justify-around">
            {i18n.t("welcome.pavlodar_region")}
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
        <div className="py-5 bg-gray-100 text-black lg:px-5 px-2">
          <table className="w-full text-left lg:text-base text-xs">
            <thead>
              <tr className="border-t-2 border-b-[3px]">
                <th className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.school_name")}
                </th>
                <th className="py-2"> {i18n.t("welcome.school_address")}</th>
                <th className="py-2 lg:pr-3 pr-5">
                  {" "}
                  {i18n.t("welcome.school_phone")}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2">
                <td className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.pavlodar_bil")}
                </td>
                <td className="py-2">
                  {" "}
                  {i18n.t("welcome.pavlodar_bil_address")}
                </td>
                <td className="py-2 lg:pr-3 pr-5">8 7182 31 03 62</td>
              </tr>
              <tr>
                <td className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.pavlodar_kyz")}
                </td>
                <td className="py-2">
                  {" "}
                  {i18n.t("welcome.pavlodar_kyz_address")}
                </td>
                <td className="py-2 lg:pr-3 pr-5">8 7182 60 71 98</td>
              </tr>
              <tr className="border-t-2 border-b-[2px]">
                <td className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.ekibastuz_bil")}
                </td>
                <td className="py-2">
                  {" "}
                  {i18n.t("welcome.ekibastuz_bil_address")}
                </td>
                <td className="py-2 lg:pr-3 pr-5">8 7187 75 02 08</td>
              </tr>
            </tbody>
          </table>
        </div>
      </details>
      <details className="bg-cyan-800 text-cyan-50 shadow group w-11/12 ">
        <summary className="list-none flex flex-wrap items-center cursor-pointer">
          <h3 className="flex flex-1 p-4 font-semibold justify-around">
            {i18n.t("welcome.north_kz")}
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
        <div className="py-5 bg-gray-100 text-black lg:px-5 px-2">
          <table className="w-full text-left lg:text-base text-xs">
            <thead>
              <tr className="border-t-2 border-b-[3px]">
                <th className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.school_name")}
                </th>
                <th className="py-2"> {i18n.t("welcome.school_address")}</th>
                <th className="py-2 lg:pr-3 pr-5">
                  {" "}
                  {i18n.t("welcome.school_phone")}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2">
                <td className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.petropavl_bil")}
                </td>
                <td className="py-2">
                  {i18n.t("welcome.petropavl_bil_address")}
                </td>
                <td className="py-2 lg:pr-3 pr-5">8 7152 51 72 31</td>
              </tr>
            </tbody>
          </table>
        </div>
      </details>
      <details className="bg-cyan-800 text-cyan-50 shadow group w-11/12 ">
        <summary className="list-none flex flex-wrap items-center cursor-pointer">
          <h3 className="flex flex-1 p-4 font-semibold justify-around">
            {i18n.t("welcome.turkestan_region")}
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
        <div className="py-5 bg-gray-100 text-black lg:px-5 px-2">
          <table className="w-full text-left lg:text-base text-xs">
            <thead>
              <th className="py-2 lg:pl-3 pl-5">
                {" "}
                {i18n.t("welcome.school_name")}
              </th>
              <th className="py-2"> {i18n.t("welcome.school_address")}</th>
              <th className="py-2 lg:pr-3 pr-5">
                {" "}
                {i18n.t("welcome.school_phone")}
              </th>
            </thead>
            <tbody>
              <tr className="border-b-2">
                <td className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.kentau_bil")}
                </td>
                <td className="py-2">
                  {" "}
                  {i18n.t("welcome.kentau_bil_address")}
                </td>
                <td className="py-2 lg:pr-3 pr-5">8 702 790 85 05</td>
              </tr>
              <tr>
                <td className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.arys_bil")}
                </td>
                <td className="py-2"> {i18n.t("welcome.arys_bil_address")}</td>
                <td className="py-2 lg:pr-3 pr-5">8 7254 02 16 54</td>
              </tr>
            </tbody>
          </table>
        </div>
      </details>
      <details className="bg-cyan-800 text-cyan-50 shadow group w-11/12 rounded-b-lg ">
        <summary className="list-none flex flex-wrap items-center cursor-pointer">
          <h3 className="flex flex-1 p-4 font-semibold justify-around">
            {i18n.t("welcome.east_region")}
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
        <div className="py-5 bg-gray-100 text-black lg:px-5 px-2">
          <table className="w-full text-left lg:text-base text-xs">
            <thead>
              <tr className="border-t-2 border-b-[3px]">
                <th className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.school_name")}
                </th>
                <th className="py-2"> {i18n.t("welcome.school_address")}</th>
                <th className="py-2 lg:pr-3 pr-5">
                  {" "}
                  {i18n.t("welcome.school_phone")}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2">
                <td className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.oskemen_bil")}
                </td>
                <td className="py-2">
                  {" "}
                  {i18n.t("welcome.oskemen_bil_address")}
                </td>
                <td className="py-2 lg:pr-3 pr-5">8 723 225 29 62</td>
              </tr>
              <tr>
                <td className="py-2 lg:pl-3 pl-5">
                  {" "}
                  {i18n.t("welcome.semey_bil")}{" "}
                </td>
                <td className="py-2"> {i18n.t("welcome.semey_bil_address")}</td>
                <td className="py-2 lg:pr-3 pr-5">8 7222 77 17 80</td>
              </tr>
            </tbody>
          </table>
        </div>
      </details>
    </div>
  );
};

export default List;
