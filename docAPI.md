# Documentation API Chicken

Il s'agit d'une API CRUD avec les méthodes GET / POST / PUT / PATCH / DELETE

## Endpoints

### Afficher tous les poulets (GET)

GET /api/chicken/

Réponse :
[
{
"_id": "64229b0f46d5e195a908580c",
"name": "Biscotte",
"birthday": "2022-01-01T00:00:00.000Z",
"weight": 800,
"steps": 4,
"isRunning": false,
"__v": 0
},
{
"_id": "64229d69c16a99c3bde047d4",
"name": "CotCotCot",
"birthday": "2020-01-01T00:00:00.000Z",
"weight": 1400,
"steps": 3,
"isRunning": false,
"__v": 0
}
]

### Afficher un poulet (GET)

GET /api/chicken/:id

Réponse :
{
"\_id": "64229b0f46d5e195a908580c",
"name": "Biscotte",
"birthday": "2022-01-01T00:00:00.000Z",
"weight": 800,
"steps": 4,
"isRunning": false,
"\_\_v": 0
}

### Créer un poulet (POST)

POST /api/chicken/

(dans le body :
{
"name":"Craquotte",
"birthday":"2023",
"weight":"1200",
"steps":"2"
}
)

Réponse :
{
"message": "Poulet enregistré !"
}

### Modifier un poulet dans son intégralité (PUT)

PUT /api/chicken/:id

(dans le body :
{
"name":"CotCot",
"birthday":"2021",
"weight":"1400",
"steps":"1"
"isRunning":"true"
}
)

Réponse :
{
"message": "Poulet modifié!"
}

### Modifier un poulet sur un champ uniquement (PATCH)

PATCH /api/chicken/:id

(dans le body :
{
"birthday":"2020"
}
)

Réponse :
{
"message": "Poulet modifié!"
}

### Supprimer un poulet (DELETE)

DELETE /api/chicken/:id

Réponse :
{
"message": "Poulet supprimé!"
}

### Augmenter la variable Steps de 1 (POST)

POST /api/chicken/:id/run

Réponse :
{
"message": "Steps augmenté de 1"
}
