import React from 'react'
import { Grid, GridProps, makeStyles, Paper, Typography } from '@material-ui/core'
import PButton from 'components/PButton'
import htbLogo from './assets/htbLogo.svg'
import htbScreenshot from './assets/htbScreenshot.png'

const useStyles = makeStyles({
  root: {
    paddingTop: 71,
    width: '100%'
  },
  htbIcon: {
    marginRight: 'auto',
    marginBottom: 31
  },
  desc: {
    opacity: 0.5
  },
  bigIcon: {
    width: 84,
    height: 84,
    padding: 16,
    background: '#FFF',
    borderRadius: 6
  },
  content: {
    paddingLeft: 50,
    paddingBottom: 78
  },
  screenshotGrid: {
    marginLeft: 'auto'
  }
})

const HTBSection = (rest: GridProps) => {
  const classes = useStyles()
  return (
    <Grid {...rest} container item xs={12} md={9}>
      <Paper className={classes.root}>
        <Grid container item xs justifyContent="space-between">
          <Grid className={classes.content} container item xs={8} md={4} direction="column">
            <img className={classes.htbIcon} src={htbLogo} alt="HackTheBox Logo" />
            <Typography variant="h2" paragraph>
              Parrot<span style={{ fontWeight: 300 }}>OS</span> now web-based through Hack The Box
            </Typography>
            <Typography className={classes.desc} variant="body1" paragraph>
              Pwnbox is a completely browser accessible virtual hacking distro including everything
              a hacker’s operating system should have.
            </Typography>
            <PButton
              variant="contained"
              to="https://hackthebox.eu/"
              style={{ width: 165, background: '#fff' }}
            >
              Explore
            </PButton>
          </Grid>
          <Grid
            className={classes.screenshotGrid}
            container
            item
            xs={10}
            md
            direction="column"
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <img src={htbScreenshot} alt="Screenshot of PWNBox" />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default HTBSection
