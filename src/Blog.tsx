import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { pink } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import photo from './images/tamaoki_20th.png';
import TextareaDecorators from './TextareaDecorators'
interface ExpandMoreProps extends IconButtonProps {
expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
const { expand, ...other } = props;
return <IconButton {...other} />;
})(({ theme, expand }) => ({
transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
marginLeft: 'auto',
transition: theme.transitions.create('transform', {
duration: theme.transitions.duration.shortest,
}),
}));

export const Blog = () => {
const [expanded, setExpanded] = React.useState(false);

const handleExpandClick = () => {
setExpanded(!expanded);
};

return (
<Card sx={{ maxWidth: 400, 'margin-left': '36%'}}>
	<CardHeader
	avatar={
		<Avatar sx={{ bgcolor: pink[400] }} aria-label="recipe">
		X
		</Avatar>
	}
	action={
		<IconButton aria-label="settings">
		<MoreVertIcon />
		</IconButton>
	}
	title="Xiexie"
	subheader="June 09,2023"
	/>
	<CardMedia sx={{'margin-left': '14%'}}>
		<img src={photo}
		height="194"
		alt="Paella dish"
		/>
	</CardMedia>
	<CardContent>
	<Typography variant="body2" color="text.secondary">
		{TextareaDecorators()}
	</Typography>
	</CardContent>
	<CardActions disableSpacing>
	<IconButton aria-label="add to favorites">
		<FavoriteIcon />
	</IconButton>
	<IconButton aria-label="share">
		<ShareIcon />
	</IconButton>
	<ExpandMore
		expand={expanded}
		onClick={handleExpandClick}
		aria-expanded={expanded}
		aria-label="show more"
	>
		<ExpandMoreIcon />
	</ExpandMore>
	</CardActions>
	<Collapse in={expanded} timeout="auto" unmountOnExit>
	<CardContent>
		<Typography paragraph>Main Text:</Typography>
		<Typography paragraph>
		There was a coming-of-age ceremony. I am very happy 
		to be able to wear the hakama that my mother wore back then. 
		I really like the vivid aqua color!
		</Typography>
		<Typography paragraph>
		I started building the app today. For the first 
		time in a long time, it feels good to be absorbed 
		in it and forget the time.Making things may be the 
		best stress relief method for me.
		</Typography>
		<Typography>
		I'm looking forward to seeing the finished version 
		of this app.
		</Typography>
	</CardContent>
	</Collapse>
</Card>
);
}