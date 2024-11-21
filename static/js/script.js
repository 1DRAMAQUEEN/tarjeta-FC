// Datos para las tarjetas
const tarjetas = [
    { imagen: "img1.png", frase: "1Cierra los ojos o déjalos entreabiertos. Imagina un lugar seguro y cómodo, como una habitación, una cabaña en el bosque o un mundo mágico con dragones que te protegen. Usa tus sentidos: observa los detalles, escucha los sonidos o el silencio, y siente la calma. Quédate ahí el tiempo que necesites para relajarte." },
    { imagen: "img2.jpg", frase: "2Tienes que tomar aire por 4 segundos por la nariz, luego retener el aire po 7 segundos y finalmente exhalar por 8 segundos por la boca ruidosamente. Haz este ejercicio 4 veces seguidas." },
    { imagen: "img3.png", frase: "3Toma cualquier objeto en tus manos que tengas. Explora el objeto con las manos y los dedos, siente la(s) forma(s), textura(s) y temperatura del objeto. Esto se puede hacer en combinación con la visión, o con los ojos cerrados, centrándose exclusivamente en el tacto." },
    { imagen: "img4.png", frase: "4 Da un paseo alrededor de la sala. Presta atención a la sensación de tus pies en contacto con el suelo. Deja ir los pensamientos, emociones, y otras distracciones y simplemente camina, como si ser consciente de cada paso fuera de vital importancia. Puedes también jugar a evitar las líneas en el suelo (o pisar sobre ellas) o contar pasos entre objetos fijos como mesas y sillas." },
    { imagen: "img5.png", frase: "5Une tus manos formando una mariposa y coloca los dedos debajo de tu clavícula. Cierra los ojos y respira tranquila y profundamente. Da toques suaves y rítmicos por 1 a 3 minutos. Observa lo que sientes sin intentar cambiarlo o juzgarlo. Continúa hasta que te sientas más calmado. Respira profundo y agradece por aprender esta técnica." },
    { imagen: "img6.png", frase: "6Encuentra algo en la habitación en lo que enfocarte y usa ese objeto para aterrizarte mientras respiras. Fija tu mirada en el objeto escogido, quedándote con él mientras respires en tiempos de 3 en 3. Si te distraes, simplemente vuelve al objeto de enfoque." },
    { imagen: "img7.png", frase: "7Siéntate cómodamente y recuerda que estás vivo. Respira el aire, observa tu alrededor, escucha los sonidos y siente tu cuerpo, como la conexión con el asiento o la temperatura. Inhala por la nariz y exhala por la boca. Para calmarte y concentrarte más, puedes usar un mantra en silencio:dentro al inhalar y fuera al exhalar. Solo necesitas estar aquí, en este momento." },
    { imagen: "img8.png", frase: "8Inhala por la nariz y exhala por la boca. Elige dos colores, uno para inhalar y otro para exhalar. El azul puede ser bueno para la inhalación, ya que el aire entra frío, y el rojo para la exhalación, por el aire caliente que sale. Pero puedes elegir los colores que prefieras. Cierra los ojos y asocia cada color con tu respiración." },
    { imagen: "img9.png", frase: "15Recuerda un evento positivo de tu vida y usa tu imaginación para transportarte a ese tiempo y lugar. Reprodúcelo en tu mente como si fuera una película, y sintoniza tus sentidos para entrar completamente en la memoria. Observa qué emociones surgen a medida que te sumerges en la experiencia. Deja que este recuerdo positivo tenga un impacto en ti" },
    { imagen: "img10.png", frase: "14Siéntate en una silla y respira profundamente. Mientras sigues respirando, comienza a sonreír suavemente. Relaja tu rostro y mantén una expresión tranquila. Observa si tus emociones cambian, ya que tu rostro envía señales positivas a tu cerebro. Recuerda, este momento puede ser ligero, aunque la vida a veces no lo sea." },
    { imagen: "img11.png", frase: "11Cierra los ojos o déjalos entreabiertos. Imagina un lugar seguro y cómodo: una habitación, una cabaña en el bosque o un mundo mágico con dragones que te cuidan. Observa los detalles, escucha los sonidos o el silencio, y siente la calma. Vuelve a este lugar cuando necesites relajarte." },
    { imagen: "img12.png", frase: "12 Observa y describe tu cuerpo de arriba a abajo, notando cualquier tensión o incomodidad. Deja ir cualquier juicio y respira profundamente en esas áreas. Siente cómo cambia la tensión mientras sigues respirando. También observa las partes de tu cuerpo que se sienten relajadas y respira en ellas." },
];

// Contenedor de tarjetas
const contenedor = document.getElementById("card-container");

// Generar tarjetas dinámicamente
tarjetas.forEach((tarjeta) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front">
                <img src="${tarjeta.imagen}" alt="Imagen de tarjeta">
            </div>
            <div class="card-back">
                <p>${tarjeta.frase}</p>
            </div>
        </div>
    `;

    contenedor.appendChild(card);
});
