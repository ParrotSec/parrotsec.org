import { Grid, makeStyles, Typography } from '@material-ui/core'
import PostsSection from 'containers/BlogContainers/PostsSection'
import { getAllPosts } from '../lib/api'
import { PostType } from '../types'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100
  },
  headingTitle: {
    marginTop: 0,
    marginBottom: 10,
    fontSize: theme.spacing(9),
    [theme.breakpoints.down('md')]: {
      fontSize: theme.spacing(8)
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(7)
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.spacing(5)
    }
  },
  headingSubTitle: {
    marginTop: 27,
    marginBottom: theme.spacing(6.5)
  }
}))

type BlogProps = { allPosts: PostType[] }

const Blog = ({ allPosts }: BlogProps) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root} justifyContent="center">
      <Grid
        item
        container
        xs={10}
        justifyContent="center"
        alignItems="center"
        direction="column"
        wrap="nowrap"
      >
        <Typography className={classes.headingTitle} variant="h1" align="center">
          Parrot OS Blog
        </Typography>
        <Typography className={classes.headingSubTitle} variant="subtitle2" align="center">
          Latest Posts
        </Typography>
      </Grid>
      <PostsSection allPosts={allPosts} />
    </Grid>
  )
}

export default Blog

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'author',
    'image',
    'description',
    'content',
    'slug'
  ])

  return {
    props: { allPosts }
  }
}
