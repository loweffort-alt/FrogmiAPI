#!/bin/bash

echo "Precompilando los assets..."
rails assets:precompile

if [ $? -eq 0 ]; then
    echo "Assets precompilados con éxito. Iniciando el servidor..."
    rails s
else
    echo "La precompilación de assets falló."
    exit 1
fi

