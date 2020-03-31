import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles({
  card: {
    width: "500px"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    textAlign: "left",
    marginBottom: "1rem",
    textTransform: "uppercase"
  },
  pos: {
    marginBottom: 12
  },
  divider: {
    marginBottom: "1rem"
  }
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} variant="h5">
          Client DEtail
        </Typography>
        <Divider className={classes.divider} />
        <Grid container spacing={3}>
          <Grid item xs={6} sm={3}>
            test 1
          </Grid>
          <Grid item xs={6} sm={3}>
            test2
          </Grid>
          <Grid item xs={6} sm={3}>
            test3
          </Grid>
          <Grid item xs={6} sm={3}>
            test 4
          </Grid>
          <Grid item xs={6} sm={3}>
            test 5
          </Grid>
          <Grid item xs={6} sm={3}>
            test 6
          </Grid>
          <Grid item xs={6} sm={3}>
            test 7
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  );
}
