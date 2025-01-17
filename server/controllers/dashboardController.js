


exports.dashboard = async (req, res) => {
    const locals = {
        title: 'Dashboard',
        description: 'Notes App By Shubham Maske'
      }
      res.render('dashboard/index', {
        locals,
        layout: '../views/layouts/dashboard'
      })
}