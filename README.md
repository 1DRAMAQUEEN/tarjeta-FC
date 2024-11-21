# Mindfulness Cards

Este es un proyecto web simple que muestra las tarjetas con los beneficios de la meditación y mindfulness. La página utiliza **Flask** como backend para servir el contenido estático y dinámico, y está diseñada con **Bootstrap** para una apariencia moderna y responsiva.

## Descripción

El proyecto muestra tarjetas con información sobre los beneficios de la práctica de mindfulness en tres áreas:
- Físico
- Mental
- Espiritual

Cada tarjeta describe cómo el mindfulness impacta estas áreas en la vida cotidiana. El sitio está diseñado para ser fácil de navegar, accesible desde dispositivos móviles y de escritorio.


## Pasos para ejecutar el proyecto

### 1. Clonar el repositorio

Clona el repositorio:

```bash
git clone https://github.com/tu_usuario/mindfulness-cards.git
cd mindfulness-cards

## Create virtualenv and activate


```bash
python3 -m venv .venv
```

## Activate virtual env

```bash
source .venv/bin/activate
```

## Install (para gestionar dependencias)

pip install -r requirements.txt

## Create .env file with the following 

FLASK_APP=app.py
FLASK_DEBUG=True


## Run (para ejecutar el servidor web)
```bash
flask run  
```
## If require server to be publicly accessible  

```bash
flask run --host=0.0.0.0
```
## Browse

Navigate to: http://localhost:5000/

