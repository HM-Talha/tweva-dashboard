/**
=========================================================
* Material Dashboard 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const dataTableData = {
  columns: [
    { Header: "name", accessor: "name", width: "20%" },
    { Header: "position", accessor: "position", width: "25%" },
    { Header: "office", accessor: "office" },
    { Header: "age", accessor: "age", width: "7%" },
    { Header: "start date", accessor: "startDate" },
    { Header: "salary", accessor: "salary" },
    { Header: "map", accessor: "stats" },
  ],

  rows: [
    {
      name: "Hanny Baniard",
      position: "Data Coordiator",
      office: "Baorixile",
      age: 42,
      startDate: "4/11/2021",
      salary: "$474,978",
      stats: "view",
    },

    {
      name: "Lara Puleque",
      position: "Payment Adjustment Coordinator",
      office: "Cijangkar",
      age: 47,
      startDate: "8/2/2021",
      salary: "$387,287",
      stats: "view",
    },
    {
      name: "Torie Repper",
      position: "Administrative Officer",
      office: "Montpellier",
      age: 25,
      startDate: "4/21/2021",
      salary: "$94,780",
      stats: "view",
    },
    {
      name: "Nat Gair",
      position: "Help Desk Technician",
      office: "Imider",
      age: 57,
      startDate: "12/6/2020",
      salary: "$179,177",
      stats: "view",
    },
    {
      name: "Maggi Slowan",
      position: "Help Desk Technician",
      office: "Jaunpils",
      age: 56,
      startDate: "11/7/2020",
      salary: "$440,874",
      stats: "view",
    },
    {
      name: "Marleah Snipe",
      position: "Account Representative II",
      office: "Orekhovo-Borisovo Severnoye",
      age: 31,
      startDate: "7/18/2021",
      salary: "$404,983",
      stats: "view",
    },
    {
      name: "Georgia Danbury",
      position: "Professor",
      office: "Gniezno",
      age: 50,
      startDate: "10/1/2020",
      salary: "$346,576",
      stats: "view",
    },
    {
      name: "Bev Castan",
      position: "Design Engineer",
      office: "Acharn??s",
      age: 19,
      startDate: "1/14/2021",
      salary: "$445,171",
      stats: "view",
    },
    {
      name: "Reggi Westney",
      position: "Financial Advisor",
      office: "Piu??",
      age: 56,
      startDate: "3/21/2021",
      salary: "$441,569",
      stats: "view",
    },
    {
      name: "Bartholomeus Prosh",
      position: "Project Manager",
      office: "Kel??sh??d va S??darj??n",
      age: 28,
      startDate: "5/27/2021",
      salary: "$336,238",
      stats: "view",
    },
    {
      name: "Sheffy Feehely",
      position: "Software Consultant",
      office: "Ndib??ne Dahra",
      age: 27,
      startDate: "3/23/2021",
      salary: "$473,391",
      stats: "view",
    },
    {
      name: "Euphemia Chastelain",
      position: "Engineer IV",
      office: "Little Baguio",
      age: 63,
      startDate: "5/1/2021",
      salary: "$339,489",
      stats: "view",
    },
    {
      name: "Sharai Labat",
      position: "Geological Engineer",
      office: "B??????",
      age: 53,
      startDate: "6/18/2021",
      salary: "$403,178",
      stats: "view",
    },
    {
      name: "Nicolis Bremmell",
      position: "Analyst Programmer",
      office: "Pira?? do Sul",
      age: 27,
      startDate: "1/29/2021",
      salary: "$443,473",
      stats: "view",
    },
    {
      name: "Mattie Rait",
      position: "Budget/Accounting Analyst IV",
      office: "Mezim??st??",
      age: 30,
      startDate: "6/9/2021",
      salary: "$233,875",
      stats: "view",
    },
    {
      name: "Inger Gawkes",
      position: "Internal Auditor",
      office: "Kangar",
      age: 27,
      startDate: "4/20/2021",
      salary: "$378,343",
      stats: "view",
    },
    {
      name: "Aldus Marginson",
      position: "Chief Design Engineer",
      office: "Pingdingshan",
      age: 29,
      startDate: "3/24/2021",
      salary: "$223,231",
      stats: "view",
    },
    {
      name: "Wendel Swaite",
      position: "Speech Pathologist",
      office: "Rubirizi",
      age: 22,
      startDate: "6/5/2021",
      salary: "$325,812",
      stats: "view",
    },
    {
      name: "Duffy Cicconetti",
      position: "Software Test Engineer I",
      office: "Sendai-shi",
      age: 58,
      startDate: "5/2/2021",
      salary: "$335,397",
      stats: "view",
    },
    {
      name: "Mandi Paulley",
      position: "Account Representative III",
      office: "Independencia",
      age: 25,
      startDate: "4/27/2021",
      salary: "$367,351",
      stats: "view",
    },
    {
      name: "Gladi Doorly",
      position: "Dental Hygienist",
      office: "Longwy",
      age: 52,
      startDate: "4/28/2021",
      salary: "$306,827",
      stats: "view",
    },
    {
      name: "Johnnie Godfray",
      position: "Human Resources Manager",
      office: "Afikpo",
      age: 31,
      startDate: "4/15/2021",
      salary: "$275,513",
      stats: "view",
    },
    {
      name: "Rudolph Jurczik",
      position: "Web Developer III",
      office: "Jaciara",
      age: 36,
      startDate: "11/19/2020",
      salary: "$193,993",
      stats: "view",
    },
    {
      name: "Annmarie Fulbrook",
      position: "Cost Accountant",
      office: "Lisala",
      age: 25,
      startDate: "9/30/2020",
      salary: "$423,486",
      stats: "view",
    },
    {
      name: "Daisey Nickolls",
      position: "Electrical Engineer",
      office: "Xucheng",
      age: 60,
      startDate: "2/26/2021",
      salary: "$209,415",
      stats: "view",
    },
    {
      name: "Mordecai Dace",
      position: "Help Desk Technician",
      office: "Busuanga",
      age: 22,
      startDate: "1/29/2021",
      salary: "$263,774",
      stats: "view",
    },
    {
      name: "Melisande Spall",
      position: "VP Accounting",
      office: "Xiakouyi",
      age: 50,
      startDate: "11/21/2020",
      salary: "$290,169",
      stats: "view",
    },
    {
      name: "Karlik Sherrock",
      position: "GIS Technical Architect",
      office: "Bagumbayan",
      age: 50,
      startDate: "3/13/2021",
      salary: "$217,224",
      stats: "view",
    },
    {
      name: "Constance Vinick",
      position: "Physical Therapy Assistant",
      office: "Jiaoba",
      age: 46,
      startDate: "3/23/2021",
      salary: "$146,130",
      stats: "view",
    },
    {
      name: "Kimberlee Hoogendorp",
      position: "Dental Hygienist",
      office: "Santo Ant??nio de P??dua",
      age: 63,
      startDate: "4/11/2021",
      salary: "$401,826",
      stats: "view",
    },
    {
      name: "Jephthah McIlvenny",
      position: "Executive Secretary",
      office: "Poligny",
      age: 40,
      startDate: "2/25/2021",
      salary: "$397,099",
      stats: "view",
    },
    {
      name: "Claudetta Ivanchenkov",
      position: "Computer Systems Analyst III",
      office: "Barranca de Up??a",
      age: 22,
      startDate: "2/4/2021",
      salary: "$497,394",
      stats: "view",
    },
    {
      name: "Gordie Winterbottom",
      position: "General Manager",
      office: "Kaeng Khro",
      age: 18,
      startDate: "6/11/2021",
      salary: "$85,498",
      stats: "view",
    },
    {
      name: "Yvor Ching",
      position: "Systems Administrator IV",
      office: "Sobreira",
      age: 43,
      startDate: "10/4/2020",
      salary: "$445,688",
      stats: "view",
    },
    {
      name: "Marilin Swires",
      position: "Electrical Engineer",
      office: "Longnan",
      age: 38,
      startDate: "10/30/2020",
      salary: "$121,519",
      stats: "view",
    },
    {
      name: "Tobey Fernan",
      position: "Compensation Analyst",
      office: "Hushan",
      age: 31,
      startDate: "3/17/2021",
      salary: "$275,670",
      stats: "view",
    },
    {
      name: "Jan Trustrie",
      position: "Developer IV",
      office: "Mashava",
      age: 34,
      startDate: "12/3/2020",
      salary: "$200,260",
      stats: "view",
    },
    {
      name: "Silva Linger",
      position: "Nurse Practicioner",
      office: "Cosne-Cours-sur-Loire",
      age: 25,
      startDate: "1/14/2021",
      salary: "$490,838",
      stats: "view",
    },
    {
      name: "Jocko Oriel",
      position: "Design Engineer",
      office: "Clisson",
      age: 61,
      startDate: "12/2/2020",
      salary: "$401,741",
      stats: "view",
    },
    {
      name: "Barbra Ready",
      position: "Paralegal",
      office: "Xuedian",
      age: 29,
      startDate: "11/3/2020",
      salary: "$246,939",
      stats: "view",
    },
    {
      name: "Cynde Blakeslee",
      position: "Software Consultant",
      office: "Kembangan",
      age: 23,
      startDate: "1/9/2021",
      salary: "$186,173",
      stats: "view",
    },
    {
      name: "Erminia O' Shea",
      position: "Analog Circuit Design manager",
      office: "Tungawan",
      age: 51,
      startDate: "12/8/2020",
      salary: "$209,678",
      stats: "view",
    },
    {
      name: "Pietro Hoggins",
      position: "Account Coordinator",
      office: "Lexington",
      age: 34,
      startDate: "7/1/2021",
      salary: "$245,579",
      stats: "view",
    },
    {
      name: "Cobb Fish",
      position: "VP Product Management",
      office: "General Elizardo Aquino",
      age: 60,
      startDate: "8/27/2020",
      salary: "$201,191",
      stats: "view",
    },
    {
      name: "Goddart Zorzutti",
      position: "Office Assistant I",
      office: "Hedi",
      age: 44,
      startDate: "4/14/2021",
      salary: "$89,168",
      stats: "view",
    },
    {
      name: "Joyce Gason",
      position: "VP Product Management",
      office: "Jingzhou",
      age: 48,
      startDate: "10/10/2020",
      salary: "$285,350",
      stats: "view",
    },
    {
      name: "Juliet Lemm",
      position: "Junior Executive",
      office: "Te??ovice",
      age: 37,
      startDate: "4/28/2021",
      salary: "$479,963",
      stats: "view",
    },
    {
      name: "Filberte Dobrowolski",
      position: "Senior Cost Accountant",
      office: "Puncakmanis",
      age: 55,
      startDate: "8/21/2020",
      salary: "$424,438",
      stats: "view",
    },
    {
      name: "Justinian Faraday",
      position: "Help Desk Technician",
      office: "Bacong",
      age: 60,
      startDate: "1/24/2021",
      salary: "$369,012",
      stats: "view",
    },
    {
      name: "Amata Cahan",
      position: "Technical Writer",
      office: "Hradec Kr??lov??",
      age: 56,
      startDate: "9/22/2020",
      salary: "$385,712",
      stats: "view",
    },
    {
      name: "Gunar Albrecht",
      position: "Tax Accountant",
      office: "Chernivtsi",
      age: 52,
      startDate: "6/30/2021",
      salary: "$392,642",
      stats: "view",
    },
    {
      name: "Mal Deignan",
      position: "Senior Cost Accountant",
      office: "Nefta",
      age: 57,
      startDate: "7/18/2021",
      salary: "$322,031",
      stats: "view",
    },
    {
      name: "Hamil Cicci",
      position: "Programmer Analyst IV",
      office: "Fukushima-shi",
      age: 34,
      startDate: "10/7/2020",
      salary: "$471,172",
      stats: "view",
    },
    {
      name: "Stormie Peacop",
      position: "GIS Technical Architect",
      office: "Emiliano Zapata",
      age: 57,
      startDate: "10/21/2020",
      salary: "$217,522",
      stats: "view",
    },
    {
      name: "Kayle Fallon",
      position: "Technical Writer",
      office: "Midleton",
      age: 19,
      startDate: "12/10/2020",
      salary: "$294,275",
      stats: "view",
    },
    {
      name: "Cassandre Watters",
      position: "Technical Writer",
      office: "Karang Tengah",
      age: 21,
      startDate: "7/31/2021",
      salary: "$213,508",
      stats: "view",
    },
    {
      name: "Cobb Fish",
      position: "VP Product Management",
      office: "General Elizardo Aquino",
      age: 60,
      startDate: "8/27/2020",
      salary: "$201,191",
      stats: "view",
    },
  ],
};

export default dataTableData;
