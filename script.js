$(document).ready(function(){
    $("input").keyup(function(){
        var content = $(this).val();
        var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        
        var url = content.match(urlRegex);
        
        if(url.length>0){
            //$("#databox").slideDown('show');
            //$("#databox").html("<img src='http://demo.techumber.com/FbUrlParser/loading.gif'>");
            // Getting cross domain data 
            $.get("urlget.php?url="+url,function(response){
                // Loading <title></title>data
                var title=(/<title>(.*?)<\/title>/m).exec(response)[1];
                var desc = (/<meta name="description" content="(.*?)"/m).exec(response)[1];
                // Loading first .png image src='' data 
                // var logo=(/src='(.*?).png'/m).exec(response)[1];
                $("#title").html(title);
                $("#link").html(url);
                $("#text").html(desc);
            });
        }
        return false;
    });
});