# Documentation API Chicken

Il s'agit d'une API CRUD avec les méthodes GET / POST / PUT / PATCH / DELETE

## Endpoints

### Afficher tous les poulets (GET)

GET /api/chicken/

Réponse :
[
{
"_id": "6422da6cc94687facba5a9da",
"name": "CotCot",
"birthday": "2023-01-01T00:00:00.000Z",
"weight": 1200,
"steps": 2,
"isRunning": false,
"coopId": "6422d953091f39674f59fc8a",
"__v": 0
},
{
"_id": "6422db22c94687facba5a9e6",
"name": "Craquotte",
"birthday": "2023-01-01T00:00:00.000Z",
"weight": 1200,
"steps": 2,
"isRunning": false,
"coopId": "6422d94a091f39674f59fc88",
"__v": 0
},
{
"_id": "6422db2dc94687facba5a9e9",
"name": "Biscotte",
"birthday": "2023-01-01T00:00:00.000Z",
"weight": 1200,
"steps": 2,
"isRunning": false,
"coopId": "6422d94a091f39674f59fc88",
"__v": 0
}
]

### Afficher un poulet (GET)

GET /api/chicken/:id

Réponse :
{
"\_id": "6422db2dc94687facba5a9e9",
"name": "Biscotte",
"birthday": "2023-01-01T00:00:00.000Z",
"weight": 1200,
"steps": 2,
"isRunning": false,
"coopId": "6422d94a091f39674f59fc88",
"\_\_v": 0
}

### Créer un poulet (POST)

POST /api/chicken/

(dans le body :
{
"name":"Craquotte",
"birthday":"2023",
"weight":"1200",
"steps":"2",
"coopId":"6422d94a091f39674f59fc88"
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

### Afficher tous les poulaillers (GET)

GET /api/coop/

Réponse :
[
{
"\_id": "6422d94a091f39674f59fc88",
"name": "Poulailler1",
"capacity": 3,
"chickens": [
"6422db22c94687facba5a9e6",
"6422db2dc94687facba5a9e9"
],
"**v": 0
},
{
"\_id": "6422d953091f39674f59fc8a",
"name": "Poulailler2",
"capacity": 5,
"chickens": [
"6422da6cc94687facba5a9da"
],
"**v": 0
}
]

### Afficher un poulailler (GET)

GET /api/coop/:id

Réponse :
{
"\_id": "6422d953091f39674f59fc8a",
"name": "Poulailler2",
"capacity": 5,
"chickens": [
"6422da6cc94687facba5a9da"
],
"\_\_v": 0
}

### Créer un poulailler (POST)

POST /api/coop/

(dans le body :
{
"name":"Poulailler3",
"capacity":"5",
}
)

Réponse :
{
"message": "Poulailler enregistré !"
}

### Modifier un poulailler dans son intégralité (PUT)

PUT /api/coop/:id

(dans le body :
{
"name":"Poulailler3",
"capacity":"5"
}
)

Réponse :
{
"message": "Poulailler modifié!"
}

### Modifier un poulailler sur un champ uniquement (PATCH)

PATCH /api/coop/:id

(dans le body :
{
"capacity":"6"
}
)

Réponse :
{
"message": "Poulailler modifié!"
}

### Supprimer un poulailler (DELETE)

DELETE /api/coop/:id

Réponse :
{
"message": "Poulailler supprimé!"
}
