import React, { Component } from 'react';

export default class HomeScreen extends Component {
    render() {
        return (
            <div className="bg-[#0a0a0a]  h-screen flex items-center justify-center">
                <div className="text-5xl text-white font-bold flex flex-col items-center text-center leading-snug mt-[-10rem]">
                    <p>The future belongs to those</p>
                    <p>
                        <span className="bg-gradient-to-r from-[#08aeea] to-[#ff4d97] font-bold bg-clip-text text-transparent">
                            who believe in
                        </span>
                    </p>
                    <p>
                        
                        <span className="bg-gradient-to-r from-[#ff4d97] to-[#2af598] font-bold bg-clip-text text-transparent">
                        the beauty of their dreams.
                        </span>
                    </p>
                </div>
            </div>
        );
    }
}
