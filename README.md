# module_builder
The purpose of this repo is to quickly deploy AngularJS components or entire modules (in a directive form) that adhere to John Papa's style guide from template files.

How to use:
Download the repo and put it somewhere
From termial, run:
  
  npm install
  
You can create template files using the following flags / syntax

  gulp mkModule --name someModule --dest some/directory [--comp someComponent]
  
Component options are: module, factory, service, controller, directive, template, less or a respective first 3 letters (mod, fac, ser, con, dir, tem, les). Leaving the -- comp option blank will create an entire module.

Running mkModule on a javascript comnponent will also create a someModule[Component].spec.js file with some unit testing code.
