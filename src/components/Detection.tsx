import React from "react";


type DetectionResult = {
  name: string;
  description: string;
  image: string;
  solution: string;
};

type DetectionPageProps = {
  Results: DetectionResult[];
  pagename?: string;
};

const DetectionPage: React.FC<DetectionPageProps> = ({ Results = [] ,pagename = ""}) => {
    return (
        <div className="flex flex-col items-center py-8 bg-white">
                <h2 className="text-black text-2xl font-bold mb-6">
                    {pagename}
                </h2>
                <div className="w-full max-w-2xl space-y-6">
                    {Results.map((item) => (
                        <div
                        // bg-[#1a2320]
                            className="flex flex-col md:flex-row items-center gap-4 bg-gray-200 rounded-lg p-4"
                            key={item.name}
                        >
                            <div className="flex-1">
                                <p className="text-black text-lg font-bold">{item.name}</p>
                                <p className="text-black text-sm mb-3">{/* text-[#9eb7a8] */}
                                    {item.description}
                                </p>
                                <p className="text-black text-sm font-bold">Solution:</p>
                                {/* <button className="bg-[#29382f] text-black text-sm rounded px-4 py-2 disabled:opacity-50">
                                Solutions:
                            </button> */}
                                <p className="text-black text-sm mb-3">{/* text-[#9eb7a8] */}
                                    {item.solution}
                                </p>
                            </div>
                            <div
                                className="w-full md:w-60 aspect-video bg-center bg-cover rounded"
                                style={{ backgroundImage: `url("${item.image}")` }}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
    );
}
export default DetectionPage;



//  <div className="flex flex-col items-center py-8 bg-[#111714]">
// 				<h2 className="text-white text-2xl font-bold mb-6">
// 					Maturity Detection Results
// 				</h2>
// 				<div className="w-full max-w-2xl space-y-6">
// 					{maturityResults.map((pest) => (
// 						<div
// 							className="flex flex-col md:flex-row items-center gap-4 bg-[#1a2320] rounded-lg p-4"
// 							key={pest.name}
// 						>
// 							<div className="flex-1">
// 								<p className="text-white text-lg font-bold">{pest.name}</p>
// 								<p className="text-[#9eb7a8] text-sm mb-3">
// 									{pest.description}
// 								</p>
// 								<p className="text-white text-sm">Solution:</p>
// 								{/* <button className="bg-[#29382f] text-white text-sm rounded px-4 py-2 disabled:opacity-50">
// 								Solutions:
// 							</button> */}
// 								<p className="text-[#9eb7a8] text-sm mb-3">
// 									{pest.solution}
// 								</p>
// 							</div>
// 							<div
// 								className="w-full md:w-60 aspect-video bg-center bg-cover rounded"
// 								style={{ backgroundImage: `url("${pest.image}")` }}
// 							></div>
// 						</div>
// 					))}
// 				</div>
// 			</div>