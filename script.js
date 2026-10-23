const emotions = [
  {
    name:"Miedo / Ansiedad", icon:"😰", bg:"#eee7f8",
    concept:"El miedo aparece cuando percibimos una amenaza o peligro. La ansiedad puede aparecer cuando nos preocupamos por algo que podría ocurrir, incluso antes de que suceda.",
    signals:"Puede sentirse como preocupación, tensión, pensamientos repetitivos, dificultad para relajarse o sensación de estar en alerta.",
    action:"Haz una pausa, respira lentamente, identifica qué te preocupa y, si la preocupación continúa interfiriendo con tu vida, habla con una persona de confianza o un profesional."
  },
  {
    name:"Ira / Frustración", icon:"😤", bg:"#f8e4e0",
    concept:"La ira puede aparecer cuando sentimos que algo es injusto, nos lastima o no sale como esperábamos. La frustración suele aparecer cuando encontramos obstáculos para conseguir algo.",
    signals:"Puede sentirse como tensión, irritación, ganas de discutir, impaciencia o dificultad para pensar con calma.",
    action:"Antes de reaccionar, aléjate un momento si puedes, respira, identifica qué necesitas y retoma la conversación cuando estés más tranquilo/a."
  },
  {
    name:"Tristeza", icon:"😔", bg:"#e5edf8",
    concept:"La tristeza es una emoción que puede aparecer ante pérdidas, decepciones, cambios o situaciones que nos duelen.",
    signals:"Puede aparecer como ganas de llorar, poca energía, aislamiento o falta de interés en algunas actividades.",
    action:"Permítete sentir, mantén contacto con personas de confianza y busca actividades que te hagan bien. Si dura mucho o afecta tu vida diaria, pide apoyo."
  },
  {
    name:"Asco / Rechazo social", icon:"🙅🏻‍♀️", bg:"#e5f1e8",
    concept:"El asco es una reacción de rechazo. En el ámbito social podemos sentir rechazo, incomodidad o necesidad de alejarnos de una persona o situación.",
    signals:"Puede aparecer cuando algo nos incomoda, nos hace sentir inseguros o sentimos que no pertenecemos a un grupo.",
    action:"Reconoce tus límites y recuerda que no tienes que aceptar situaciones que te hagan daño. Busca relaciones donde exista respeto."
  },
  {
    name:"Sorpresa / Incertidumbre", icon:"😯", bg:"#f8f0d9",
    concept:"La sorpresa aparece ante algo inesperado. La incertidumbre surge cuando no sabemos qué ocurrirá o no tenemos toda la información.",
    signals:"Puede sentirse como confusión, nervios, curiosidad o necesidad de saber qué pasará.",
    action:"Concéntrate en lo que sí puedes controlar, evita adelantarte a todas las posibilidades y busca información o apoyo cuando lo necesites."
  },
  {
    name:"Alegría", icon:"😊", bg:"#f8e7b7",
    concept:"La alegría aparece cuando vivimos experiencias agradables, alcanzamos algo importante o compartimos momentos significativos con otras personas.",
    signals:"Puede sentirse como entusiasmo, tranquilidad, energía, ganas de compartir o satisfacción.",
    action:"Disfrútala y compártela de manera saludable. Reconocer los momentos positivos también forma parte del cuidado emocional."
  }
];

const situations = [
  {
    title:"Problemas familiares", icon:"🏠",
    questions:[
      ["closed","¿Cómo te sientes principalmente cuando existe un conflicto familiar?",["Triste o preocupado/a","Enojado/a o frustrado/a","Confundido/a o sin saber qué hacer"] ],
      ["open","¿Qué es lo que más te preocupa de esta situación?"],
      ["closed","¿Sientes que puedes hablar con alguien de tu familia sobre lo que te pasa?",["Sí, con facilidad","A veces","No"] ],
      ["closed","Cuando hay una discusión, ¿qué sueles hacer?",["Intento hablar con calma","Me alejo y espero","Reacciono en el momento"] ],
      ["open","¿Qué te gustaría que los demás entendieran sobre cómo te sientes?"],
      ["closed","¿Tienes una persona adulta de confianza fuera de casa con quien puedas hablar?",["Sí","Tal vez","No"] ],
      ["open","¿Qué te ayudaría a sentirte un poco más tranquilo/a?"],
      ["closed","¿Has intentado escribir o expresar tus sentimientos de otra manera?",["Sí y me ayuda","Alguna vez","No"] ],
      ["closed","¿Crees que pedir apoyo podría ayudarte?",["Sí","Tal vez","No estoy seguro/a"] ],
      ["open","Si pudieras dar un pequeño paso para cuidar de ti hoy, ¿cuál sería?"]
    ]
  },
  {
    title:"Amistades", icon:"🫂",
    questions:[
      ["closed","¿Qué sientes cuando tienes un problema con un amigo/a?",["Tristeza","Enojo","Preocupación"] ],
      ["open","¿Qué ocurrió o qué situación te hizo sentir así?"],
      ["closed","¿Sientes que puedes hablar honestamente con tus amigos?",["Sí","A veces","No"] ],
      ["closed","Cuando hay un conflicto, ¿qué haces normalmente?",["Intento conversar","Espero a que pase","Me alejo"] ],
      ["open","¿Qué te gustaría poder decirle a esa persona?"],
      ["closed","¿Sientes miedo de quedarte solo/a si pones límites?",["Sí","A veces","No"] ],
      ["closed","¿Consideras importante que una amistad respete tus límites?",["Sí","A veces","No"] ],
      ["open","¿Qué esperas de una amistad saludable?"],
      ["closed","¿Tienes a otra persona de confianza con quien hablar?",["Sí","Tal vez","No"] ],
      ["open","¿Qué podrías hacer hoy para cuidar tu bienestar sin lastimar a nadie?"]
    ]
  },
  {
    title:"Estudios y presión", icon:"📚",
    questions:[
      ["closed","¿Qué sientes cuando tienes demasiadas tareas o exámenes?",["Estrés o ansiedad","Frustración","Desánimo"] ],
      ["open","¿Qué parte de los estudios te está preocupando más?"],
      ["closed","¿Sientes que tienes suficiente tiempo para descansar?",["Sí","A veces","No"] ],
      ["closed","Cuando estás saturado/a, ¿qué haces?",["Organizo mis tareas","Me distraigo y luego continúo","Me bloqueo y no hago nada"] ],
      ["open","¿Qué esperas de ti mismo/a que a veces te genera presión?"],
      ["closed","¿Te comparas con otros estudiantes?",["Frecuentemente","A veces","Casi nunca"] ],
      ["closed","¿Te ayudaría organizar tus actividades en pequeños pasos?",["Sí","Tal vez","No"] ],
      ["open","¿Qué tarea podrías dividir en un paso pequeño para comenzar?"],
      ["closed","¿Tienes alguien a quien pedir orientación académica?",["Sí","A veces","No"] ],
      ["open","¿Qué te gustaría recordarte cuando sientas que no puedes con todo?"]
    ]
  },
  {
    title:"Soledad", icon:"🌙",
    questions:[
      ["closed","Cuando te sientes solo/a, ¿con qué frecuencia ocurre?",["Pocas veces","A veces","Frecuentemente"] ],
      ["open","¿Qué significa para ti sentirte solo/a?"],
      ["closed","¿Tienes alguien con quien hablar cuando lo necesitas?",["Sí","A veces","No"] ],
      ["closed","¿Sueles aislarte cuando estás triste?",["Sí","A veces","No"] ],
      ["open","¿Qué actividad suele hacerte sentir un poco acompañado/a o tranquilo/a?"],
      ["closed","¿Te gustaría fortalecer alguna relación con alguien?",["Sí","Tal vez","No"] ],
      ["closed","¿Te resultaría cómodo pedir compañía?",["Sí","A veces","No"] ],
      ["open","¿A quién podrías escribirle hoy aunque sea para saludar?"],
      ["closed","¿Crees que hablar de la soledad puede ayudar?",["Sí","Tal vez","No"] ],
      ["open","¿Qué pequeño cambio te gustaría intentar esta semana?"]
    ]
  },
  {
    title:"Autoestima", icon:"🪞",
    questions:[
      ["closed","¿Cómo describirías la forma en que te ves a ti mismo/a?",["Positiva","Variable","Muy crítica"] ],
      ["open","¿Qué aspecto de ti mismo/a sueles criticar más?"],
      ["closed","¿Te comparas con otras personas o con lo que ves en redes?",["Frecuentemente","A veces","Casi nunca"] ],
      ["closed","¿Reconoces tus propios logros?",["Sí","A veces","Me cuesta"] ],
      ["open","Escribe una cualidad tuya, aunque ahora te cueste reconocerla."],
      ["closed","¿Te afecta mucho la opinión de los demás?",["Sí","A veces","No mucho"] ],
      ["closed","¿Te gustaría aprender estrategias para fortalecer tu autoestima?",["Sí","Tal vez","No"] ],
      ["open","¿Qué le dirías a un amigo que se habla a sí mismo de una manera muy dura?"],
      ["closed","¿Tienes alguien que te recuerde tus cualidades cuando las olvidas?",["Sí","A veces","No"] ],
      ["open","¿Qué cosa pequeña podrías hacer hoy para tratarte con más amabilidad?"]
    ]
  },
  {
    title:"Conflictos y enojo", icon:"🔥",
    questions:[
      ["closed","Cuando te enojas mucho, ¿qué haces normalmente?",["Me tomo un tiempo","Intento hablar","Reacciono impulsivamente"] ],
      ["open","¿Qué situación suele despertar tu enojo?"],
      ["closed","¿Notas señales físicas cuando estás muy enojado/a?",["Sí","A veces","No"] ],
      ["closed","¿Te resulta difícil controlar lo que dices cuando estás molesto/a?",["Sí","A veces","No"] ],
      ["open","¿Qué te gustaría haber hecho diferente en un conflicto reciente?"],
      ["closed","¿Te ayuda alejarte un momento antes de responder?",["Sí","A veces","No lo he intentado"] ],
      ["closed","¿Puedes pedir disculpas cuando reconoces que reaccionaste mal?",["Sí","A veces","Me cuesta"] ],
      ["open","¿Qué necesitas para poder hablar de un conflicto con más calma?"],
      ["closed","¿Tienes una persona de confianza que pueda orientarte?",["Sí","Tal vez","No"] ],
      ["open","¿Cuál sería un paso saludable para resolver o manejar este conflicto?"]
    ]
  },
  {
    title:"Relaciones de pareja", icon:"💜",
    questions:[
      ["closed","¿Cómo te sientes cuando tienes un conflicto con tu pareja o alguien que te gusta?",["Triste o preocupado/a","Enojado/a","Confundido/a"] ],
      ["open","¿Qué situación te está afectando?"],
      ["closed","¿Sientes que puedes expresar lo que necesitas?",["Sí","A veces","No"] ],
      ["closed","¿La otra persona respeta tus límites?",["Sí","A veces","No"] ],
      ["open","¿Qué límite consideras importante cuidar?"],
      ["closed","¿Sientes presión para hacer algo que no quieres?",["Sí","A veces","No"] ],
      ["closed","¿Tienes alguien de confianza con quien hablar?",["Sí","Tal vez","No"] ],
      ["open","¿Qué esperas de una relación basada en respeto?"],
      ["closed","¿Crees que pedir ayuda sería útil si una relación te está haciendo daño?",["Sí","Tal vez","No"] ],
      ["open","¿Qué decisión podría ayudarte a cuidar tu bienestar?"]
    ]
  },
  {
    title:"Miedo al futuro", icon:"🔮",
    questions:[
      ["closed","¿Con qué frecuencia te preocupa tu futuro?",["Frecuentemente","A veces","Casi nunca"] ],
      ["open","¿Qué parte de tu futuro te genera más incertidumbre?"],
      ["closed","¿Sientes presión por saber ya qué quieres hacer con tu vida?",["Sí","A veces","No"] ],
      ["closed","¿Te comparas con personas que parecen tener todo decidido?",["Sí","A veces","No"] ],
      ["open","¿Qué sueño o meta te gustaría explorar sin presión?"],
      ["closed","¿Te ayudaría hablar con alguien sobre tus opciones?",["Sí","Tal vez","No"] ],
      ["closed","¿Puedes concentrarte en lo que sí puedes hacer hoy?",["Sí","A veces","Me cuesta"] ],
      ["open","¿Cuál es un pequeño paso que podrías dar hacia una meta?"],
      ["closed","¿Crees que cambiar de opinión sobre tu futuro está bien?",["Sí","Tal vez","No"] ],
      ["open","¿Qué te gustaría decirte cuando tengas miedo de no lograrlo?"]
    ]
  },
  {
    title:"Bullying o rechazo", icon:"🛡️",
    questions:[
      ["closed","¿Alguna vez has sentido que te excluyen, insultan o hacen sentir mal intencionalmente?",["Sí","A veces","No"] ],
      ["open","Si quieres contarlo, ¿qué está ocurriendo?"],
      ["closed","¿Te sientes seguro/a en tu colegio o entorno?",["Sí","A veces","No"] ],
      ["closed","¿Has podido contárselo a un adulto de confianza?",["Sí","Todavía no","No tengo a quién"] ],
      ["open","¿Qué necesitarías para sentirte más protegido/a?"],
      ["closed","¿Te preocupa que la situación empeore si pides ayuda?",["Sí","A veces","No"] ],
      ["closed","¿Hay algún docente, familiar u orientador con quien puedas hablar?",["Sí","Tal vez","No"] ],
      ["open","¿Qué te gustaría que los demás entendieran sobre esta situación?"],
      ["closed","¿Consideras que pedir ayuda es una forma de protegerte?",["Sí","Tal vez","No"] ],
      ["open","¿Qué persona segura podrías contactar si vuelve a ocurrir?"]
    ]
  },
  {
    title:"Pérdida o duelo", icon:"🕊️",
    questions:[
      ["closed","¿Cómo te has sentido desde la pérdida o cambio importante?",["Triste o vacío/a","Confundido/a","Variable, algunos días mejor y otros peor"] ],
      ["open","¿Qué es lo que más extrañas o te cuesta aceptar?"],
      ["closed","¿Has podido hablar de lo ocurrido con alguien?",["Sí","A veces","No"] ],
      ["closed","¿Te permites llorar o expresar tu tristeza?",["Sí","A veces","Me cuesta"] ],
      ["open","¿Qué recuerdo o persona te brinda un poco de calma?"],
      ["closed","¿Tienes alguien que pueda acompañarte cuando lo necesites?",["Sí","A veces","No"] ],
      ["closed","¿Te está resultando difícil continuar con tus actividades diarias?",["Mucho","Un poco","No"] ],
      ["open","¿Qué necesitas de las personas que te rodean en este momento?"],
      ["closed","¿Considerarías hablar con un profesional si el dolor se vuelve muy difícil de manejar?",["Sí","Tal vez","No"] ],
      ["open","¿Qué pequeño gesto de cuidado podrías darte hoy?"]
    ]
  }
];

const emotionGrid = document.getElementById("emotionGrid");
const situationGrid = document.getElementById("situationGrid");
const questionnaire = document.getElementById("questionnaire");
const resultBox = document.getElementById("resultBox");
const questionTitle = document.getElementById("questionTitle");
const questionBox = document.getElementById("questionBox");
const progress = document.getElementById("progress");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentSituation = null;
let currentQuestion = 0;
let answers = [];

emotions.forEach((e, i)=>{
  const card = document.createElement("article");
  card.className = "emotion-card";
  card.innerHTML = `<div class="emotion-icon" style="background:${e.bg}">${e.icon}</div>
    <h3>${e.name}</h3><p>${e.concept}</p>`;
  card.addEventListener("click", ()=>{
    const old = document.querySelector(".emotion-detail");
    if(old) old.remove();
    const detail = document.createElement("div");
    detail.className = "emotion-detail show";
    detail.innerHTML = `<h3>${e.icon} ${e.name}</h3>
      <p><strong>¿Qué significa?</strong> ${e.concept}</p>
      <p><strong>¿Cómo puede sentirse?</strong> ${e.signals}</p>
      <p><strong>¿Qué puedo hacer?</strong> ${e.action}</p>`;
    card.parentNode.insertBefore(detail, card.nextSibling);
    detail.scrollIntoView({behavior:"smooth",block:"center"});
  });
  emotionGrid.appendChild(card);
});

situations.forEach((s,i)=>{
  const card = document.createElement("button");
  card.className = "situation-card";
  card.innerHTML = `<span>${s.icon}</span><b>${s.title}</b>`;
  card.addEventListener("click", ()=>openQuestionnaire(i));
  situationGrid.appendChild(card);
});

function openQuestionnaire(index){
  currentSituation = situations[index];
  currentQuestion = 0;
  answers = Array(currentSituation.questions.length).fill("");
  questionTitle.textContent = currentSituation.title;
  resultBox.classList.add("hidden");
  questionnaire.classList.remove("hidden");
  renderQuestion();
  questionnaire.scrollIntoView({behavior:"smooth",block:"center"});
}

function renderQuestion(){
  const q = currentSituation.questions[currentQuestion];
  progress.textContent = `Pregunta ${currentQuestion+1} de ${currentSituation.questions.length}`;
  let html = `<div class="question-card"><h4>${q[1]}</h4>`;
  if(q[0] === "closed"){
    q[2].forEach((option)=>{
      const checked = answers[currentQuestion] === option ? "checked" : "";
      html += `<label><input type="radio" name="answer" value="${option}" ${checked}>${option}</label>`;
    });
  } else {
    html += `<textarea id="openAnswer" placeholder="Escribe solo lo que quieras compartir contigo misma/o...">${answers[currentQuestion]}</textarea>`;
  }
  html += `</div>`;
  questionBox.innerHTML = html;
  questionBox.querySelectorAll("input").forEach(input=>{
    input.addEventListener("change",()=>answers[currentQuestion]=input.value);
  });
  const textarea = document.getElementById("openAnswer");
  if(textarea) textarea.addEventListener("input",()=>answers[currentQuestion]=textarea.value);
  prevBtn.style.visibility = currentQuestion===0 ? "hidden" : "visible";
  nextBtn.textContent = currentQuestion===currentSituation.questions.length-1 ? "Ver reflexión ✨" : "Siguiente →";
}

function saveCurrentAnswer(){
  const q = currentSituation.questions[currentQuestion];
  if(q[0]==="closed"){
    const selected = questionBox.querySelector("input:checked");
    answers[currentQuestion] = selected ? selected.value : "";
  } else {
    const textarea = document.getElementById("openAnswer");
    answers[currentQuestion] = textarea ? textarea.value : "";
  }
}

nextBtn.addEventListener("click",()=>{
  saveCurrentAnswer();
  if(currentQuestion < currentSituation.questions.length-1){
    currentQuestion++;
    renderQuestion();
  } else {
    showResult();
  }
});

prevBtn.addEventListener("click",()=>{
  saveCurrentAnswer();
  if(currentQuestion>0){
    currentQuestion--;
    renderQuestion();
  }
});

document.getElementById("closeQuestionnaire").addEventListener("click",()=>{
  questionnaire.classList.add("hidden");
  resultBox.classList.add("hidden");
});

function showResult(){
  questionnaire.classList.add("hidden");
  let answered = answers.filter(a=>a.trim()).length;
  let title = "Gracias por escucharte. 💗";
  let message = `Has respondido ${answered} de ${answers.length} preguntas. No existe una respuesta perfecta: lo importante es que hayas podido reflexionar sobre lo que estás viviendo.`;
  let guidance = "Puedes elegir una acción pequeña: respirar y hacer una pausa, escribir lo que sientes, hablar con alguien de confianza o buscar orientación.";
  if(currentSituation.title==="Bullying o rechazo"){
    guidance = "Si estás viviendo acoso, amenazas o una situación que te hace sentir inseguro/a, cuéntaselo a un adulto de confianza, docente u orientador. No tienes que resolverlo solo/a.";
  }
  resultBox.innerHTML = `<h3>${title}</h3><p>${message}</p><p><strong>Una idea para ahora:</strong> ${guidance}</p>
  <div class="alert"><strong>Importante:</strong> Si tienes pensamientos de hacerte daño, te has lastimado o estás en peligro, busca ayuda inmediata de un adulto de confianza y de un servicio de salud o emergencias de tu localidad.</div>`;
  resultBox.classList.remove("hidden");
  resultBox.scrollIntoView({behavior:"smooth",block:"center"});
}
