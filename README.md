# simple-templating-utility


Command line utility for your really simple templating needs.

It uses [Handlebars](http://handlebarsjs.com) as the templating engine. See the website for information on how to write the templates.

## Prerequisites

To run this software you must have [node.js](http://nodejs.org) installed.

## Installation

Use these commands to install this software.

```sh
git clone https://github.com/hdjarv/simple-templating-utility.git
cd simple-templating-utility/
npm install
chmod +x template.js
```

## Run

Run the utility by executing the `template.js` file. The utility needs a template file and data file as input. 

```sh
./template.js example/template.txt example/data.json
```

The result is printed to standard out. If you like you can speciy an output file as a third parameter to the utility.

## License

This software is licensed under the MIT license, see file LICENSE.