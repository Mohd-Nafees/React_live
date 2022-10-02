import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import "./project.css";
import clsx from "clsx";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
    margin: 10,
    borderRadius: 20,
    padding: 2,
    marginTop: 15,
    marginBottom: 15,
    "&:hover": {
      transition: "transform 0.2s",
      transform: "scale(1.1) rotate(0deg)",
      backgroundColor: "transparent",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    borderRadius: 10,
    boxShadow: true,
    "&:hover": {
      transition: "transform 0.2s",
      transform: "scale(1.1) rotate(0deg)",
    },
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const ProjectData = ({ data }) => {
  const { headerTitle, tooTipTitle, imgUrl, projectText } = data;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader title={headerTitle} />
      <a href={imgUrl} target={"_blank"} rel="noreferrer">
      <CardMedia className={classes.media} image={imgUrl} title={tooTipTitle} />
      </a>
      <CardContent>

        <Typography variant="body2" color="textSecondary" component="p">
            {" "}{projectText.slice(0, 12) + "... read more"}
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
        </Typography>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            {projectText}
            </Typography>
          </CardContent>
        </Collapse>

        <a href="https://github.com/uniquedeveloper143" className="linkBtn" target={"_blank"} rel="noreferrer">
          Go to Project
        </a>
      </CardContent>
    </Card>
  );
};

export default ProjectData;
