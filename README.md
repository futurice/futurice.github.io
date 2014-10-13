Source for [futurice.github.io](http://futurice.github.io).

Adding a new project
--------------------

This site is for highlighting open source contributions by [Futurice](http://www.futurice.com). Before adding a project make sure that it's well documented and maintained by someone.

#### Steps for adding a project:

First write a description of your project. Descriptions are written in markdown and put to the `_includes` folder.

After that, add your project's information to `_config.yml`. You can also add a new category if you feel like your project doesn't fit to any of the existing ones.

A project has 4 properties:
- title => Title for the project.
- github_repo_name => Name of the repository in GitHub inside the Futurice organization.
- description => The filename of your description in the `_includes` folder.
- screenshot => Link to a screenshot of your project (optional).

**NOTE:** Please use pull requests.

Running the site locally
------------------------

Install [Bundler](http://bundler.io/):  
`gem install bundler`

Install dependencies with Bundler:  
`bundle install`

Run the site locally:  
`bundle exec jekyll serve`
