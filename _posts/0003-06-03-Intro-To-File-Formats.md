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

![image2]  

This image is visually easy for humans to interpret.
It could be a JPG or PNG, or a file from ChemDraw (.cvs). The image itself isn’t machine readable, but behind the image is the ‘connection table’ that tells the computer how to draw the image.    

![image3]  

The numbers in the above SDF/Molfile tell the exact position of the element, detailing how the machine should draw the image for humans.

![image1]  

To go even further, InChI, the IUPAC International Chemical Identifier, standardizes and ‘hashes’ information to become shorter. So you can use searches like Google to do a structure search if you have an InChI key associated with your article! Google can’t search strings that are too long, so we needed a way to represent our desired image that is google-readable.

But all these different formats are representing the same compound!


[image1]: /img/file-formats/image1.png
[image2]: /img/file-formats/image2.png
[image3]: /img/file-formats/image3.png
