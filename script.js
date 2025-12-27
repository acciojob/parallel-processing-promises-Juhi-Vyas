const output = document.getElementById("output");
const error = document.getElementById("error");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

btn.addEventListener("click", downloadImages)

let p1 = fetch(image[0].url)
let p2 = fetch(image[1].url)
let p3 = fetch(image[2].url)

function downloadImages() {
	//blob -> converts a response into binary data
	
		Promise.all([p1,p2,p3])
		.then(res => res.blob())
		.then(blob => {
			let img = document.crateElement(img)
			img.src = URL.createObjectURL(blob)
			output.appendChild(img)
		})
		.catch(err => {
			error.innerText = "Error: " + err})
}


