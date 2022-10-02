import "./project.css";
import ProjectData from "./ProjectData";
import { useState } from "react";
import { ArrowDownward } from "@material-ui/icons";

function Project() {
  const [btnActive1, setBtnActive1] = useState("active");
  const [btnActive2, setBtnActive2] = useState("");
  const [btnActive3, setBtnActive3] = useState("");
  const [btnActive4, setBtnActive4] = useState("");
  const [btnActive5, setBtnActive5] = useState("");

  const data = [
    {
      id: 11,
      uniqueData: "drf",
      headerTitle: "Food Delevery API",
      tooTipTitle: "Food Delevery API",
      imgUrl: "assets/project_image/burger.png",
      projectText:
      "This project is develop for online food delivery service. Customer can search food and order food and give the reviews and rating on different Restaurant and food.",
    },
    {
      id: 12,
      uniqueData: "drf",
      headerTitle: "Online Shoping API",
      tooTipTitle: "Online Shoping API",
      imgUrl: "assets/project_image/ecom_milk.png",
      projectText: "This project is develop for online shoping service. Customer can search product and order product and give the reviews and rating on different Shops and product.",
    },
    {
      id: 13,
      uniqueData: "drf",
      headerTitle: "Glasses shop API",
      tooTipTitle: "Glasses shop API",
      imgUrl: "assets/project_image/glasses.png",
      projectText: "This project is develoop for online glasses shoping service",
    },
    {
      id: 14,
      uniqueData: "drf",
      headerTitle: "Music player API",
      tooTipTitle: "Music player API",
      imgUrl: "assets/project_image/music1.png",
      projectText: "This is an application based on search music and watch music and user can add music is the  favorite list and so on...",
    },
    {
      id: 15,
      uniqueData: "drf",
      headerTitle: "Spotify music API",
      tooTipTitle: "Spotify music player API",
      imgUrl: "assets/project_image/music2.png",
      projectText: "This is and music player app like Spotify user can play music and search music and add music in the favorite list .",
    },
    {
      id: 16,
      uniqueData: "drf",
      headerTitle: "Pizza Delevery API",
      tooTipTitle: "Pizza Delevery API",
      imgUrl: "assets/project_image/pizza.png",
      projectText: "This is an online Pizza Delevery App service Customer search and order different category pizza.",
    },

    {
      id: 17,
      uniqueData: "django",
      headerTitle: "M Akmal Dresses",
      tooTipTitle: "M Akmal Dresses",
      imgUrl: "assets/project_image/makmal.png",
      projectText: "This is a Clothing based Website for manage buying and selling details on online and can search or filter details based on the required.",
    },
    {
      id: 21,
      uniqueData: "django",
      headerTitle: "Music player App",
      tooTipTitle: "Music player app",
      imgUrl: "assets/project_image/music1.png",
      projectText: "This is an application based on search music and watch music and user and add music is the favorite list and so on...",
    },
    {
      id: 22,
      uniqueData: "django",
      headerTitle: "Spotify music app",
      tooTipTitle: "Spotify music player app",
      imgUrl: "assets/project_image/music2.png",
      projectText: "This is and music player app like Spotify user can play music and search music and add music in the favorite list .",
    },
    {
      id: 23,
      uniqueData: "django",
      headerTitle: "Food Delivery App",
      tooTipTitle: "Food Delivery App",
      imgUrl: "assets/project_image/burger.png",
      projectText:
      "This project is develop for online food delivery service. Customer can search food and order food and give the reviews and rating on different Restaurant and food.",
    },
    {
      id: 24,
      uniqueData: "django",
      headerTitle: "Gym Management",
      tooTipTitle: "Student Management System",
      imgUrl: "assets/project_image/gym.PNG",
      projectText:
      "The Project is a software designed to help the gym to keep the track of the day to day activities which take place in the gym. Project deals with an online system designed for management of customers,enquiries, and equipments, payment etc.",
    },
    {
      id: 25,
      uniqueData: "django",
      headerTitle: "ECommerce App",
      tooTipTitle: "ECommerce Management System",
      imgUrl: "assets/project_image/eshop.png",
      projectText:
      "This is an ECommerce Management System is an online Dresses shoping service. Customer can search and add to cart product and order products through this systems.",
    },

    {
      id: 1,
      uniqueData: "other",
      headerTitle: "Hotel Management",
      tooTipTitle: "Hotel Management System",
      imgUrl: "assets/project_image/book.PNG",
      projectText: "This is a Hotel management system is an online room booking system. Customer can search nearby availabe room in hotel and can book room on the based required.",
    },
    {
      id: 2,
      uniqueData: "other",
      headerTitle: "Game(Cat and Dog)",
      tooTipTitle: "Game",
      imgUrl: "assets/project_image/game.PNG",
      projectText: "This is an animation based game cat and dog that can not colide to each others, Cat is jump or back to save from Dog.",
    },

    {
      id: 3,
      uniqueData: "react",
      headerTitle: "Social Media App",
      tooTipTitle: "Social Media App",
      imgUrl: "assets/project_image/media.png",
      projectText: "Social Media App is a social app like facebook and instagram user can post like,share and comment on the post data.",
    },
    {
      id: 4,
      uniqueData: "react",
      headerTitle: "News API System",
      tooTipTitle: "News Management System",
      imgUrl: "assets/project_image/news.png",
      projectText: "This is a News Management System, you can filter news with category wise and can read latest news with ariticles with infinite scroll bar through the help of news api.",
    },
    {
      id: 5,
      uniqueData: "react",
      headerTitle: "My Portfolio App",
      tooTipTitle: "My Portfolio Website",
      imgUrl: "assets/project_image/my_portfolio.png",
      projectText: "This is my Portfolio Website, that is present infront of you  this is development in full responsive designed in react JS and Material UI.",
    },
  ];

  const [myID, setMyID] = useState("all");

  var filterDataHandler1 = () => {
    setBtnActive1("active");
    setBtnActive2("");
    setBtnActive3("");
    setBtnActive4("");
    setBtnActive5("");

    setMyID("all");
  };
  var filterDataHandler2 = () => {
    setBtnActive2("active");
    setBtnActive1("");
    setBtnActive3("");
    setBtnActive4("");
    setBtnActive5("");

    setMyID("django");
  };
  var filterDataHandler3 = () => {
    setBtnActive3("active");
    setBtnActive2("");
    setBtnActive1("");
    setBtnActive4("");
    setBtnActive5("");

    setMyID("drf");
  };
  var filterDataHandler4 = () => {
    setBtnActive4("active");
    setBtnActive2("");
    setBtnActive3("");
    setBtnActive1("");
    setBtnActive5("");

    setMyID("react");
  };
  var filterDataHandler5 = () => {
    setBtnActive5("active");
    setBtnActive2("");
    setBtnActive3("");
    setBtnActive4("");
    setBtnActive1("");

    setMyID("other");
  };

  return (
    <div className="container" style={{ marginTop: "60px" }}>
      <p className="text-center contText">Our Works</p>
      <br />
      <p className="contp">
        Here my project works{" "}
        <ArrowDownward />
      </p>
      <br />
      <div className="myBtnContainer text-center">
        <button
          className={`btn p-2 m-4 filterBtn ${btnActive1}`}
          onClick={filterDataHandler1}
        >
          {" "}
          Show all
        </button>
        <button
          className={`btn p-2 m-4 filterBtn ${btnActive2}`}
          onClick={filterDataHandler2}
        >
          {" "}
          Django
        </button>
        <button
          className={`btn p-2 m-4 filterBtn ${btnActive3}`}
          onClick={filterDataHandler3}
        >
          {" "}
          Django Rest API
        </button>
        <button
          className={`btn p-2 m-4 filterBtn ${btnActive4}`}
          onClick={filterDataHandler4}
        >
          {" "}
          React JS
        </button>
        <button
          className={`btn p-2 m-4 filterBtn ${btnActive5}`}
          onClick={filterDataHandler5}
        >
          {" "}
          Others
        </button>
      </div>

      <div className="row mt-5 text-center projectItems">
        {
          data
            .filter((items) => items.uniqueData === myID)
            
            .map((item) => (
              <ProjectData data={item} key={item.id} />
            ))
          

          // data.map((dataDetails) => {

          //     return(

          //         <ProjectData data={dataDetails} key={dataDetails.id}/>
          //     )
          // })
        }
        {
          data
            .filter((items) => myID === "all")
            
            .map((item) => (
              <ProjectData data={item} key={item.id} />
            ))
        }
      </div>
    </div>
  );
}

export default Project;
