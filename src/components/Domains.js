import react,{Component} from 'react'
import DomainsComponent from './DomainComponent';
export default class Domains extends Component{
 render(){
    return(
    <div class="flex flex-col items-center justify-center bg-[#0a0a0a]">
    <DomainsComponent></DomainsComponent>
    <DomainsComponent></DomainsComponent>
    <DomainsComponent></DomainsComponent>
    <DomainsComponent></DomainsComponent>
    <DomainsComponent></DomainsComponent>
    </div>
    );

}
}