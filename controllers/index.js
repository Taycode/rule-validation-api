class IndexController {
  static index (req, res) {
    const name = 'Abdulmateen Tairu'
    const github = '@taycode'
    const email = 'abdulmateentairu@gmail.com'
    const mobile = '07051878382'
    const twitter = '@taycode'

    const data = {
      name,
      github,
      email,
      mobile,
      twitter
    }
    return res.status(200).json({
      message: 'My Rule-Validation API',
      status: 'success',
      data
    })
  }
}

module.exports = IndexController;
