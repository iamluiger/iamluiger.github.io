#!/bin/bash
# Activa el entorno virtual de Python para este proyecto.
# Uso:  source activate.sh   (o:  . activate.sh)

if [ "${BASH_SOURCE[0]}" = "$0" ]; then
    echo "❌ Este script debe ejecutarse con 'source':"
    echo "   source activate.sh"
    exit 1
fi

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
VENV_DIR="$SCRIPT_DIR/venv"

if [ ! -f "$VENV_DIR/bin/activate" ]; then
    echo "❌ No se encontró el venv en $VENV_DIR"
    echo "   Créalo con:  python3 -m venv venv"
    return 1
fi

# shellcheck disable=SC1091
source "$VENV_DIR/bin/activate"
echo "✅ venv activado:  $(which python)"
echo "   mkdocs:        $(mkdocs --version 2>/dev/null || echo 'no instalado')"
