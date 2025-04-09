import React from 'react';

function TimeLine() {
    return (
        <div className="py-4 md:py-8 bg-transparent text-white">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Heading */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-3 md:mb-4 leading-tight pb-2">
                        Hackathon Journey: From Vision to Victory!
                    </h2>
                    <div className="h-1 w-16 md:w-32 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-2 rounded-full"></div>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 md:w-1 bg-gray-700 h-full"></div>

                    <div className="space-y-6 md:space-y-8">
                        {/** Step 1: Registration */}
                        <div className="flex items-center w-full">
                            <div className="w-1/2 pr-2 md:pr-8">
                                <div className="bg-gray-800 rounded-xl p-3 md:p-6 shadow-xl">
                                    <h3 className="text-lg md:text-2xl font-bold text-yellow-400">Registration</h3>
                                    <p className="text-xs md:text-sm text-gray-300 mt-1 md:mt-2">Participants register for the hackathon through Unstop, with a deadline of April 13, 2025.</p>
                                </div>
                            </div>
                            <div className="absolute left-1/2 transform -translate-x-1/2">
                                <div className="w-5 h-5 md:w-8 md:h-8 bg-yellow-500 rounded-full border-2 md:border-4 border-gray-800"></div>
                            </div>
                            <div className="w-1/2"></div>
                        </div>

                        {/** Step 2: Round 1 - Ideation */}
                        <div className="flex items-center w-full">
                            <div className="w-1/2"></div>
                            <div className="absolute left-1/2 transform -translate-x-1/2">
                                <div className="w-5 h-5 md:w-8 md:h-8 bg-blue-500 rounded-full border-2 md:border-4 border-gray-800"></div>
                            </div>
                            <div className="w-1/2 pl-2 md:pl-8">
                                <div className="bg-gray-800 rounded-xl p-3 md:p-6 shadow-xl">
                                    <h3 className="text-lg md:text-2xl font-bold text-blue-400">Round 1 - Ideation</h3>
                                    <p className="text-xs md:text-sm text-gray-300 mt-1 md:mt-2">Teams present their ideas, and the best ones are selected.</p>
                                </div>
                            </div>
                        </div>

                        {/** Step 3: Evaluation */}
                        <div className="flex items-center w-full">
                            <div className="w-1/2 pr-2 md:pr-8">
                                <div className="bg-gray-800 rounded-xl p-3 md:p-6 shadow-xl">
                                    <h3 className="text-lg md:text-2xl font-bold text-green-400">Evaluation</h3>
                                    <p className="text-xs md:text-sm text-gray-300 mt-1 md:mt-2">Ideas are evaluated, and the top teams advance to the hackathon round, with evaluations beginning on April 14, 2025.</p>
                                </div>
                            </div>
                            <div className="absolute left-1/2 transform -translate-x-1/2">
                                <div className="w-5 h-5 md:w-8 md:h-8 bg-green-500 rounded-full border-2 md:border-4 border-gray-800"></div>
                            </div>
                            <div className="w-1/2"></div>
                        </div>

                        {/** Step 4: Round 2 - 24hr Hackathon */}
                        <div className="flex items-center w-full">
                            <div className="w-1/2"></div>
                            <div className="absolute left-1/2 transform -translate-x-1/2">
                                <div className="w-5 h-5 md:w-8 md:h-8 bg-purple-500 rounded-full border-2 md:border-4 border-gray-800"></div>
                            </div>
                            <div className="w-1/2 pl-2 md:pl-8">
                                <div className="bg-gray-800 rounded-xl p-3 md:p-6 shadow-xl">
                                    <h3 className="text-lg md:text-2xl font-bold text-purple-400">Round 2 - 24hr Hackathon</h3>
                                    <p className="text-xs md:text-sm text-gray-300 mt-1 md:mt-2">Selected teams compete in a 24-hour hackathon On April 25th and 26th, 2025.</p>
                                </div>
                            </div>
                        </div>

                        {/** Step 5: Prize Distribution */}
                        <div className="flex items-center w-full">
                            <div className="w-1/2 pr-2 md:pr-8">
                                <div className="bg-gray-800 rounded-xl p-3 md:p-6 shadow-xl">
                                    <h3 className="text-lg md:text-2xl font-bold text-red-400">Prize Distribution</h3>
                                    <p className="text-xs md:text-sm text-gray-300 mt-1 md:mt-2">Winners will receive prizes from a prize pool of ₹75,000 and recognition on April 26th, 2025.</p>
                                </div>
                            </div>
                            <div className="absolute left-1/2 transform -translate-x-1/2">
                                <div className="w-5 h-5 md:w-8 md:h-8 bg-red-500 rounded-full border-2 md:border-4 border-gray-800"></div>
                            </div>
                            <div className="w-1/2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimeLine;