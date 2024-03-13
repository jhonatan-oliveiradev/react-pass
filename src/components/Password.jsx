import { useState } from "react";
import PasswordStrengthBar from "react-password-strength-bar";

const Password = () => {
	const [password, setPassword] = useState("");

	return (
		<div className="flex flex-col items-center justify-center w-full mx-auto max-w-[450px]">
			<div className="flex flex-col w-full items-start justify-center px-4">
				<label htmlFor="password" className="my-3">
					Digite uma senha:
				</label>
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Insira uma senha forte"
					className="border h-12 text-zinc-100 w-full mb-3 px-4 bg-zinc-800 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
				/>
				<PasswordStrengthBar
					password={password}
					className="w-full"
					shortScoreWord={"Muito fraca"}
					scoreWords={[
						"Muito fraca",
						"Fraca",
						"Aceitável",
						"Forte",
						"Muito forte"
					]}
					barColors={["#1f2937", "#991b1b", "#9a3412", "#065f46", "#075985"]}
				/>
			</div>
		</div>
	);
};

export default Password;
