import React, { ElementType } from 'react'
import { Grid, GridProps, makeStyles, Paper, SvgIcon, Typography } from '@material-ui/core'
import cls from 'classnames'
import PButton from 'components/PButton'

type OSCardProps = {
  icon: ElementType
  iconClassName?: string
  viewBox?: string
  title: string
} & GridProps

const useStyles = makeStyles({
  versionsPaper: {
    padding: 32,
    height: '100%',
    display: 'flex',
    flexFlow: 'column'
  },
  iconHolder: {
    width: 64,
    height: 64,
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 21
  },
  icon: {
    width: 32,
    height: 32,
    margin: 'auto'
  }
})

const OSCard = ({
  icon,
  iconClassName,
  title,
  children,
  viewBox = '0 0 32 32',
  ...rest
}: OSCardProps) => {
  const classes = useStyles()
  return (
    <Grid {...rest} item xs={12} md={4}>
      <Paper className={classes.versionsPaper} elevation={0}>
        <div className={cls(classes.iconHolder, iconClassName)}>
          <SvgIcon className={classes.icon} component={icon} viewBox={viewBox} />
        </div>
        <Typography variant="h3" paragraph>
          {title}
        </Typography>
        <Typography variant="body1" paragraph>
          {children}
        </Typography>
        <PButton variant="contained" to="/download" style={{ maxWidth: 177 }}>
          Download OS
        </PButton>
      </Paper>
    </Grid>
  )
}

export default OSCard
