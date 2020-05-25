const config = {
    author: "Gray Cat",
    linkedin: "linkedin.com",
    github: "github.com",
    "visible_categories": {
        "category01": {
            title: "Visbile Category 1",
            url: "/posts?category=category01",
            description: "Click the background to access the site",
            background: "images/todo.jpg"
        },
        "category02": {
            title: "Visbile Category 2",
            url: "/posts?category=category02",
            description: "Click the background to access the site",
            background: "images/todo.jpg"
        }
    },
    "db": {
        "host": "localhost",
        "port": 3306,
        "database": "blog",
        "username": "dev",
        "password": "123456"
    },
    "images": {
        "author_profile": "author-profile.png",
        "github_logo": "github-icon.png",
        "linkedin_logo": "linkedin-icon.png",
        "author_logo": "author-logo.png"
    }
}
  
export default config;