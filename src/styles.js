import { makeStyles } from "@material-ui/core";
import { display } from "@mui/system";

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8,0,6)
    },
    icon: {
        marginRight:'20px',

    },
    button: {
        marginTop:'20px',

    },
    cardGrid: {
        padding: '20px 0'
    },
    
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: "column"
    },

    cardMedia: {
        height: '100%',
        //width: '50px'
        //paddingTop: "56.25%", //16:9
        //marginTop: '30'
    },
    
    cardContent: {
        flexGrow: 1,

    },

    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: '50px 0'
    }



}));

export default useStyles;