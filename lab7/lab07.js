const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",
        tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", 
        tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",
        tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", 
        tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];

for (var i = 0; i < works.length; i++) {
    var item = document.createElement("div");
    item.className = "item";
    item.innerHTML = "<h4> Genre : " + works[i].tips + "</h4>"
        + "<div class='inner-box'>"
        + "<h3 style='display:inline'>" + works[i].author + "&emsp;</h3>"
        + "<p style='display:inline'>" + "lifetime: " + works[i].lifetime + "</p>"
        ;
    var content = "";
    for (var j = 0; j < works[i].photos.length; j++) {
        if (j == 0) {
            content = content + "<div class='inner-box'> <h3>"
                + " Popular Photos </h3>";
        }
        content = content + "<img class='photo' src='" 
            + works[i].photos[j] + "' />";
    }
    item.innerHTML = item.innerHTML + content
        + "<div> <button> Visit </button> </div>";
    var body = document.body;
    body.lastChild.appendChild(item);
}