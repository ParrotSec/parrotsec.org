import { CardActionArea, Grid, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import Carousel from 'components/Carousel'
import collaborations from 'containers/PartnersContainers/CollaborationsSection/collaborations'

const useStyles = makeStyles(theme => ({
  actionArea: {
    display: 'flex',
    borderRadius: 24,
    marginTop: theme.spacing(2)
  },
  collaborations: {
    paddingTop: theme.spacing(10)
  },
  collaborationsPaper: {
    padding: theme.spacing(4)
  },
  collaborationsDesc: {
    paddingRight: theme.spacing(5)
  }
}))

const CollaborationSection = () => {
  const classes = useStyles()

  return (
    <Grid container item xs={10} className={classes.collaborations}>
      <Paper elevation={0} className={classes.collaborationsPaper}>
        <Grid container item xs={12} justifyContent="center">
          <Typography variant="h5" gutterBottom>
            Collaborations
          </Typography>
        </Grid>
        <Carousel>
          {collaborations.map(data => (
            <CardActionArea key={data.name} className={classes.actionArea} href={data.url}>
              <Paper elevation={0} className={classes.collaborationsPaper}>
                <Grid container item md={12} direction="row">
                  <Grid container item md={8} className={classes.collaborationsDesc}>
                    <Typography variant="h4" gutterBottom>
                      {data.name}
                    </Typography>
                    <Typography paragraph>{data.description}</Typography>
                  </Grid>
                  <Grid container item md={4}>
                    <Paper
                      elevation={2}
                      style={{
                        width: '100%',
                        height: '100%',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: `url('${data.image}')`
                      }}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </CardActionArea>
          ))}
        </Carousel>
      </Paper>
    </Grid>
  )
}

export default CollaborationSection
