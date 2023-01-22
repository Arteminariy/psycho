import './App.css';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { Card, Typography } from '@mui/material'
import { list_1 } from './db/pricelist'
import AvatarCard from './components/AvatarCard/AvatarCard';
import IconsCard from './components/IconsCard/IconsCard'

const avatar = require('./img/Natalia.jpg')

const App = () => {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<div className="bgi"></div>
				<Container className='contentBox' maxWidth="xs">
					<AvatarCard
						avatarPic={avatar}
						name='Наталия Николаевна Борисова'
						profession='Психолог'
					/>
					<Card sx={{ mt: 8, p: 4 }}>
						<Typography variant="subtitle2" component="p">
							Закончила МГУ им. М.В. Ломоносова, факультет психологии.
							<br />
							Опыт работы психологом более 30 лет
						</Typography>
						<Typography sx={{ fontWeight: 900 }} variant="h6" component="h6">{list_1.price} руб./час</Typography>
					</Card>
					<Card sx={{ mt: 8, p: 4 }}>
						<Typography>
							Здравствуйте!
							<br/>
							Запросы на работу:
							<ul>
								<li>отношения с партнёром</li>
								<li>отношения с родителями</li>
								<li>конфликты семейные или на работе</li>
							{/* </ul>
							Оказываю психологическую помощь в трудных ситуациях:
							<ul> */}
								<li>стресс/тревожность в условиях неопределенности</li>
								<li>одиночество</li>
								<li>трудности в принятии решений</li>
								<li>проблемы в общении</li>
								<li>проблемы профессионального самоопределения и другие</li>
							</ul>
							Моя главная задача - поддержать в трудной ситуации, вместе найти выход из тупика и стать уверенным в своих силах.
							<br/><br/>В своей профессиональной практике я использую принципы гуманистического подхода - это вера в человека, в первую очередь, в позитивность его намерений.
							<br/><br/>Не работаю с зависимостями и людьми, имеющими психиатрический диагноз.
						</Typography>
					</Card>
					<IconsCard />
				</Container>
			</ThemeProvider>
		</div>
	);
}

export default App;
