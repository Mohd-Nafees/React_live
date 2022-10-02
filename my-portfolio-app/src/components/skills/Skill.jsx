import { ArrowDownward } from "@material-ui/icons";
import "./skill.css";

function Skill() {
  const technologies = [
    {
      id: 1,
      imgUrl: "assets/language-images/p.jpg",
    },
    {
      id: 2,
      imgUrl: "assets/language-images/dj.png",
    },
    {
      id: 3,
      imgUrl: "assets/language-images/drf.png",
    },
    {
      id: 4,
      imgUrl: "assets/language-images/php.png",
    },
    {
      id: 5,
      imgUrl: "assets/language-images/java2.png",
    },
    {
      id: 6,
      imgUrl: "assets/language-images/react.png",
    },
    {
      id: 7,
      imgUrl: "assets/language-images/js.png",
    },
    {
      id: 8,
      imgUrl: "assets/language-images/jq1.jpg",
    },
    {
      id: 9,
      imgUrl: "assets/language-images/html1.png",
    },
    {
      id: 10,
      imgUrl: "assets/language-images/css.png",
    },
    {
      id: 11,
      imgUrl: "assets/language-images/bts.png",
    },
    {
      id: 12,
      imgUrl: "assets/language-images/mui.png",
    },
  ];
  return (
    <div className="container" style={{ marginTop: "60px" }}>
      <p className="text-center contText">Skills & Technologies</p>
      <br />
      <p className="contp mb-4">
        I can build an application in below Technologies. <ArrowDownward />
      </p>

      <div className="row techRow mb-5">
        {
          technologies.map((certi) => {
            return (
              <div className="col-3 techDiv">
                {" "}
                <img src={certi.imgUrl} alt="" className="lanImg" />{" "}
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Skill;
