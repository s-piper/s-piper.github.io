import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Projects() {

  const useStyles = makeStyles({
    root: {
      minHeight: 145,
      maxWidth: 345,
      justifyContent: 'center',
    },
    media: {
      height: 140,
    },
    spacing: {

    }
  });


  const classes = useStyles();

  const recvrClick = () => {
    const url = 'https://github.com/s-piper/solo-project-2021';
    window.open(url);
  }

  const albumClick = () => {
    const url = 'https://github.com/s-piper/react-weekend-gallery';
    window.open(url);
  }

  const toDoClick = () => {
    const url = 'https://github.com/s-piper/weekend-sql-to-do-list';
    window.open(url);
  }

  return (

    <div className="projects">
      {/* <div>
        <img className="solo" src='https://raw.githubusercontent.com/s-piper/solo-project-2021/master/screenshot/Screen%20Shot%202021-07-18%20at%2010.28.59%20PM.png' />
      </div>
      <div>
        <img className="jazz" src='https://raw.githubusercontent.com/s-piper/react-weekend-gallery/master/screenshot/jazz_screenshot.png' />
      </div> */}
      <div className="cardMargin">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://raw.githubusercontent.com/s-piper/solo-project-2021/master/screenshot/Screen%20Shot%202021-07-18%20at%2010.28.59%20PM.png"
              title="Re-Cvr"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Re-Cvr
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Currently building an app that would allow homeowners to catalogue big ticket possessions to help ease the burden of working with an insurance company after a total loss.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.root}>
            <Button size="small" color="primary" onClick={recvrClick}>
              View More
            </Button>
          </CardActions>
        </Card>
      </div>

      <div className="cardMargin">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://raw.githubusercontent.com/s-piper/react-weekend-gallery/master/screenshot/jazz_screenshot.png"
              title="Album Gallery"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Album Gallery
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Displays a gallery of Albums that conditionally render a description when clicked.  Each album tracks the number of time it is liked.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.root}>
            <Button size="small" color="primary" onClick={albumClick}>
              View More
            </Button>
          </CardActions>
        </Card>
      </div>

      <div className="cardMargin">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://raw.githubusercontent.com/s-piper/weekend-sql-to-do-list/master/screenshot/Screen%20Shot%202021-07-19%20at%2012.16.11%20AM.png"
              title="ToDo App"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                ToDo App
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                A ToDo app using SQL to track the importance and progress of tasks.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.root}>
            <Button size="small" color="primary" onClick={toDoClick}>
              View More
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>

  );
}

export default Projects;