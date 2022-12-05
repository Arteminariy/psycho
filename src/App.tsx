import './App.css';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { Card, Typography } from '@mui/material'
import { list_1 } from './db/pricelist'
import { presentation_1 } from './db/presentation'
import AvatarCard from './components/AvatarCard/AvatarCard';

const avatar = require('./img/Natalia.jpg')

const App = () => {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<div className="bgi"></div>
				<Container className='contentBox' maxWidth="xl">
					<AvatarCard
						avatarPic={avatar}
						name='Наталия Николаевна Борисова'
						profession='Психолог'
					/>
					<Card sx={{mt: 8, p: 4}}>
						<Typography>{list_1.price} руб./час</Typography>
					</Card>
					<Card sx={{mt: 8, p: 4}}>
						<Typography>
							{presentation_1.text}
						</Typography>
					</Card>
					<Card>
						
					</Card>
				</Container>
			</ThemeProvider>
		</div>
	);
}

export default App;
