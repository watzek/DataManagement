---
category: [create]
---
“A **file format** is a standard way that information is encoded for storage in a computer file. It specifies how bits are used to encode information in a digital storage medium.”      

We have already discussed types of data. What about format? Turns out, the same data can exist in many different formats!
As shown in the table below, tabular experimental data could be stored in many different file formats. The same applies for other types of data.

|Tabular experimental data|
| :------------- |
|Excel spreadsheet (.xlsx)|
|Comma-separated values (.csv)|
|Access database (.mdb)|
|Google Spreadsheet|
|SPSS portable file (.por)|
|XML file (.xml)|

Even simple structural data can exist in different formats!  
For example, this image is visually easy for humans to interpret (it is in a human readable format).
It could be a JPG or PNG, or a file from ChemDraw (.cvs). The image itself isn’t machine readable, but behind the image is the ‘connection table’ that tells the computer how to draw the image.
<span class="img-md">![image2]</span>

The numbers in the SDF/Molfile below tell the exact position of the element, detailing how the machine should draw the image for humans.

![image3]

To go even further, InChI, the IUPAC International Chemical Identifier,
standardizes and ‘hashes’ information to make it shorter. Search engines like
google can’t search using strings that are too long, so a new format was
needed to allow for these types of searches searches.
So now, if you have an InChI key associated with your article, a search engine
can be used to find it! While the first format was human readable,
this format, InChIKey, is google-readable!

![image1]

These are all different formats, but they are all representing the same compound.
It is important to notice that you should consider different formats depending
on what you are trying to accomplish. If you are trying to make something easy
for humans to understand, a visual format (pictures or video) is often the
way to go!


[image1]: /img/file-formats/image1.png
[image2]: /img/file-formats/image2.png
[image3]: /img/file-formats/image3.png
