import {
	EmailOutlined,
	FacebookOutlined,
	Instagram,
	LinkedIn,
	PhoneInTalkOutlined,
	Room,
	WhatsApp,
} from "@mui/icons-material";
import {
	Box,
	Divider,
	Grid,
	Typography,
} from "@mui/material";
import React from "react";

const Footer = () => {
	return (
		<Grid
			container
			sx={{
				bgcolor: "#262525",
				textAlign: "center",
				color: "#fff",
				mt: 5,
			}}
			spacing={3}
			padding={5}
		>
			<Grid item xs={12} sm={6} md={4}>
				<Divider
					sx={{
						borderWidth: 3,
						borderColor: "#FFF",
						backgroundColor: "#FFF",
						mt: 2,
					}}
				/>
				<Typography
					sx={{
						color: "#fff",
						textAlign: "center",
						fontSize: "48px",
						fontStyle: "normal",
						fontWeight: "800",
						lineHeight: "normal",
						mt: 2,
					}}
				>
					Blue Book Estimator
				</Typography>
				<Divider
					sx={{
						borderWidth: 3,
						borderColor: "#FFF",
						backgroundColor: "#FFF",
						mt: 2,
					}}
				/>
				<Typography
					sx={{
						color: "#fff",
						textAlign: "center",
						fontSize: "20px",
						fontStyle: "normal",
						fontWeight: "400",
						lineHeight: "normal",
						mt: 5,
					}}
				>
					The Blue Book Estimator ®, is a professional cost
					estimation consultancy specializing in providing
					detailed construction cost estimates. Our cost
					consultants provide our clients, both public and
					private institutions with different office
					locations throughout the United States with
					expert, data-driven guidance on their construction
					projects.
				</Typography>
			</Grid>
			<Grid item xs={12} sm={6} md={4}>
				<Divider
					sx={{
						borderWidth: 3,
						borderColor: "#FFF",
						backgroundColor: "#FFF",
						mt: 2,
					}}
				/>
				<Typography
					sx={{
						color: "#fff",
						textAlign: "center",
						fontSize: "48px",
						fontStyle: "normal",
						fontWeight: "800",
						lineHeight: "normal",
						mt: 2,
					}}
				>
					Navigation
				</Typography>
				<Divider
					sx={{
						borderWidth: 3,
						borderColor: "#FFF",
						backgroundColor: "#FFF",
						mt: 2,
					}}
				/>
				<Typography
					sx={{
						color: "#fff",
						textAlign: "center",
						fontSize: "20px",
						fontStyle: "normal",
						fontWeight: "800",
						lineHeight: "normal",
						mt: 5,
					}}
				>
					Services
				</Typography>
				<Typography
					sx={{
						color: "#fff",
						textAlign: "center",
						fontSize: "20px",
						fontStyle: "normal",
						fontWeight: "800",
						lineHeight: "normal",
						mt: 5,
					}}
				>
					Projects
				</Typography>
				<Typography
					sx={{
						color: "#fff",
						textAlign: "center",
						fontSize: "20px",
						fontStyle: "normal",
						fontWeight: "800",
						lineHeight: "normal",
						mt: 5,
					}}
				>
					Contact Us
				</Typography>
				<Typography
					sx={{
						color: "#fff",
						textAlign: "center",
						fontSize: "20px",
						fontStyle: "normal",
						fontWeight: "800",
						lineHeight: "normal",
						mt: 5,
					}}
				>
					About us
				</Typography>
			</Grid>
			<Grid item xs={12} sm={6} md={4}>
				<Divider
					sx={{
						borderWidth: 3,
						borderColor: "#FFF",
						backgroundColor: "#FFF",
						mt: 2,
					}}
				/>
				<Typography
					sx={{
						color: "#fff",
						textAlign: "center",
						fontSize: "48px",
						fontStyle: "normal",
						fontWeight: "800",
						lineHeight: "normal",
						mt: 2,
					}}
				>
					Contact
				</Typography>
				<Divider
					sx={{
						borderWidth: 3,
						borderColor: "#FFF",
						backgroundColor: "#FFF",
						mt: 2,
					}}
				/>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-start",
						mt: 2,
					}}
				>
					<Box
						display={"flex"}
						alignItems={"center"}
						height={100}
					>
						<Room sx={{ fontSize: 40 }} />
					</Box>
					<Box
						display={"flex"}
						alignItems={"center"}
						height={100}
					>
						<Typography
							sx={{
								color: "#fff",
								textAlign: "center",
								fontSize: "15px",
								fontStyle: "normal",
								fontWeight: "600",
								lineHeight: "normal",
							}}
							component={"div"}
						>
							<Typography
								sx={{
									color: "#fff",
									textAlign: "center",
									fontSize: "17px",
									fontStyle: "normal",
									fontWeight: "800",
									lineHeight: "normal",
								}}
								component={"div"}
							>
								Head Office: 102-12,
							</Typography>
							Arlington, VA 22201 United States
						</Typography>
					</Box>
				</Box>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-start",
					}}
				>
					<Box
						display={"flex"}
						alignItems={"center"}
						height={100}
					>
						<PhoneInTalkOutlined sx={{ fontSize: 40 }} />
					</Box>
					<Box
						display={"flex"}
						alignItems={"center"}
						height={100}
						ml={2}
					>
						<Typography
							sx={{
								color: "#fff",
								textAlign: "center",
								fontSize: "18px",
								fontStyle: "normal",
								fontWeight: "500",
								lineHeight: "normal",
							}}
						>
							+1 917 300 1079
						</Typography>
					</Box>
				</Box>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-start",
					}}
				>
					<Box
						display={"flex"}
						alignItems={"center"}
						height={100}
					>
						<EmailOutlined sx={{ fontSize: 40 }} />
					</Box>
					<Box
						display={"flex"}
						alignItems={"center"}
						height={100}
						ml={2}
					>
						<Typography
							sx={{
								color: "#fff",
								textAlign: "center",
								fontSize: "15px",
								fontStyle: "normal",
								fontWeight: "600",
								lineHeight: "normal",
							}}
						>
							bluebookestimator@gmail.com
						</Typography>
					</Box>
				</Box>
				<Box
					sx={{
						display: "flex",
						gap: 5,
						justifyContent: "flex-start",
					}}
				>
					<LinkedIn sx={{ fontSize: { xs: 30, sm: 35 } }} />
					<WhatsApp sx={{ fontSize: { xs: 30, sm: 35 } }} />
					<Instagram
						sx={{ fontSize: { xs: 30, sm: 35 } }}
					/>
					<FacebookOutlined
						sx={{ fontSize: { xs: 30, sm: 35 } }}
					/>
				</Box>
			</Grid>
		</Grid>
	);
};

export default Footer;
