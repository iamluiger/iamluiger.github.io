#!/bin/bash
# Script para generar y publicar el sitio con MkDocs

set -e  # Detener si hay algún error

echo "🔨 Generando sitio con MkDocs..."
mkdocs build

echo "📂 Copiando archivos generados a la raíz..."
cp -r site/* .

echo "📝 Verificando cambios en Git..."
git status --short

echo ""
read -p "¿Deseas publicar estos cambios? (s/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Ss]$ ]]
then
    echo "🚀 Publicando cambios..."
    git add -A

    # Pedir mensaje de commit o usar uno por defecto
    read -p "Mensaje de commit (Enter para usar 'Update site'): " commit_msg
    commit_msg=${commit_msg:-"Update site"}

    git commit -m "$commit_msg"
    git push origin master

    echo "✅ ¡Sitio publicado exitosamente!"
else
    echo "❌ Publicación cancelada"
    exit 1
fi
