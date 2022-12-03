import './App.css';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import AvatarCard from './components/AvatarCard/AvatarCard';

const avatar = require('./img/Natalia.jpg')

const App = () => {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Container maxWidth="xl">
					<AvatarCard
						avatarPic={avatar}
						name='Наталия Николаевна Борисова'
						profession='Психолог'
					/>
				</Container>
			</ThemeProvider>
		</div>
	);
}

export default App;
