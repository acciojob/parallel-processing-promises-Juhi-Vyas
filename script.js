const output = document.getElementById("output");
const error = document.getElementById("error");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

btn.addEventListener("click", downloadImages)

function downloadImages() {

	let promise = images.map(item => 
		fetch(item.url).then(res => res.blob()))
	
	Promise.all(promise)
		.then(blobs => blobs.forEach(blob => {
			let img = document.createElement("img")
			img.src = URL.createObjectURL(blob)
			output.appendChild(img)
		}))
		.catch(err => {
			error.innerText = "Error: " + err})
}


