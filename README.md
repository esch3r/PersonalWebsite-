# PersonalWebsite-
A [Link to Johnathan Machler's webpage](http://d.umn.edu/~machl005 "Johnathan Machlers webpage").


## How to 



### Construct the cascading style sheet .css file 

~~~~
p {
  color: red;
  text-align: center;
}
~~~~

The antonomy of this code is that p is the selector 
containing the properties color and text-align. Respectively, red and center correspond as values to these properties. 
In other languages, like python, this construction would be called a dictionary which form of a data structure. 


### Convert a .jpeg, .gif, png to a .ico for website icon 

### Make the robots.txt file
When a robot looks for the "/robots.txt" file for URL, it strips the path component from the URL (everything from the first single slash), and puts "/robots.txt" in its place.

For example, for "http://www.example.com/shop/index.html, it will remove the "/shop/index.html", and replace it with "/robots.txt", and will end up with "http://www.example.com/robots.txt".

So, as a web site owner you need to put it in the right place on your web server for that resulting URL to work. Usually that is the same place where you put your web site's main "index.html" welcome page. Where exactly that is, and how to put the file there, depends on your web server software. 

~~~~
User-agent: *
Disallow:
Sitemap: http://d.umn.edu/~machl005/sitemap.xml
~~~~

```
This too
```


### A sitemap.xml file 

Generating a sitemap of your website is simple and easy. 
if you go to this [xml-sitemps.com](https://www.xml-sitemaps.com "sitemap.xml creation page ").
~~~~
<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->


<url>
  <loc>http://www.d.umn.edu/~machl005/</loc>
  <lastmod>2019-07-05T01:05:42+00:00</lastmod>
</url>


</urlset>
~~~~

```
This too
```

### Bookmarks.html from your browser
* Go into settings 
* click bookmarks 
* export bookmarks
