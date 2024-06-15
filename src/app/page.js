import Image from "next/image";

export default function Home() {
	return (
		<>
			<div className="flex">
				<div className="left flex-[1]">height</div>
				<div className="right flex-[1] h-[100vh] flex items-center bg-blue-500">
					<img
						src="/img/man.jpg"
						width="100%"
						className=" justify-center"
					/>
				</div>
			</div>
		</>
	);
}
