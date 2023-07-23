import {
	Box,
	Button,
	Container,
	Grid,
	Typography,
} from "@mui/material";
import SocialBar from "../components/AppBar/SocialBar";
import TopBar from "../components/AppBar/TopBar";
import Services from "../components/Services/Services";
import Trades from "../components/Services/Trades";
import Footer from "../components/Footer/Footer";

export default function Home() {
	return (
		<Box>
			<SocialBar />
			<TopBar />
			<Services />
			<Trades />
			<Grid
				container
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					mb: 5,
				}}
			>
				<Grid
					item
					xs={8}
					sx={{
						textAlign: "center",
					}}
				>
					<Typography
						sx={{
							color: "#F00",
							textAlign: "center",
							fontSize: { xs: "15px", sm: "32px" },
							fontStyle: "normal",
							fontWeight: "800",
							lineHeight: "normal",
							mt: 10,
						}}
					>
						If You Have Any Further Queries, You Can Call Us
						At +1347 480-1903 Or Email At
						Info@blueBookestimator.Com
					</Typography>
					<Typography
						sx={{
							color: "#F00",
							textAlign: "center",
							fontSize: { xs: "15px", sm: "32px" },
							fontStyle: "normal",
							fontWeight: "800",
							lineHeight: "normal",
							mt: 3,
						}}
					>
						Or You Can Upload Your Plans In The Link Below
						To Get A Quote In The Next 5 Minutes.
					</Typography>
					<Button
						sx={{
							color: "#FFF",
							backgroundColor: "#F00",
							textAlign: "center",
							fontSize: { xs: "18px", sm: "32px" },
							fontStyle: "normal",
							fontWeight: "800",
							lineHeight: "normal",
							mt: 3,
							width: { xs: 200, sm: 350 },
							borderRadius: 2,
							"&:hover": {
								bgcolor: "#337AB7",
								color: "#FFF",
							},
						}}
					>
						Upload Your Plan
					</Button>
				</Grid>
			</Grid>
			<Footer />
		</Box>
	);
}
