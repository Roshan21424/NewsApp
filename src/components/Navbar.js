import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="bg-[#0a0a0a] p-4">
                    <div class="max-w-7xl mx-auto flex justify-between items-center">
                        <h1 class="text-4xl font-bold bg-gradient-to-r from-[#ff8c00] to-[#ff0080]  bg-clip-text text-transparent">
                            TalenXpro
                        </h1>
                        <div className="space-x-4">
                            <a href="#" class="text-2xl text-white font-bold hover:text-transparent hover:bg-gradient-to-r hover:from-[#ff8c00] hover:to-[#ff0080] hover:bg-clip-text">
                                Home
                            </a>
                            <a href="#" class="text-2xl text-white font-bold hover:text-transparent hover:bg-gradient-to-r hover:from-[#ff8c00] hover:to-[#ff0080] hover:bg-clip-text">
                                About
                            </a>
                            <a href="#" class="text-2xl text-white font-bold hover:text-transparent hover:bg-gradient-to-r hover:from-[#ff8c00] hover:to-[#ff0080] hover:bg-clip-text">
                                Services
                            </a>
                            <a href="#" class="text-2xl text-white font-bold hover:text-transparent hover:bg-gradient-to-r hover:from-[#ff8c00] hover:to-[#ff0080] hover:bg-clip-text">
                                Contact
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}