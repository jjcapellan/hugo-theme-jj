+++
title= "fig shortcode"
date= 2020-10-15T13:33:53+02:00
draft= true                       
description="Use of shorcode img" 
tags=["shortcode", "figure"]      
categories=["hugo"]
+++

As an alternative to the *figure* built-in shortcode of [Hugo](https://gohugo.io), I've created *fig* shortcode for [JJ theme](https://github.com/jjcapellan/hugo-theme-jj/).<!--more-->

Here you can see the result of using *fig* shortcode:
{{< fig "/image1.jpg" Calculator "Clayton Robbins" "https://unsplash.com/@claytonrobbins" >}}

This is the shortcode used to generate html above this line:
{{< highlight golang >}}
{{</* fig "/image1.jpg" Calculator "Clayton Robbins" "https://unsplash.com/@claytonrobbins" */>}}
{{< /highlight >}}
And this is the generated html:
{{< highlight html >}}
<figure class="fig">
    <div class="fig-container">
        <img class="fig-img" src="/image1.jpg" alt="Calculator">        
        <figcaption class="fig-caption">Calculator by <a target="_blank" rel="noopener noreferrer" href="https://unsplash.com/@claytonrobbins">Clayton Robbins</a></figcaption>        
    </div>
</figure>
{{< /highlight >}}

## Params:
*fig* uses 4 params, 3 of them optionals, and allows using of positioned or named params.  
You must use named params when some intermediate param is omitted.
#### Positioned params:
1. url of the image (required)
2. Title or description of the image (optional)
3. Attribution of the image, author or source (optional)
4. Attribution link (optional)  
Examples of all valid uses with positioned params:
{{< highlight golang >}}
{{</* fig "/image1.jpg" Calculator "Clayton Robbins" "https://unsplash.com/@claytonrobbins" */>}}
{{</* fig "/image1.jpg" Calculator "Clayton Robbins" */>}}
{{</* fig "/image1.jpg" Calculator */>}}
{{</* fig "/image1.jpg" */>}}
{{< /highlight >}}
#### Named params:
* **src**: url of the image (required)
* **caption**: Title or description of the image (optional)
* **attr**: Attribution of the image, author or source (optional)
* **attrlink**: Attribution link (optional)  
Example of **some** valid uses with positioned params:
{{< highlight golang >}}
{{</* fig src="/image1.jpg" caption="Calculator" attr="Clayton Robbins" attrlink="https://unsplash.com/@claytonrobbins" */>}}
{{</* fig src="/image1.jpg" attr="Clayton Robbins" attrlink="https://unsplash.com/@claytonrobbins" */>}}
{{</* fig src="/image1.jpg" attr="Clayton Robbins" */>}}
{{< /highlight >}}