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
						Services
					</Typography>
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={4}>
					<ServiceCard
						image={"/images/service1.png"}
						title={"Cost Estimation"}
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<ServiceCard
						image={"/images/service2.png"}
						title={"Quantities & Materials Takeoffs"}
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					<ServiceCard
						image={"/images/service3.png"}
						title={"Construction Work Schedules"}
					/>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Services;
