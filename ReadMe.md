# **Gulp**

Gulp is a task runner build on node.js it helps to run front-end tasks and large-scale web application.
<br> It builds system automated tasks like
* CSS and HTML minification
* Concatenating library
* Compiling SASS files
* Compilation of preprocess CSS and JavaScript
* Creation of deployment builds to store the resulting files in one location

Installation :
* ``` npm install gulp -g ```

Gulp file name should be **gulpfile.js** and to run the gulp task type<br>
* ``` gulp (taskName) ```

>you basically specify the src location(js,csss,images .. etc) <br>
>perform the task<br>
>specify the dest location

Gulp uses different plugins for different operations let look @them one by one
* gulp-imagemin <br>
  ```npm install gulp-imagine --save-dev```

    The plugin is mainly used for minimize the images.

* gulp-clean-css<br>
  ```npm install gulp-clean-css --save-dev```

* preprocessing in Gulp
  > gulp-sass converts sass to css
* globbing in node
> \*.css or \*.js etc matches any pattern in the current directory <br>
> \\\*\*\\\*.js or .css etc matches any file ending with specified file-extension in root and any child directories.<br>
> !somefile.css indicates gulp to exclude the pattern/file.<br>
> \*.+(js | css | sass | png | jpg) The plus + and parentheses () allows Gulp to match multiple patterns, with different patterns separated by the pipe | character.

* Gulp provides a watch method to check if a file was saved<br>
// Gulp watch syntax <br>
```gulp.watch('files-to-watch', ['tasks', 'to', 'run']);  ```<br>
this would be useful when you have continuous change in script and testing on browser the changes(continuous build trigger) + browser-sync library + run-sequence

* Optimizing CSS and JS files involves - minification and concatenation
> Main problem faced during the concatenation is the order of concatenation which is important incase of JS.<br>
> To solve this we use gulp-useref instead of gulp-concatenation <br>
```npm install useref --save-dev ```<br>
> Using useref
> * ```<!-- build:<type> <path> -->... HTML Markup, list of script / link tags.<!-- endbuild --> ```<br>
   example :
```html
<!--build:js js/main.min.js -->
<script src="js/lib/a-library.js"></script>
<script src="js/lib/another-library.js"></script>
<script src="js/main.js"></script>
<!-- endbuild -->
<!--build:css css/styles.min.css-->
<link rel="stylesheet" href="css/styles.css">
<link rel="stylesheet" href="css/another-stylesheet.css">
<!--endbuild-->
```

* Now to minify js we use **gulp-uglify** and **gulp-if** plugin.
* **gulp-cssnano** or **gulp-clean-css** for CSS minification.

Note:
 * gulp-rename for renaming the file @destination  ``` .pipe(rename({suffix:'.min'})) ```
 * Live-reloading with [Browser Sync](https://css-tricks.com/gulp-for-beginners/)  
 *  **run-sequence , gulp-cache .. ** etc are few more things which you can look into.
 * More info and very nice article can be found in the following link [GULP FOR Beginners](https://css-tricks.com/gulp-for-beginners/)
