# Data Management Site
This Jekyll site is a skeleton for a website created to be a resource for teaching standard data management practices in the context of chemistry research data.  
The material has been split into three categories - Create, Maintain, Share.


## Specifics
The site uses Jekyll, which is a static website generator, to generate a blog-like website containing pages for each of the modules. The modules are actualized as Jekyll "Posts"...

### Posts
Each of modules (represented internally as a post) are stored in the \_posts directory, and are organized by category. The naming convention is as follows:
	000#-##-##-Title.md
For the number section (000#-##-##)
* The first number denotes the category
   * 3&rarr;Create
   * 2&rarr;Maintain
   * 1&rarr;Share
	 * Note: Create is 3 because Jekyll sorts from greatest to smallest, so 3 comes before 2 and 1.
* The middle two numbers denote the true ordering of the post (remember posts are sorted greatest &rarr; smallest)
* The last two numbers are for readability, and are used to denote the ordering that will appear on the website (1,2,3.....)
For the Title, use - in place of spaces  
Jekyll will use the number section to sort the posts, and the title to create a title and URL to the post

The only thing left to worry about is to make sure and designate the category inside each post. The category is designated using YAML at the top of the page, the easiest way to get it right is to look at the existing posts as examples.

### Images
Images that will be used in posts are located in the 'img' folder. The organization here is arbitrary, but for the time being subfolders should share a name with the post that will be using the pictures.


----
Besides these few specifications, the rest of the website works as described in the [Jekyll documentation](https://jekyllrb.com/docs/).

----
The theme used in this website comes from the [Gridster Jekyll theme](https://github.com/DigitalMindCH/gridster-jekyll-theme) by DigitalMindCH. This theme mostly provides some CSS, layouts, templates and general structure.
