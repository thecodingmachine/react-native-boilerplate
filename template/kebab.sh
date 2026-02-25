#!/bin/bash

# Sécurité : s'assurer que le répertoire de travail est propre
if ! git diff-index --quiet HEAD --; then
    echo "⚠️ Erreur : Tu as des changements non validés (uncommitted)."
    echo "Merci de faire un commit ou un stash avant de lancer ce script."
    exit 1
fi

# Vérification que le dossier src existe
if [ ! -d "src" ]; then
    echo "⚠️ Erreur : Le dossier 'src' est introuvable."
    exit 1
fi

echo "Début de la conversion en kebab-case pour le dossier 'src'..."

# On demande à Git de lister UNIQUEMENT le contenu du dossier src
git ls-files "src" | while read -r file; do

    # Transformation du chemin en kebab-case
    new_file=$(echo "$file" | sed -E 's/([a-z0-9])([A-Z])/\1-\2/g' | tr '[:upper:]' '[:lower:]' | tr ' _' '--' | sed -E 's/-+/-/g')

    # Si le nom doit être modifié
    if [ "$file" != "$new_file" ]; then
        echo "🔄 $file -> $new_file"

        # Créer le dossier parent cible si nécessaire
        mkdir -p "$(dirname "$new_file")" 2>/dev/null

        # Le renommage en deux étapes pour macOS/Git
        git mv "$file" "${file}.tmp-rename"
        git mv "${file}.tmp-rename" "$new_file"
    fi
done

echo "✅ Terminé ! Vérifie le résultat avec 'git status'."