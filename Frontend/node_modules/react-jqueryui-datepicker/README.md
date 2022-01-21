# react-jqueryui-datepicker
React Component for jQueryUI DatePicker (https://jqueryui.com/datepicker/)

Installation
------------

Install with `npm` or `yarn`

``` bash
$ npm install react-jqueryui-datepicker --save
 
or
 
$ yarn add react-jqueryui-datepicker
```

Usage
-----

```javascript
import DatePicker from 'react-jqueryui-datepicker';
 
function changeHandler(e){
	//e is a momentJS DateTime instance
}

 <DatePicker 
    onChange={changeHandler} />
```

Note
-----

This component assumes that both jQuery and jQuery UI libraries and stylesheets have already been included in the DOM before this component is called.

```html
<link rel="stylesheet" href="jquery-ui.min.css"/>
<script src="jquery.min.js"></script>
<script src="jquery-ui.min.js"></script>
<script src="react-app.js"></script>
```

License
-------

(The MIT License)

Copyright (c) 2017 Joe Cruz &lt;joecruz.tvmb@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.