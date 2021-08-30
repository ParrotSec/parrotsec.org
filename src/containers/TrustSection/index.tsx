import React from 'react'
import { Grid, GridProps, makeStyles, Typography } from '@material-ui/core'
import oreo from '../../assets/oreo 1.svg'
import SVGIcon from 'components/SVGIcon'

const useStyles = makeStyles({
  trustLogosBlock: {
    marginTop: 40
  },
  img: {
    display: 'block',
    margin: 'auto'
  }
})

const TrustSection = (props: GridProps) => {
  const classes = useStyles()
  return (
    <Grid {...props} container justifyContent="center" alignItems="center" item xs={10}>
      <Grid item xs={10}>
        <Typography variant="body2" align="center">
          Trusted by cybersecurity professionals around the world
        </Typography>
      </Grid>
      <Grid
        className={classes.trustLogosBlock}
        container
        item
        xs={10}
        md={8}
        spacing={4}
        justifyContent="center"
      >
        <Grid item xs={6} md={4} lg={2}>
          <SVGIcon className={classes.img} component={oreo} viewBox="0 0 113 40" />
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
          <SVGIcon className={classes.img} component={oreo} viewBox="0 0 113 40" />
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
          <SVGIcon className={classes.img} component={oreo} viewBox="0 0 113 40" />
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
          <SVGIcon className={classes.img} component={oreo} viewBox="0 0 113 40" />
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
          <SVGIcon className={classes.img} component={oreo} viewBox="0 0 113 40" />
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
          <SVGIcon className={classes.img} component={oreo} viewBox="0 0 113 40" />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default TrustSection
