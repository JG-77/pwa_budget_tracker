# pwa_budget_tracker ![Node.js](https://img.shields.io/badge/License-Node.js-blue.svg) ![MIT](https://img.shields.io/badge/License-MIT-red.svg) ![Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-green.svg)

## GitHub Repository and Application

---

[GitHub Link](https://github.com/JG-77/pwa_budget_tracker.git)

[Heroku Deployed Budget Tracker](https://pwa-budget-tracker-jg.herokuapp.com/)

## Application Screenshots

---

## ![Budget Tracker Homescreen](https://user-images.githubusercontent.com/76461629/127244991-6bb80d9f-e9a6-4a65-bf9e-f86ca89a71cf.png)

---

## ![Budget Tracker Homescreen Offline Request](https://user-images.githubusercontent.com/76461629/127245003-42eed0d7-1fc2-449d-8be5-3eab48de0e3b.png)

---

![Budget Tracker Homescreen Online Network Returned](https://user-images.githubusercontent.com/76461629/127245007-e2706a04-3c72-4cd8-8b61-388d6f585618.png)

---

## Description

---

Keep track of your budget and spending with the simple Budget Tracker App! Simply entering the amount you want to add or subtract to your budget will display a graph to better visualize your financial progress. Being able to record your budget funding with new offline functionality gives users peace of mind when managing their finances without connection to an online network. This app takes the frustrating budgeting out of the equation, so you can track your finances with ease!

## Technologies

---

### Service-Worker.js

- Registered the service-worker in index.html
- Put files to be cached in an array variable
- Installed the cache
- Set up code to activate the cache and delete old cached files
- Made a fetch request to update cache files when there is a successful response
- Old cache is retrieved when there is a failed fetch request

### Webpack

- Set index.js as entry point
- 'dist' folder inside the public directory created as the output along with bundle.js
- Added `WebpackPwaManifest` as the webpack plugin with app details
- Included `babel-loader` as a module

### Node.js/Express/Mongoose (Starter Code)

- Starter Code to set up the working server and Mongoose database
- API routes for handling transaction requests
- Transaction model created for the finance input stored in the database

### Front-end (Stater Code)

- Creating HTMl elements
- CSS styling
- Javascript functionality for event listeners and chart creation

## Contact

---

Jessie Guadarrama

[GitHub Profile](https://github.com/JG-77)

<jesguadarrama98@gmail.com>

## Licenses

---

[Node.js License](https://raw.githubusercontent.com/nodejs/node/master/LICENSE)

Copyright Node.js contributors. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.

---

The MIT License (MIT)

Copyright © 2021 LuÃ­s Couto <couto@15minuteslate.net> (Babel-loader)

Copyright (c) 2009-2014 TJ Holowaychuk <tj@vision-media.ca> (Express.js)

Copyright (c) 2013-2014 Roman Shtylman <shtylman+expressjs@gmail.com> (Express.js)

Copyright (c) 2014-2015 Douglas Christopher Wilson <doug@somethingdoug.com> (Express.js)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---

opyright (c) 2021 (Mongoose)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
