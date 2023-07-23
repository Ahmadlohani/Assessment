import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
	Button,
	CardActionArea,
	CardActions,
	Box,
} from "@mui/material";
import Image from "next/image";

export default function ServiceCard({ image, title }) {
	return (
		<Card sx={{ maxWidth: { xs: "100%", sm: 345 } }}>
			<CardActionArea
				sx={{ position: "relative", textAlign: "center" }}
			>
				<CardMedia
					component="img"
					height="260"
					image={image}
					alt="green iguana"
				/>
				<CardContent
					sx={{
						height: 244,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						bgcolor: "#337AB7",
					}}
				>
					<Typography
						gutterBottom
						variant="h5"
						component="div"
						sx={{
							color: "#9EE3F9",
							textAlign: "center",
							fontSize: "30px",
							fontStyle: "normal",
							fontWeight: 600,
							lineHeight: "normal",
						}}
					>
						{title}
					</Typography>
					<Typography
						color="#9EE3F9"
						sx={{
							color: "#9EE3F9",
							textAlign: "center",
							fontSize: "26px",
							fontStyle: "normal",
							fontWeight: 600,
							lineHeight: "normal",
							textDecoration: "underline",
						}}
					>
						Read More
					</Typography>
					<Box
						sx={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
						}}
					>
						<Image
							src={"/images/tick.png"}
							height={100}
							width={100}
							alt="tick"
							style={{
								backgroundColor: "white",
								borderRadius: "50%",
							}}
						/>
					</Box>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
