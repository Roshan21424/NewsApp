import React,{Component} from 'react'
import HomeScreen from './HomeScreen'
import Domains from './Domains'
import Footer from './Footer'
import Author from './Author'
import Workflow from './Workflow'

export default class MainContainer extends Component{
    constructor(props){
        super(props);
    
    this.state={
        domains:[
            {
                name:"programming Languages",
                subdomains:["java","python","c","c++","ruby","c#"],
                description:"In the Programming Languages domain, you’ll learn how to code in languages like Python, Java, JavaScript, and C++. You’ll understand syntax, data structures, algorithms, and object-oriented programming. Additionally, you’ll explore language-specific frameworks and libraries, helping you create software, web applications, mobile apps, and system-level programs. This domain equips you with the foundational skills for any software development career."
            },{
                
                name:"web development",
                subdomains:["mern stack","java stack", "django"],
                description:"In Web Development, you’ll learn how to create responsive and dynamic websites and web applications. This includes mastering frontend technologies like HTML, CSS, and JavaScript to design user interfaces, as well as backend tools like Node.js, Python (Django/Flask), and databases (SQL/NoSQL) to manage server-side operations. You will also explore full-stack development and frameworks like React, Angular, and Vue.js to build scalable and robust web solutions."
            },
            {
                name:"artificial intelligence",
                subdomains:["machine learning","neural networks"],
                description:"By exploring Artificial Intelligence, you will learn how to design and build intelligent systems that can mimic human decision-making and problem-solving. You’ll dive into Machine Learning algorithms, Neural Networks, Natural Language Processing (NLP), and Computer Vision. Additionally, you'll understand how to train AI models, analyze data, and implement AI in real-world applications like chatbots, recommendation systems, and autonomous systems."
            },{

                name:"cloud technology",
                subdomains:["aws","google cloud services","azure"],
                description:"In Cloud Computing, you will learn how to use and manage cloud platforms like AWS, Microsoft Azure, and Google Cloud. This includes deploying applications, managing storage and databases, and ensuring scalability and security. You’ll also gain insights into cloud services such as Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS), enabling you to build and manage cloud-native applications."
            }
        ],
    
    };
    }

    render(){
        const { domains } = this.state;
        return(

            <div>
            <HomeScreen></HomeScreen>
            <Domains domains={domains}></Domains>
            <Workflow></Workflow>
            <Author></Author>
            <Footer></Footer>
            </div>
        )
    }
}