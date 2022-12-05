import './AvatarCard.module.css';
import { useTheme} from '@mui/material/styles';
import { Card, Box, CardContent, Typography, CardMedia } from '@mui/material';

interface AvatarCardProps {
	avatarPic: string,
	name: string,
	profession: string
}

const AvatarCard = ({ avatarPic, name, profession }: AvatarCardProps) => {
	return (
		<div className='avatarCard'>
			<Card sx={{ display: 'flex', flexDirection: 'column'}}>
				<CardMedia
					component="img"
					sx={{ width: '100%'}}
					image={avatarPic}
					alt="Live from space album cover"
				/>
				<Box>
					<CardContent sx={{ flex: '1 0 auto' }}>
						<Typography sx={{fontWeight: 900}} component="div" variant="h5">
							{name}
						</Typography>
						<Typography sx={{fontWeight: 900}} variant="h6" color="secondary" component="div">
							{profession}
						</Typography>
					</CardContent>
				</Box>
			</Card>
		</div>
	)
};

export default AvatarCard;
