# Docker de Encuestas UAMI

Para usar este repo, considera tener instalado: `git`, `docker` y `docker-compose`.

Este repositorio se encarga de integrar el Backend y Frontend en una sola aplicación que puede ser instalada fácilmente usando `docker-compose`.

En este repositorio se tienen cómo submódulos de git (más info en [Git Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules)) ambos repositorios.
Esto quiere decir, que los cambios en esos dos repositorios se ven reflajados automáticamente en este repositorio, todo manejado por git.
Por covención, se establece que sólo se pueden usar las ramas *main* en los dos repositorios.
Esto para asegurar que en ambos repositorios siempre se tenga una versión estable y funcional de la aplicación.

Si se acaba de clonar el repositorio, ejecutar `git submodule update --init --recursive` para poder decirle a git que deseas usar los submódulos (por defecto, se copian como un directorio que no tiene git).

Para saber si hay nuevos cambios en alguno de los repositorios que están cómo submódulos debemos ejecutar el comando `git fetch`.

Para actualizar los repositorios:

```
git submodule update --recursive --remote
```

También, se puede ingrsar al directorio dentro de este repositorio y hacer cambios: como pulls o cambiar a cierta rama y git detectará estos cambios para poder meterlos a un nuevo commit.

Esto descargará la versión más reciente de todos los repositorios que están como submódulos.
Después, podemos comenzar a hacer el docker con `docker-compose`:

```
docker compose up -d
```

Este comando se encarga de hacer las images de cada repositorio y luego conectarlos en un sólo contenedor.
Para actualizarlo, debemos detener el container con `docker compose down -d`.
Actualizamos los repositorios y volvemos a levantar el contenedor con `docker compose up -d`.

## TODO Actualizar un sólo servicio (submódulo)

Si sólo cambió uno de los componentes del contenedor, podemos hacer el build de sólo esa parte:

```
docker compose build <service>
```

En lugar de `<service>` ponemos el nombre del servicio (que es lo mismo un `submódulo`).
Puede ser 'back' o 'front', luego volvemos a correr ese servicio.

```
docker compose up --no-deps -d <service>
```

## TODO Backup de los datos

https://docs.docker.com/storage/volumes/#back-up-restore-or-migrate-data-volumes
