import { makeStyles  } from '@material-ui/core/styles'

 const useStyles = makeStyles((theme)=> ({
  root:{
    display:'flex',
    background:'#fff',
    width:550,
    height:300,
    position:'absolute',
    zIndex:2,
    top:80,
    right:15,
    borderRadius: 10,
    boxShadow: '3px 3px 5px 6px #ccc',
    
  },
  container:{
    padding:30,

  },

}))

export default useStyles