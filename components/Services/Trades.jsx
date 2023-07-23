import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import ServiceCard from "../Card/ServiceCard";
const Services = () => {
	return (
		<Container sx={{ mt: 10 }}>
			<Grid container sx={{ mb: 2 }}>
				<Grid item xs={12}>
					<Typography
						variant="h4"
						sx={{
							color: "#337AB7",
							fontSize: "54px",
							fontStyle: "normal",
							fontWeight: "600",
							lineHeight: "normal",
						}}
					>
						Our Trades
					</Typography>
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={4}>
					<ServiceCard
						image={"/images/trade/trade1.png"}
						title={"General Requirement"}
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<ServiceCard
						image={"/images/trade/trade2.png"}
						title={"Site Constructionn"}
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<ServiceCard
						image={"/images/trade/trade3.png"}
						title={"Concrete"}
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<ServiceCard
						image={"/images/trade/trade4.png"}
						title={"Masonry"}
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<ServiceCard
						image={"/images/trade/trade5.png"}
						title={"Metals"}
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<ServiceCard
						image={"/images/trade/trade6.png"}
						title={"Wood & Plastic"}
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<ServiceCard
						image={"/images/trade/trade7.png"}
						title={"Thermal and Moisture Protection"}
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<ServiceCard
						image={"/images/trade/trade8.png"}
						title={"Doors and Windows"}
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<ServiceCard
						image={"/images/trade/trade9.png"}
						title={"Finishes"}
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<ServiceCard
						image={"/images/trade/trade10.png"}
						title={"Specialties"}
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<ServiceCard
						image={"/images/trade/trade11.png"}
						title={"Equipment"}
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<ServiceCard
						image={"/images/trade/trade12.png"}
						title={"Furnishings"}
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<ServiceCard
						image={"/images/trade/trade13.png"}
						title={"Special Construction"}
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<ServiceCard
						image={"/images/trade/trade14.png"}
						title={"Conveying Systems"}
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<ServiceCard
						image={"/images/trade/trade15.png"}
						title={"Mechanical"}
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<ServiceCard
						image={"/images/trade/trade16.png"}
						title={"Electrical"}
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<ServiceCard
						image={"/images/trade/trade17.png"}
						title={"Plumbing"}
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<ServiceCard
						image={"/images/trade/trade18.png"}
						title={"HVAC"}
					/>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Services;
