import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";

const drawerWidth = 240;
const navItems = [
	"Home",
	"Services",
	"Work Samples",
	"Testimonials",
	"About Us",
	"Payment",
	"Estimating Fees",
];

export default function TopBar(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box
			onClick={handleDrawerToggle}
			sx={{ textAlign: "center" }}
		>
			<Image
				src={"/images/logo.png"}
				alt="logo"
				width={100}
				height={100}
			/>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item} disablePadding>
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Button
				sx={{
					bgcolor: "#FF0000",
					color: "#ffffff",
					borderRadius: 3,
					width: 160,
					height: 100,
				}}
			>
				Upload your Plan here
			</Button>
		</Box>
	);

	const container =
		window !== undefined
			? () => window().document.body
			: undefined;

	return (
		<Box
			sx={{
				width: "100%",
				bgcolor: "#337AB7",
				color: "#FFFFFF",
			}}
		>
			<Box>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={handleDrawerToggle}
					sx={{
						mr: 2,
						display: { sm: "none" },
						paddingLeft: 3,
					}}
				>
					<MenuIcon />
				</IconButton>
				<Box
					sx={{
						display: { xs: "none", sm: "flex" },
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Image
						src={"/images/logo.png"}
						alt="logo"
						width={100}
						height={100}
					/>
					{navItems.map((item) => (
						<Button key={item} sx={{ color: "#fff" }}>
							{item}
						</Button>
					))}
					<Button
						sx={{
							bgcolor: "#FF0000",
							color: "#ffffff",
							borderRadius: 3,
							width: 160,
							height: 100,
							"&:hover": {
								bgcolor: "transparent",
								color: "#FF0000",
							},
						}}
					>
						Upload your Plan here
					</Button>
				</Box>
			</Box>
			<Box component="nav">
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	);
}
