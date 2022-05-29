function renderHTML(data) {
    return `
    <!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Team Profiles</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="dist/style.css">
    </head>
    <body>
        <nav class="navbar navbar-light bg-info">
            <div class="container-fluid justify-content-center">
              <span class="navbar-brand mb-0 h1 text-uppercase fs-1 text-white">The Team</span>
            </div>
          </nav>
        
        <section>
            <!-- Employee Cards -->
        </section>
        <script src="index.js" async defer></script>
    </body>
</html>
    
    `
}

module.exports = renderHTML();
  