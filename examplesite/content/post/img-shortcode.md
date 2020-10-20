+++
title= "Img shortcode"
date= 2020-10-15T13:33:53+02:00
draft= true                       
description="Use of shorcode img" 
tags=["shortcode", "figure"]      
categories=["hugo"]
+++

As an alternative to the **figure** built-in shortcode of [Hugo](https://gohugo.io), I've created a new shortcode more integrated with the [JJ theme](https://github.com/jjcapellan/hugo-theme-jj) and with which you can use both positioned and named parameters.<!--more-->

Here you can see the result of using **img** shortcode:
{{< img "/image1.jpg" Calculator "Clayton Robbins" "https://unsplash.com/@claytonrobbins" >}}

This is the shortcode used to generate html above this line:
{{< highlight golang >}}
{{</* img "/image1.jpg" Calculator "Clayton Robbins" "https://unsplash.com/@claytonrobbins" */>}}
{{< /highlight >}}
And this is the generated html:
{{< highlight html >}}
<figure class="scfig">
    <div class="scfig-container">
        <img class="scfig-img" src="/image1.jpg" alt="Calculator">        
        <figcaption class="scfig-caption">Calculator by <a target="_blank" rel="noopener noreferrer" href="https://unsplash.com/@claytonrobbins">Clayton Robbins</a></figcaption>        
    </div>
</figure>
{{< /highlight >}}

## Params:
**img** uses 4 params, 3 of them optionals, and allows using positioned or named params.  
You must use named params when some intermediate param is omitted.
{{% tbl "Fig.1 img params" center %}}
| Position | Name | Description | Required? |
| :-----: | ---- |------------ | :---------: |
| 1 | **src** |URL of the image | yes |
| 2 | **caption** |Title or description of the image | no |
| 3 | **attr** |Attribution of the image, author or source | no |
| 4 | **attrlink** |Attribution link| no |
{{% /tbl %}}

 
Examples:
{{< highlight golang >}}
// Positioned params
{{</* img "/image1.jpg" Calculator "Clayton Robbins" "https://unsplash.com/@claytonrobbins" */>}}
{{</* img "/image1.jpg" Calculator */>}}
{{</* img "/image1.jpg" */>}}
// Named params
{{</* img src="/image1.jpg" attr="Clayton Robbins" attrlink="https://unsplash.com/@claytonrobbins" */>}}
{{< /highlight >}}