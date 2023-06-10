// import * as React from 'react';
// import Box from '@mui/joy/Box';
// import IconButton from '@mui/joy/IconButton';
// import Textarea from '@mui/joy/Textarea';
// import Typography from '@mui/joy/Typography';

// export default function TextareaDecorators() {
// const [text, setText] = React.useState('');
// const addEmoji = (emoji:any) => () => setText(`${text}${emoji}`);
// return (
// <Textarea
// 	placeholder="Type in here…"
// 	value={text}
// 	onChange={(event) => setText(event.target.value)}
// 	minRows={2}
// 	maxRows={4}
// 	startDecorator={
// 	<Box sx={{ display: 'flex', gap: 0.5 }}>
// 		<IconButton variant="outlined" color="neutral" onClick={addEmoji('👍')}>
// 		👍
// 		</IconButton>
// 		<IconButton variant="outlined" color="neutral" onClick={addEmoji('🏖')}>
// 		🏖
// 		</IconButton>
// 		<IconButton variant="outlined" color="neutral" onClick={addEmoji('😍')}>
// 		😍
// 		</IconButton>
// 	</Box>
// 	}
// 	endDecorator={
// 	<Typography level="body3" sx={{ ml: 'auto' }}>
// 		{text.length} character(s)
// 	</Typography>
// 	}
// 	sx={{ minWidth: 300 }}
// />
// );
// }


import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import FormatBold from '@mui/icons-material/FormatBold';
import FormatItalic from '@mui/icons-material/FormatItalic';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Check from '@mui/icons-material/Check';

export default function TextareaDecorators() {
const [italic, setItalic] = React.useState(false);
const [fontWeight, setFontWeight] = React.useState('normal');
const [anchorEl, setAnchorEl] = React.useState(null);
const [inputText, setInputText] = React.useState('');
const [incomplateTexts, setIncomplateTexts] = React.useState(['Hava a nice day!']);

const onChangeInputText = (event:any) => setInputText(event.target.value);

const onClickAdd = () => {
	if (inputText === '') 
	return;
	const newTodos = [...incomplateTexts, inputText];
	setIncomplateTexts(newTodos);
	setInputText('');
}

return (
	<FormControl>
	<FormLabel>Your comment</FormLabel>
	<Textarea
		placeholder="Type something here…"
		value={inputText}
		onChange = {onChangeInputText}
		minRows={3}
		endDecorator={
		<Box
			sx={{
			display: 'flex',
			gap: 'var(--Textarea-paddingBlock)',
			pt: 'var(--Textarea-paddingBlock)',
			borderTop: '1px solid',
			borderColor: 'divider',
			flex: 'auto',
			}}
		>
			<IconButton
			variant="plain"
			color="neutral"
			onClick={(event:any) => setAnchorEl(event.currentTarget)}
			>
			<FormatBold />
			<KeyboardArrowDown fontSize="medium" />
			</IconButton>
			<Menu
			anchorEl={anchorEl}
			open={Boolean(anchorEl)}
			onClose={() => setAnchorEl(null)}
			size="sm"
			placement="bottom-start"
			sx={{ '--ListItemDecorator-size': '24px' }}
			>
			{['200', 'normal', 'bold'].map((weight) => (
				<MenuItem
				key={weight}
				selected={fontWeight === weight}
				onClick={() => {
					setFontWeight(weight);
					setAnchorEl(null);
				}}
				sx={{ fontWeight: weight }}
				>
				<ListItemDecorator>
					{fontWeight === weight && <Check fontSize='small' />}
				</ListItemDecorator>
				{weight === '200' ? 'lighter' : weight}
				</MenuItem>
			))}
			</Menu>
			<IconButton
			variant={italic ? 'soft' : 'plain'}
			color={italic ? 'primary' : 'neutral'}
			aria-pressed={italic}
			onClick={() => setItalic((bool) => !bool)}
			>
			<FormatItalic />
			</IconButton>
			<Button 
			onClick={onClickAdd}
			sx={{ ml: 'auto' }} type='submit' className='btn submit-btn'>Send</Button>
		</Box>
		}
		sx={{
		minWidth: 300,
		fontWeight,
		fontStyle: italic ? 'italic' : 'initial',
		}}
	/>
	<div>
	{incomplateTexts.map((todo, index) => {
		return(
			<ul key = {todo} className="list-row">
				<li>{todo}</li>
			</ul>
		)
	})}
	</div>
	</FormControl>
)}
