import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from "react-share"
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "react-share"
import { FaShareAlt } from 'react-icons/fa';

import "./Card.css"
import { useHistory } from "react-router-dom"


const useStyles = makeStyles((theme) => ({
  root: {
    //minWidth: 200,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));



export default function BlogCard(props) {
  let history = useHistory()
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const img = `/uploads/${props.image}`

  const handleDelete = () => {
    fetch(`http://localhost:5000/blogs/${props.id}`, {
      method: 'DELETE'
    }).then(() => {
      window.location.reload()
    })
  }

  return (
    <Card className={classes.root} className="blogCard">
      <CardHeader
        title={props.title}
        style={{ height: "120px" }}
      />
      <CardMedia
        className={classes.media}
        image={img}
        title="Paella dish"
        className="blogPhoto"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.content.length > 100 ? props.content.substring(0, 150) + '...' : props.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing style={{justifyContent:"space-around"}}>

      <div  className="share-button" >
        <span className="share"><FaShareAlt/>Share </span>
        <FacebookShareButton url={`http://localhost:5000/blogs/${props.id}`}>
          <FacebookIcon logoFillColor="white" round={true} size={30} className="socialicon"></FacebookIcon>
        </FacebookShareButton>
        <LinkedinShareButton url={`http://localhost:5000/blogs/${props.id}`}>
          <LinkedinIcon logoFillColor="white" round={true} size={30} className="socialicon"> </LinkedinIcon>
        </LinkedinShareButton>
        <TwitterShareButton url={`http://localhost:5000/blogs/${props.id}`}>
          <TwitterIcon logoFillColor="white" round={true} size={30} className="socialicon"> </TwitterIcon>
        </TwitterShareButton>
        
        </div>

        <div className="button" className="readmore" style={{ fontSize: "1em" }} onClick={() => { history.push(`${props.id}`) }}>Read more</div>

      </CardActions>

    </Card>
  );
}