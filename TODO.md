# Plan : Déplacer les satellites vers l'arrière-plan

## Objectif
Rendre les satellites plus discrets et les placer définitivement en arrière-plan du site web

## Analyse du code actuel
- Les satellites sont dans `components/earth-satellite-bg.tsx`
- La Terre est positionnée à droite (75% de la largeur)
- Les satellites ont une opacité variable (0.4 quand derrière, 1.0 quand devant)
- Le z-index actuel est 1 (déjà en arrière-plan mais peut être amélioré)

## Plan d'action

### 1. Réduire la visibilité des satellites
- Réduire l'opacité générale des satellites
- Diminuer la taille des satellites
- Réduire l'intensité des effets lumineux (shadow blur)

### 2. Ajuster la position pour vraiment être en arrière-plan
- Réduire le z-index si nécessaire
- S'assurer que les satellites ne chevauchent pas le contenu principal

### 3. Optimiser l'animation pour plus de discrétion
- Rendre les mouvements plus subtils
- Réduire la vitesse d'animation

### 4. Tester les changements
- Vérifier que les satellites restent visibles mais discrets
- S'assurer qu'ils ne perturbent pas la lisibilité du contenu

## Fichiers à modifier
- `components/earth-satellite-bg.tsx` : Modifications principales
- `app/page.tsx` : Ajustement du z-index si nécessaire
