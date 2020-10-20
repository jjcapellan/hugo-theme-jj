<p align="center">
<img alt="Logo JJ" src="https://raw.githubusercontent.com/jjcapellan/hugo-theme-jj/master/static/imgs/logo.svg"/><br>   
JJ theme for Hugo<br>
<a href="https://jjcapellan.github.io/demojjtheme/" style="font-size: 1.2em;">Live demo</a><br><br>
<img alt="JJ screen capture 1024x768" src="https://raw.githubusercontent.com/jjcapellan/hugo-theme-jj/master/images/desktop1024x768.png"/>
</p>


## Table of contents
* [Features](#Features)
* [Installation](#Installation)
* [Configuration](#Configuration)
    * [Minimum configuration](#Minimum-configuration)
    * [Search Engine](#Search-engine)
    * [Customize color scheme](#Customize-color-scheme)
    * [Add interface languajes](#Add-interface-languajes)
* [Front Matter](#Front-Matter)
    * [cover](#cover)
    * [summaryCover](#summaryCover)
    * [math](#math)
    * [nolist](#nolist)
* [Shortcodes](#Shortcodes)
    * [img](#img)
    * [tbl](#tbl)
* [License](#License)  

## Features
* Search engine (optional)
* Responsive design
* Multilingual interface (english and spanish).
* 3 colors schema (customizable)
* Google analytics support (optional)
* Disqus comments support (optional)
* Share buttons (twitter, facebook, linkedin, reddit)
* Image cover for the post or the summary (optional from each page)
* Math notation usin katex (optional from each page)
* No dependencies of css or javascript libraries

## Installation
1. Before start installation, ensure you have installed an [extended version of Hugo](https://github.com/gohugoio/hugo/releases). You can find help on this topic from [Hugo docs](https://gohugo.io/getting-started/installing/).
2. Generate a new Hugo site:
```
hugo new site siteName
```
3. Init your site repository and add jj theme submodule into it:
```
cd siteName
git submodule add https://github.com/jjcapellan/hugo-theme-jj.git themes/jj
```
4. Copy the config file from theme exampleSite to your site root folder (on windows you must use **copy** command):
```
cp themes/jj/examplesite/config.toml config.toml
```

## Configuration
The variables in config file are commented, so you should'nt have problems. 
### Minimum configuration
1. First of all, you should set at least this params for customize the theme:
* baseURL
* title
* copyrigth
* languageCode
* defaultContentLanguage 
* description (desciption of your website)
* Brand name (Optional. Your brand name or site title. Is placed at top-left side to the logo):
```toml
[params.brand]
  name = "yourBrandName"
``` 
2. Put your logo in **themes/jj/static/imgs/logo.svg**. Or disable it by setting **params.brand.logo = ""** in config file.
The logo should have 1:1 aspect ratio, and preferably in svg format.

3. Put your favicons in **themes/jj/static/imgs/**: favicon.ico, favicon.png, favicon.svg. At least the ico file is required for this functionality.

### Search engine
There are 2 conditions to use this feature:
1. In the congif file must be activated: 
```toml
[params.search]
  active = true
```
2. You must copy the file **search.md** from **themes/jj/examplesite/content** to the site content root folder.

### Customize color scheme
This theme only uses 3 colors stored in 3 scss variables from the file **themes/jj/assets/css/styles.scss**:
```css
$color-light: #f2f0e1;
$color-medium: #b13e41;
$color-dark: #3d3d3b;
```

### Add interface languajes
This theme uses i18n. If you want to add more languages to the interface:
1. Go to the folder **themes/jj/i18n/**
2. Create a new toml file with the language code as file name. You can copy the content from other i18n file and change its values.

## Front Matter
This theme adds some params for the front matter.
### cover
Adds an image above the post title in single pages. This image is adjusted to max width of 760px.
Examples:
```toml
cover = "/myimage.png"                    # relative url
cover = "http://imagehost.com/image.png"  # external url
```
### summaryCover
Adds an image above the post title in list pages. This image is adjusted to max width of 760px.
Examples:
```toml
summaryCover = "/myimage.png"                    # relative url
summaryCover = "http://imagehost.com/image.png"  # external url
```
### math
Parses math notation using the javascript library katex.
Example:
```toml
math = true     # Activates katex (default: false)
```
### nolist
Should the current post appear in the site lists or search results?. This is usefull for "about", "contact",... pages.
Example:
```toml
nolist = true   # Removes this post from lists and search results (default: false)
```

## Shortcodes
JJ theme at this moment adds one shortcode to the built-in existing ones in Hugo. 
### img
Inserts images width caption in your posts.
This shortcode can use positioned or named params. You must use named params when some intermediate param is omitted.
#### Positioned params:
1. url of the image (required)
2. Title or description of the image (optional)
3. Attribution of the image, author or source (optional)
4. Attribution link (optional)  
Examples of all valid uses with positioned params:
```
{{< img "/image1.jpg" Calculator "Clayton Robbins" "https://unsplash.com/@claytonrobbins" >}}
{{< img "/image1.jpg" Calculator "Clayton Robbins" >}}
{{< img "/image1.jpg" Calculator >}}
{{< img "/image1.jpg" >}}
```
#### Named params:
* **src**: url of the image (required)
* **caption**: Title or description of the image (optional)
* **attr**: Attribution of the image, author or source (optional)
* **attrlink**: Attribution link (optional)  
Example of **some** valid uses with positioned params:
```
{{< img src="/image1.jpg" caption="Calculator" attr="Clayton Robbins" attrlink="https://unsplash.com/@claytonrobbins" >}}
{{< img src="/image1.jpg" attr="Clayton Robbins" attrlink="https://unsplash.com/@claytonrobbins" >}}
{{< img src="/image1.jpg" attr="Clayton Robbins" >}}
```

### tbl
Center and adds caption to tables or other markdown content.
#### Params:
1. Caption (optional)
2. Caption alignment(optional): left(default), right, center
Example:
```
// Caption is optional
{{% tbl Fig.1 center%}}
 ...markdown table here
{{% /tbl %}} 
```

## License
This code is released under the [MIT LICENSE](https://raw.githubusercontent.com/jjcapellan/hugo-theme-jj/master/LICENSE)
