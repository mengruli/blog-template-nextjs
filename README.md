# blog-template-nextjs
A simple Blog powered by NextJS and MySQL

## The Story
I have blogs on different sites - Gitbook, my own JekyII website, Medium etc. Every now and then, I hit the point where I need custom features which are not supported by any of the ones mentioned above. Then I decided to build my own blog from scratch - I am willing to sacrifice beauiful UI for more control.

The project has started. Quickly, I realize it would be helpful to extract my v1 as starter template to ease others who want to build their own blog from scratch. Here comes to the repo `blog-template-nextjs`.

## The Tech
- `Node`: the platform

- `NextJS`: the framework. Really love the idea of detecting SSR at build time

- `MySQL`: the database

- `Make`: the build scripts

- Misc: `docker`, `nvm`

## Run
### Migration
You may want to migration your old blogs (must be Markdown files, sorry) to the new site. It's as easy as 2 steps:
- place markdown files under `blog/pages/source-posts`. It's recommended to group your posts by `category`. The project    take the direct subdirectories under `blog/pages/source-posts` as `categories`.

    For example, the post `blog/pages/source-posts/foo/bar/post.md` will be added to `foo` category.

- The `migration-script` will generate the `migration.sql` script which be loaded to database later on.

### Make Everything
`Makefile` contains all the recipes you need. To run the app locally, simply do

`make run` or `gmake run` if you are on OSX and not have GNU make as default make.

~~ Have Fun ~~


## TODO
- wiki
- linting
- deployment to cloud providers
