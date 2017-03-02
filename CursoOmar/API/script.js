function httpGetAsync(url, callback) {
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function() {
        callback(xhr.status);
    }

    xhr.open("GET", url, true); 
    xhr.send(null);
}

httpGetAsync("https://www.codecademy.com/", function(status){
    console.log(status);
});

