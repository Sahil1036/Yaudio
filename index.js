let input=document.getElementsByTagName("input");
const btn=document.getElementsByClassName("btn");
const loader=document.getElementById("loader");
const title_of_link=document.getElementsByClassName("title_of_link");
const size_of_link=document.getElementsByClassName("size_of_link");
const downlod_data=document.getElementsByClassName("downlod_data");
const download_link=document.querySelector("#download_link a");
const quality=document.querySelector("#quality");
 btn[0].addEventListener("click",()=>{
	if(input[0].value){
	loader.style.visibility="visible";

	const url = `https://youtube-mp3-download-highest-quality1.p.rapidapi.com/ytmp3/ytmp3/custom/?url=${input[0].value}&quality=${quality.value}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': key,
		'X-RapidAPI-Host': 'youtube-mp3-download-highest-quality1.p.rapidapi.com'
	}
};
	// const url = `https://youtube-mp3-downloader2.p.rapidapi.com/ytmp3/ytmp3/?url=${input[0].value}%3D0F9CXoAhPSNOpoYI&quality=${quality.value}`;
	// const options = {
	// 	method: 'GET',
	// 	headers: {
	// 		'X-RapidAPI-Key': '',
	// 		'X-RapidAPI-Host': 'youtube-mp3-downloader2.p.rapidapi.com'
	// 	}
	// };
	try{
		fetch(url,options).then((response)=>{
			return response.json();
		}).then((result)=>{
			loader.style.visibility="hidden";
			downlod_data[0].style.display="block";
			title_of_link[0].innerHTML=`Title:${result.title}`;
			size_of_link[0].innerHTML=`Size:${result.size}`;
			download_link.href=result.link;
			console.log(result);
		}).catch((error)=>{
			throw 0;
		});		
	}
	catch(error){
		alert("please paste the valid link in input for download");
	}
}else{
	alert("paste the link in input for download");
}
})

document.addEventListener("contextmenu",(e)=>{
	e.preventDefault();
return false;
})