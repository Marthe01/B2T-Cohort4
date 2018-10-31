let albums = [
	{name:'Thriller', artist:'MJ', year:1982, cover:'https://images-na.ssl-images-amazon.com/images/I/51VRdpYNU9L.jpg'},
	{name:'Doggy Style', artist:'Snoop', year:1994, cover:'https://assets.capitalxtra.com/2013/48/best-hip-hop-album-covers-22-1386002951-view-0.jpg'},
	{name:'American Idiot', artist:'GD', year:2004, cover:'https://images-na.ssl-images-amazon.com/images/I/41CMRA0oEML.jpg'}
];

//albums[0].artist will give me 'MJ'
//albums[1].year will give me 1994

for(let i = 0; i < albums.length; i++){
	document.getElementById('display').innerHTML +=    `<h1>${albums[i].name} by ${albums[i].artist} </h1>
		<img src="${albums[i].cover}" />`;
}

for(let i = 0; i < albums.length; i++){
	//if it's the first image, I need to give the div the class "active"
	if(i == 0){
		document.getElementById('carouselDisplay').innerHTML += `
		<div class="carousel-item active">
      		<img class="d-block w-100" src="${albums[i].cover}" alt="${albums[i].name}">
      		<div class="carousel-caption d-none d-md-block">
			    <h5>${albums[i].name}</h5>
			    <p>By ${albums[i].artist} in ${albums[i].year}</p>
		  	</div>
    	</div>`;
	}else{
		document.getElementById('carouselDisplay').innerHTML += `
		<div class="carousel-item">
      		<img class="d-block w-100" src="${albums[i].cover}" alt="${albums[i].name}">
      		<div class="carousel-caption d-none d-md-block">
			    <h5>${albums[i].name}</h5>
			    <p>By ${albums[i].artist} in ${albums[i].year}</p>
		  	</div>
    	</div>`;
	}
}