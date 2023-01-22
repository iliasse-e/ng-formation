# NgFormation

But de cette application est de revoir les bases d'Angular

## Branche Observer

### Qu’est que la programmation réactive ?

La programmation réactive est un paradigme de programmation qui traite des flux de données, appelés Observables comme ses unités de base.

Qu’est-ce qu’un flux ? Pensez au streaming musique vidéo : vous n’avez pas besoin que toute la vidéo soit téléchargée pour la lire.

Un flux est une séquence de données disponible au cours du temps. 


### Modèle de l'itérateur vs modèle Observer

La différence entre les deux modèles, dans le premier, on va devoir parcourir index par index un tableau fini.

Mais Comment agir immédiatement sur des données qui arrivent au cours du temps ? C’est l’objectif de la programmation réactive.

Dans le second cas, le modèle de l'Observer, on ouvre un flux de données (entre l'Observer et l'Observable) 

dans lequel on envoie un ensemble de données, traitées au fur et à mesure.

### Les notions :

- Observer & Observable

- suscribe() & unsuscribe()

- next, complete, error

- patron de conception Observer
