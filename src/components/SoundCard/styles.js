const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '60%'
    },
    content: {
        flexGrow: 1,
        width: '60%',
        alignContent: 'center'

    },
    cover: {
        width: '40%',
        heigth: 120,
        borderRadius: '0 0 35 35'
    },
    card: {
        display: 'flex',
        width: 350,
        height: 120,
        // padding: 24,
        margin: 24,
        borderRadius: 35,
        fontSize: 24,
        cursor: 'pointer',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        '&:hover':{
            background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)'
        },
        '&:active':{
            backgroundColor: '#999',
            boxShadow: '0 5px #666',
            transform: 'translateY(4px)'
        }
    },
    header: {
        display: 'flex',
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 24,
        fontWeight: 600,
    },
})

export default styles