function handleOpenAIAPIResonse(/** {HTMLImageElement} */img, data){
	data?.data?.forEach(d => {
		if (d.url) {
			// Dall-E 的格式
			img.src = d.url
		}else if(d.b64_json){
			// GPT 的格式
			img.src = "data:image/png;base64," + d.b64_json
		}						
		
		if(d.revised_prompt){
			img.alt = d.revised_prompt
			img.title = d.revised_prompt
		}else{
			img.alt = prompt
			img.title = prompt
		}
	})
}