import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="bg-[#0a0a0a] p-4">
                    <div class="max-w-7xl mx-auto flex justify-between items-center">
                        <h1 class="text-4xl font-bold bg-gradient-to-r from-[#ff8c00] to-[#ff0080]  bg-clip-text text-transparent">
                            Talenxpro
                        </h1>
                        <div className="space-x-4">
                            <a href="#" class="text-2xl text-white font-bold hover:text-transparent hover:bg-gradient-to-r hover:from-pink-300 hover:to-purple-600 hover:bg-clip-text">
                                Home
                            </a>
                            <a href="#" class="text-2xl text-white font-bold hover:text-transparent hover:bg-gradient-to-r hover:from-pink-300 hover:to-purple-600 hover:bg-clip-text">
                                Domains
                            </a>
                            <a href="#" class="text-2xl text-white font-bold hover:text-transparent hover:bg-gradient-to-r hover:from-pink-300 hover:to-purple-600 hover:bg-clip-text">
                                Workflow
                            </a>
                            <a href="#" class="text-2xl text-white font-bold hover:text-transparent hover:bg-gradient-to-r hover:from-pink-300 hover:to-purple-600 hover:bg-clip-text">
                                Founder
                            </a>
                            <a href="#" class="text-2xl text-white font-bold hover:text-transparent hover:bg-gradient-to-r hover:from-pink-300 hover:to-purple-600 hover:bg-clip-text">
                                About
                            </a>
                            <a href="#" class="text-2xl text-white font-bold hover:text-transparent hover:bg-gradient-to-r hover:from-pink-300 hover:to-purple-600 hover:bg-clip-text">
                                Profile
                            </a>
                            <button href="#" class="text-1xl text-white px-5 py-3 border-white border-2 rounded-full bg-gradient-to-r from-indigo-400 via-purple-600 to-fuchsia-600 transition-all active:shadow-none  active:border-purple-400 ">
                                Apply
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}