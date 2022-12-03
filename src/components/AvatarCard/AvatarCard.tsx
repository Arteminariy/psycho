import './AvatarCard.module.css';
import { useTheme} from '@mui/material/styles';
import { Card, Box, CardContent, Typography, IconButton, CardMedia } from '@mui/material';

interface AvatarCardProps {
	avatarPic: string,
	name: string,
	profession: string
}

const AvatarCard = ({ avatarPic, name, profession }: AvatarCardProps) => {
	const theme = useTheme();

	return (
		<div className='avatarCard'>
			<Card sx={{ display: 'flex', flexDirection: 'row', mt: 8 }}>
				<CardMedia
					component="img"
					sx={{ width: 200, height: 200 }}
					image={avatarPic}
					alt="Live from space album cover"
				/>
				<Box>
					<CardContent sx={{ flex: '1 0 auto' }}>
						<Typography component="div" variant="h5">
							{name}
						</Typography>
						<Typography variant="subtitle1" color="secondary" component="div">
							{profession}
						</Typography>
					</CardContent>
				</Box>
			</Card>
		</div>
	)
};

export default AvatarCard;
