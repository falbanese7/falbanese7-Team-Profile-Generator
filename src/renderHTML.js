function generateEngineerCard(engineer) {
    return `
                <div class="card col-4">
                    <div class="card-body bg-primary text-white">
                        <h5 class="card-title">${engineer.name}</h5>
                        <p class="card-text"><ion-icon name="code-slash-outline"></ion-icon> Engineer</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Company ID: ${engineer.id}</li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
                        <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                    </ul>
                </div>
    `;
}

function generateInternCard(intern) {
    return `
                <div class="card col-4">
                    <div class="card-body bg-primary text-white">
                        <h5 class="card-title">${intern.name}</h5>
                        <p class="card-text"><ion-icon name="school-outline"></ion-icon> Intern</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Company ID: ${intern.id}</li>
                        <li class="list-group-item">School Name: ${intern.school}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                    </ul>
                </div>
    `;
}

function generateManagerCard(manager) {
    return `
                <div class="card col-4">
                    <div class="card-body bg-primary text-white">
                        <h5 class="card-title">${manager.name}</h5>
                        <p class="card-text"><ion-icon name="cafe-outline"></ion-icon> Manager</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Company ID: ${manager.id}</li>
                        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                    </ul>
                </div>
    `;
}

function addCardToPage(data) {
    cardArr = [];

    for (let i = 0; i < data.length; i++) {
        const teamMem = data[i];
        const role = teamMem.getRole();

        if (role === 'Engineer') {
            const addEngineer = generateEngineerCard(teamMem);
            cardArr.push(addEngineer);
        }
        if (role === 'Intern') {
            const addIntern = generateInternCard(teamMem);
            cardArr.push(addIntern);
        }
        if (role === 'Manager') {
            const addManager = generateManagerCard(teamMem);
            cardArr.push(addManager);
        }
    }

    const teamCards = cardArr.join('')
    const renderTeam = renderHTML(teamCards);
    return renderTeam;
}

function renderHTML(teamCards) {
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
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <nav class="navbar navbar-light bg-info">
            <div class="container-fluid justify-content-center">
              <span class="navbar-brand mb-0 h1 text-uppercase fs-1 text-white">The Team</span>
            </div>
          </nav>
        
        <section>
          <div class="container">
              <div class="row justify-content-center">
                        <!-- Team Cards -->
                        ${teamCards}
                </div>
            </div>
        </section>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        <script src="../index.js" async defer></script>
    </body>
</html>
    
    `
}

module.exports = addCardToPage;
  