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
import {
	EmailOutlined,
	Facebook,
	FacebookOutlined,
	Instagram,
	LinkedIn,
	PhoneInTalkOutlined,
	WhatsApp,
} from "@mui/icons-material";
import TopBar from "./TopBar";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

export default function SocialBar(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box
			onClick={handleDrawerToggle}
			sx={{ textAlign: "center", color: "#337AB7" }}
		>
			<Typography variant="h6" sx={{ my: 2 }}>
				Services
			</Typography>
			<Divider />
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					gap: 1,
					marginTop: 2,
				}}
			>
				<PhoneInTalkOutlined />
				<Typography sx={{ fontSize: 12 }}>
					+1 917 300 1079
				</Typography>
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					gap: 1,
					marginTop: 2,
					marginBottom: 2,
				}}
			>
				<EmailOutlined />
				<Typography sx={{ fontSize: 12 }}>
					bluebookestimators@gmail.com
				</Typography>
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					gap: 1,
				}}
			>
				<WhatsApp />
				<LinkedIn />
				<Instagram />
				<FacebookOutlined />
			</Box>
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
			}}
		>
			<Box
				sx={{
					bgcolor: "transparent",
					color: "#337AB7",
					boxShadow: "none",
					padding: 2,
				}}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-end",
						alignItems: "center",
						flexDirection: { xs: "column", sm: "row" },
					}}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: { xs: "column", sm: "row" },
							gap: 2,
							alignSelf: { xs: "flex-start" },
						}}
					>
						<Box sx={{ display: "flex", gap: 1 }}>
							<PhoneInTalkOutlined />
							<Typography>+1 917 300 1079</Typography>
						</Box>
						<Box sx={{ display: "flex", gap: 1 }}>
							<EmailOutlined />
							<Typography>
								bluebookestimators@gmail.com
							</Typography>
						</Box>
					</Box>
					<Box
						sx={{
							display: "flex",
							gap: 1,
							marginLeft: { xs: 0, sm: 3 },
							marginTop: { xs: 2, sm: 0 },
							alignSelf: { xs: "flex-start" },
						}}
					>
						<WhatsApp />
						<LinkedIn />
						<Instagram />
						<FacebookOutlined />
					</Box>
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
