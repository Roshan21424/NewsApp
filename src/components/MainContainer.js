import react,{Component} from 'react'
import HomeScreen from './HomeScreen'
import Domains from './Domains'
import Footer from './Footer'
import Author from './Author'

export default class MainContainer extends Component{
    render(){
        return(

            <div>
            <HomeScreen></HomeScreen>
            <Domains></Domains>
            <Author></Author>
            <Footer></Footer>
            </div>
        )
    }
}