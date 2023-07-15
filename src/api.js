

function Summarize(){
	alert("hello world");
	async function query(data) {
		const response = await fetch(
			"https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
			{
				headers: { Authorization: "Bearer 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" },
				method: "POST",
				body: JSON.stringify(data),
			}
			);
			const result = await response.json();
			return result;
		}
		const paraToSummarize = document.querySelector(".paraToSummarize").value;
		const summary   = document.querySelector(".summary");
		
	query({ "inputs": paraToSummarize }).then((response) => {
			console.log(JSON.stringify(response));
			summary.innerHTML = JSON.stringify(response); 
		});
 }


	// image 
// function runImg(){
// async function query(data) {
// 	const imgElement = document.getElementById("image");
// 	imgElement.src = "370.gif";
// 	const response = await fetch(
// 		"https://api-inference.huggingface.co/models/CompVis/stable-diffusion-v1-4",
// 		{
// 			headers: { Authorization: "Bearer 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" },
// 			method: "POST",
// 			body: JSON.stringify(data),
// 		}
// 		);
// 		const result = await response.blob();
// 		return result;
// 	}
// const reqImg = document.querySelector(".reqImg").value;


// query({ "inputs": reqImg }).then((response) => {
// 	// Use image
// 	const imageUrl = URL.createObjectURL(response);
// 	const imgElement = document.getElementById("image");
// 	imgElement.src = imageUrl;
	
// });

	

// }