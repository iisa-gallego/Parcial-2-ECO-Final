class libro{
    constructor(libro){
        this.libro = libro;
    }

    render = () => {

        let component = document.createElement('div');
        const database = firebase.database();

        //se crea un contenedor para la pelicula que muestre el nombre y la calificacion que lleva
        let libroCont = document.createElement('div');
        libroCont.className = 'libroCont';
        libroCont.innerHTML = (

            '<p>'+'<h3>'+this.libro.nombre+'</h3>'+this.libro.promedio
            );

        let estrella1 = document.createElement('button');
        estrella1.className = 'estrella1';
        estrella1.innerHTML = (' ⭐ ');

        let estrella2 = document.createElement('button');
        estrella2.className = 'estrella2';
        estrella2.innerHTML = (' ⭐ ');

        let estrella3 = document.createElement('button');
        estrella3.className = 'estrella3';
        estrella3.innerHTML = (' ⭐ ');

        let estrella4 = document.createElement('button');
        estrella4.className = 'estrella4';
        estrella4.innerHTML = (' ⭐ ');

        let estrella5 = document.createElement('button');
        estrella5.className = 'estrella5';
        estrella5.innerHTML = (' ⭐ ');

        component.appendChild(libroCont);
        component.appendChild(estrella1);
        component.appendChild(estrella2);
        component.appendChild(estrella3);
        component.appendChild(estrella4);
        component.appendChild(estrella5);

        
        estrella1.addEventListener('click', () =>{

            //para agregar un voto
            const calificacion = this.libro.calificacion + 1;
            const votos = this.libro.votos + 1;
            //promedio
            const promedio = calificacion/votos;

            database.ref('libros/'+this.libro.nombre+'/nota').set(promedio);
            database.ref('libros/'+this.libro.nombre+'/votos').set(votos);
            database.ref('libros/'+this.libro.nombre+'/calificacion').set(calificacion);
           
        });

        estrella2.addEventListener('click', () =>{

            const calificacion = this.libro.calificacion + 2;
            const votos = this.libro.votos + 1;
            const promedio = calificacion/votos;

            database.ref('libros/'+this.libro.nombre+'/promedio').set(promedio);
            database.ref('libros/'+this.libro.nombre+'/votos').set(votos);
            database.ref('libros/'+this.libro.nombre+'/calificacion').set(calificacion);
           
        });

        estrella3.addEventListener('click', () =>{

            const calificacion = this.libro.calificacion + 3;
            const votos = this.libro.votos + 1;
            const promedio = calificacion/votos;

            database.ref('libros/'+this.libro.nombre+'/promedio').set(promedio);
            database.ref('libros/'+this.libro.nombre+'/votos').set(votos);
            database.ref('libros/'+this.libro.nombre+'/calificacion').set(calificacion);
           
        });

        estrella4.addEventListener('click', () =>{

            const calificacion = this.libro.calificacion + 4;
            const votos = this.libro.votos + 1;
            const promedio = calificacion/votos;

            database.ref('libros/'+this.libro.nombre+'/promedio').set(promedio);
            database.ref('libros/'+this.libro.nombre+'/votos').set(votos);
            database.ref('libros/'+this.libro.nombre+'/calificacion').set(calificacion);
           
        });

        estrella5.addEventListener('click', () =>{

            const calificacion = this.movie.calificacion + 5;
            const votos = this.movie.votos + 1;
            const promedio = calificacion/votos;

            database.ref('libros/'+this.movie.nombre+'/promedio').set(promedio);
            database.ref('libros/'+this.movie.nombre+'/votos').set(votos);
            database.ref('libros/'+this.movie.nombre+'/calificacion').set(calificacion);
           
        });


        return component;

    }
}