(function (){
    var sidebar = document.getElementById("sidebar");
    Add_community_link(sidebar);
    Add_latest_articles(sidebar);
    Add_latest_photos(sidebar);
    Add_tools(sidebar);
})()

function Add_community_link(sidebarOBJ){
    var url = "./json/community.json"
    var request = new XMLHttpRequest();
    request.open("get", url);
    request.send(null);
    request.onload = function () {
        if (request.status == 200) {
            var community_json = JSON.parse(request.responseText);
            var communitiesList = community_json.communuities;

            var widget_social_links = document.createElement("div");
            widget_social_links.className = "widget widget-social-links";
            sidebarOBJ.appendChild(widget_social_links);

            var ul_social_links = document.createElement("ul");
            widget_social_links.appendChild(ul_social_links);
            
            for(var i=0,len=communitiesList.length;i<len;i++){
                var link_li = document.createElement("li");
                ul_social_links.appendChild(link_li);
                
                var link_a = document.createElement("a");
                link_a.className = communitiesList[i].class;
                link_a.title = communitiesList[i].title;
                link_a.href = communitiesList[i].url;
                link_li.appendChild(link_a);

                    var link_i = document.createElement("i");
                    link_i.className = communitiesList[i].class_i;
                    link_a.appendChild(link_i);

                var link_h4 = document.createElement("h4");
                link_h4.innerHTML = communitiesList[i].numbers;
                link_li.appendChild(link_h4);

                var link_span = document.createElement("span");
                link_span.innerHTML = "Followers";
                link_li.appendChild(link_span);
            }
        }
    }
}

function Add_latest_articles(sidebarOBJ){
    var url = "./json/latest_articles.json"
    var request = new XMLHttpRequest();
    request.open("get", url);
    request.send(null);
    request.onload = function () {
        if (request.status == 200) {
            var articles_json = JSON.parse(request.responseText);
            var articlesList = articles_json.articles;

            var widget_articles = document.createElement("div");
            widget_articles.className = "widget widget-trending-posts";
            sidebarOBJ.appendChild(widget_articles);

            var articles_h3 = document.createElement("h3");
            articles_h3.className = "widget-title"
            articles_h3.innerHTML = articles_json.article_name;
            widget_articles.appendChild(articles_h3);

            var ul_articles = document.createElement("ul");
            ul_articles.className="wd-posts"
            widget_articles.appendChild(ul_articles);
            
            for(var i=0,len=articlesList.length;i<len;i++){
                var article_li = document.createElement("li");
                article_li.className = "wd-post"
                ul_articles.appendChild(article_li);
                
                var article_img = document.createElement("img");
                article_img.src = articlesList[i].photo;
                article_img.alt = articlesList[i].alt;
                article_li.appendChild(article_img);

                var article_div = document.createElement("div");
                article_div.className = "wd-post-info";
                article_li.appendChild(article_div);

                    var article_h3 = document.createElement("h3");
                    article_h3.className = "post-title";
                    article_div.appendChild(article_h3);

                        var article_a = document.createElement("a");
                        article_a.href = articlesList[i].url;
                        article_a.title = articlesList[i].title;
                        article_a.innerHTML = articlesList[i].title;
                        article_h3.appendChild(article_a);
                    
                    var article_span = document.createElement("span");
                    article_span.className = "post-date";
                    article_span.innerHTML = articlesList[i].time;
                    article_div.appendChild(article_span);
            }
        }
    }
}

function Add_latest_photos(sidebarOBJ){
    var url = "./json/latest_photos.json"
    var request = new XMLHttpRequest();
    request.open("get", url);
    request.send(null);
    request.onload = function () {
        if (request.status == 200) {
            var photos_json = JSON.parse(request.responseText);
            var photosList = photos_json.photos;
            console.log(photosList);

            var widget_photos = document.createElement("div");
            widget_photos.className = "widget widget-recent-post";
            sidebarOBJ.appendChild(widget_photos);

            var photos_h3 = document.createElement("h3");
            photos_h3.className = "widget-title"
            photos_h3.innerHTML = photos_json.photo_name;
            widget_photos.appendChild(photos_h3);

            var ul_photos = document.createElement("ul");
            ul_photos.className="recent-post-carousel"
            widget_photos.appendChild(ul_photos);
            
            for(var i=0,len=photosList.length;i<len;i++){
                var photo_li = document.createElement("li");
                photo_li.className = "post-slide"
                ul_photos.appendChild(photo_li);
                
                var photo_img = document.createElement("img");
                photo_img.src = photosList[i].photo;
                photo_img.alt = photosList[i].alt;
                photo_li.appendChild(photo_img);
            }
        }
    }
}

function Add_tools(sidebarOBJ){
    var url = "./json/tools.json"
    var request = new XMLHttpRequest();
    request.open("get", url);
    request.send(null);
    request.onload = function () {
        if (request.status == 200) {
            var tools_json = JSON.parse(request.responseText);
            var toolsList = tools_json.online_tools;
            console.log(toolsList);

            var widget_tools = document.createElement("div");
            widget_tools.className = "widget widget-catgs";
            sidebarOBJ.appendChild(widget_tools);

            var tools_h3 = document.createElement("h3");
            tools_h3.className = "widget-title"
            tools_h3.innerHTML = tools_json.tool_name;
            widget_tools.appendChild(tools_h3);

            var ul_tools = document.createElement("ul");
            ul_tools.className="catgs-links"
            widget_tools.appendChild(ul_tools);
            
            for(var i=0,len=toolsList.length;i<len;i++){
                var tool_li = document.createElement("li");
                ul_tools.appendChild(tool_li);
                
                var tool_a = document.createElement("a");
                tool_a.href = toolsList[i].url;
                tool_a.title = toolsList[i].name;
                tool_a.innerHTML = toolsList[i].name;
                tool_li.appendChild(tool_a);
            }
        }
    }
}





