$(document).ready(function(){
    $("#button").click(function(){
        scrapeURL();
    });
    
    $("input").keyup(function(){
        if($("input").val().length === 0) {
            $("#databox").slideUp('show');
        }
    })
    
    function scrapeURL() {
    var content = $("input").val();
        var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        var url = content.match(urlRegex);
        
        if(url.length>0){
            $("#databox").slideDown('show');
            //$("#databox").html("<img src='http://demo.techumber.com/FbUrlParser/loading.gif'>");
            // Getting cross domain data 
            $.get("index.php?url="+url,function(response){
                // Loading <title></title>data
                var title=(/<title>(.*?)<\/title>/m).exec(response)[1];
                var desc = (/<meta name="description" content="(.*?)"/m).exec(response)[1];
                // Loading first .png image src='' data 
                //var og = (/<meta property="og:image" content="(.*?)"\/>/ig).exec(response)[1];
                var parser = new DOMParser()
                var doc = parser.parseFromString(response, "text/html")
                var firstImage = $(doc).find("img")[0]
                $("#image").html("<img src='"+url+$(firstImage).attr("src")+"'/>");
                $("#title").html("<a href='"+url+"'>"+title+"</a>");
                $("#link").html("<a href='"+url+"'>"+url+"</a>");
                $("#text").html(desc);
            });
        }
        return false;
}
});