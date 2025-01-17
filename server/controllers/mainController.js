


exports.homePage = async (req, res) => {
    const locals = {
        title: 'NodeJs notes',
        description: 'Notes App By Shubham Maske'
      }
      res.render('index', {
        locals,
        layout: '../views/layouts/front-page'
      })
}




exports.about = async (req, res) => {
    const locals = {
        title: 'About -- odeJs notes',
        description: 'Notes App By Shubham Maske'
      }
      res.render('about', locals)
}