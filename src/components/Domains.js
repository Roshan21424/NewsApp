import React from 'react'
import DomainsComponent from './DomainComponent';
const Domains=({domains})=>{

    return(
        <div className="flex flex-col items-center justify-center bg-[#0a0a0a]  ">
    <h2 className="text-3xl font-bold text-center text-white mb-6">Explore the Domains That Interest You</h2>
    <p className="text-gray-300 text-justify max-w-4xl">Explore the domains you are interested in from the list below and discover exciting opportunities that align with your passions and career goals. Whether you're eager to dive into cutting-edge technologies, business, design, or other fields, we provide a wide range of domains to help you grow professionally and pursue your aspirations. Browse through the options and find the perfect match for your interests!</p>
    
    {
        domains.map((domain,index)=>(
            <DomainsComponent key={index} name={domain.name} subdomains={domain.subdomains} description={domain.description}></DomainsComponent>
        ))}
    </div>
    );
};
export default Domains;
