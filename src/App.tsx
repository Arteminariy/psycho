import './App.css';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { Card, Stack, Typography } from '@mui/material';
import { list_1 } from './db/pricelist';
import AvatarCard from './components/AvatarCard/AvatarCard';
import IconsCard from './components/IconsCard/IconsCard';
import { Description } from './components/Description/Description';
import { Reviews } from './components/Reviews/Reviews';

const avatar = require('./img/Natalia.jpg');

const App = () => {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<div className="bgi" />
				<div className="contentBox">
					<div className="mainInfo">
						<AvatarCard
							avatarPic={avatar}
							name="Наталия Николаевна Борисова"
							profession="Психолог"
						/>
						<Card sx={{ p: 4 }}>
							<Typography variant="subtitle2" component="p">
								Закончила МГУ им. М.В. Ломоносова, факультет
								психологии.
								<br />
								Опыт работы психологом более 35 лет
							</Typography>
							<Typography
								sx={{ fontWeight: 900 }}
								variant="h6"
								component="h6"
							>
								{list_1.price} руб./час
							</Typography>
						</Card>
					</div>
					<Description />
				</div>
				<Reviews />
				<IconsCard />
			</ThemeProvider>
		</div>
	);
};

export default App;
