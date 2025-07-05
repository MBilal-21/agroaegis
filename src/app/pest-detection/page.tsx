import React from "react";

const pestResults = [
	{
		name: "Aphids",
		description:
			"Small, pear-shaped insects that feed on plant sap, causing stunted growth and leaf curling.",
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuDre-agWP29NADAwJ2V-MiDO4tpHq7WSNFwo2yfieKGG0J-14UaMSyHVj9vf79-lZZxHVgWFGwyiJCHWyp2sjrrCqG7sER3N7zCi092tE4nbzG-5JScwUldJsS6Q51D6ybhUpByRsNUUFn9683L_Ghmq59E9aT2sdsJtvymhX6TkVYGHIbU8vHpGRoUi256vKTuwvV0gv3j3-2jLVT_sW-WryBIYfeS-QtOK-e55HyyCeArzPNFO_yvq8MsuizwUIA9GeNzwqGwzVE",
		solution:
			"Use insecticidal soap or neem oil to control aphid populations. Introduce natural predators like ladybugs to help manage infestations.",
	},
	{
		name: "Whiteflies",
		description:
			"Tiny, winged insects that suck plant sap and transmit viruses, leading to yellowing and reduced yields.",
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuBRdjwgcJsPAFypeATlgBnwpKNyl2tep6dAucBU8Qk_csIbc-kDrJ5yAekYuWettxNiQT8J1guwbeYPS760X-2Aw56HMa0XV0wqXNtmN7o3hEEYBLcY41aAjmgpQFZ7rlGixpnFzjoIUsj5xSOt5L6z8TEw1fudHFM5gpY9bZr2kqpouUEbtiqQ0cp25A3KNfvkSWNfOGQu6E36mTTBHOkJuxvxJ0ZJHua_ebFs1BSaw39VzLAa1unmrRv1el4ZMD283EZ3q4fzhG4",
		solution:
			"Apply insecticidal soap or neem oil to control whitefly populations. Use yellow sticky traps to monitor and reduce their numbers.",
	},
	{
		name: "Spider Mites",
		description:
			"Minute pests that create webs and feed on plant cells, causing stippling and bronzing of leaves.",
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuAmm3faZwsZK9yHFcrSinFJhH-HtKraOJB03NzM_mah5dRxJOD8Yfi-7Tn7t2RPg_C0SaKGxFVpPP4jDSWVo0wN9iCdgmnqVgDnx80nGKaf9qJNWoE6W5ZwxSn1jDo2ocTT6TUij98_Wrn6G0V_pWjtPa7cyHHpwfSWDV6fcfx9D4_q8UKLhBChXRPY3kFeWMV3a1-DSAb__Jl6lLAoOj0rYBNKHZQrER39XlD1717bjCBDkzsqgtsasGGAh8lOBl6JcrD7yhVdkt0",
		solution:
			"Use miticides or insecticidal soap to control spider mite populations. Increase humidity around plants to make conditions less favorable for mites.",
	},
];

const PestDetectionPage = () => {
    return (
        <div className="flex flex-col items-center py-8 bg-[#111714]">
				<h2 className="text-white text-2xl font-bold mb-6">
					Pest Detection Results
				</h2>
				<div className="w-full max-w-2xl space-y-6">
					{pestResults.map((pest) => (
						<div
							className="flex flex-col md:flex-row items-center gap-4 bg-[#1a2320] rounded-lg p-4"
							key={pest.name}
						>
							<div className="flex-1">
								<p className="text-white text-lg font-bold">{pest.name}</p>
								<p className="text-[#9eb7a8] text-sm mb-3">
									{pest.description}
								</p>
								<p className="text-white text-sm">Solution:</p>
								{/* <button className="bg-[#29382f] text-white text-sm rounded px-4 py-2 disabled:opacity-50">
								Solutions:
							</button> */}
								<p className="text-[#9eb7a8] text-sm mb-3">
									{pest.solution}
								</p>
							</div>
							<div
								className="w-full md:w-60 aspect-video bg-center bg-cover rounded"
								style={{ backgroundImage: `url("${pest.image}")` }}
							></div>
						</div>
					))}
				</div>
			</div>
    );
}
export default PestDetectionPage;