import {useEffect, useState} from "react";
export const useRecursos = () => {

    const [recursos, setRecursos] = useState([]);

    useEffect(() => {

        setTimeout(() => {
            setRecursos([
                {id: "C1", name: "Curso de Lactancia Materna 101", description: "Introducción a la lactancia materna, técnicas de amamantamiento y resolución de problemas comunes.", price: "50", imagen:"lactancia-1.jpg", icono:"lactancia-1.png"},
                {id: "C2", name: "Curso Avanzado de Extracción de Leche Materna", description: "Técnicas avanzadas para la extracción y almacenamiento de leche materna.", price: "80", imagen:"leche-i-1.png", icono:"leche-1.png"},
                {id: "C3", name: "Curso de Rutinas de Sueño Infantil", description: "Cómo establecer rutinas de sueño saludables para bebés y niños pequeños.", price: "90", imagen:"sueno-1.jpg", icono:"sueno-1.png"},
                {id: "C4", name: "Curso de Sueño Infantil y Lactancia Materna", description: "Relación entre la lactancia materna y los patrones de sueño del bebé", price: "55", imagen:"sueno-i-2.png", icono:"sueno-2.png"},
                {id: "C5", name: "Curso de Destete Progresivo", description: "Estrategias para el proceso de destete gradual.", price: "70", imagen:"destete-1.jpg", icono:"destete-1.png"},
                {id: "C6", name: "Curso de Psicología del Destete", description: "Aspectos emocionales del destete para madre e hijo.", price: "85", imagen:"destete-2.jpg", icono:"destete-2.png"},
                {id: "C7", name: "Curso sobre Donación de Leche Materna", description: "Cómo donar leche materna y su impacto en la comunidad.", price: "75", imagen:"leche-i-2.png", icono:"leche-2.png"},
                {id: "C8", name: "Curso Avanzado de Conservación de Leche Materna", description: "Técnicas de conservación y transporte de leche materna.", price: "90", imagen:"leche-i-3.png", icono:"leche-3.png"},
                {id: "C9", name: "Curso Básico de Porteo Ergonómico", description: "Introducción a los diferentes tipos de portabebés y su uso adecuado.", price: "60", imagen:"porteo-i-1.png", icono:"porteo-1.png"},
                {id: "C10",name: "Curso de Porteo y Vínculo Afectivo", description: "Cómo el porteo fortalece el vínculo entre padres e hijos.", price: "70", imagen:"porteo-i-2.png", icono:"porteo-2.png"},
                {id: "S1", name: "Seminario sobre Problemas de Lactancia", description: "Aborda dificultades comunes y soluciones para problemas en la lactancia.", price: "70", imagen:"lactancia-2.jpg", icono:"lactancia-2.png"},
                {id: "S2", name: "Seminario sobre Terrores Nocturnos y Pesadillas en Niños", description: "Entender y manejar los terrores nocturnos y pesadillas en la infancia.", price: "75", imagen:"sueno-i-3.png", icono:"sueno-3.png"},
                {id: "S3", name: "Seminario sobre Cómo Abordar el Fin de la Lactancia", description: "Consejos y apoyo para el final de la lactancia materna.", price: "60", imagen:"destete-i-3.png", icono:"destete-3.png"},
                {id: "S4", name: "Seminario sobre Importancia de los Bancos de Leche", description: "Rol de los bancos de leche en la salud materna e infantil.", price: "55", imagen:"leche-i-4.png", icono:"leche-4.png"},
                {id: "S5", name: "Seminario de Técnicas Avanzadas de Porteo", description: "Uso avanzado de portabebés para diferentes situaciones.", price: "80", imagen:"porteo-i-3.png", icono:"porteo-3.png"},
                {id: "S6", name: "Seminario de Lactancia Materna Exclusiva", description: "Este seminario aborda los beneficios, técnicas y desafíos de la lactancia materna exclusiva durante los primeros seis meses de vida del bebé. ", price: "80", imagen:"lactancia-3.jpg", icono:"lactancia-3.png"},
                {id: "S7", name: "Seminario de Sueño Infantil: Estrategias para una Rutina Nocturna Tranquila", description: "Enfocado en padres que buscan técnicas y consejos para establecer rutinas nocturnas que fomenten un sueño saludable en bebés y niños pequeños. ", price: "90", imagen:"sueno-i-4.png", icono:"sueno-4.png"},
                {id: "S8", name: "Seminario de Destete: Transición Nutritiva para el Bebé", description: "Este seminario se centra en el proceso de destete, ofreciendo orientación sobre la introducción de alimentos sólidos y la transición de la lactancia materna o fórmula a una dieta variada y nutritiva para el bebé.", price: "75", imagen:"destete-i-5.png", icono:"destete-5.png"},
                {id: "S9", name: "Seminario sobre Bancos de Leche: Donación y Apoyo Comunitario", description: " Explora el funcionamiento de los bancos de leche, su importancia en la salud materna e infantil, y ofrece información detallada sobre cómo donar leche materna, así como el impacto positivo en la comunidad.", price: "60", imagen:"leche-i-5.png", icono:"leche-5.png"},
                {id: "S10", name: "Seminario de Porteo del Bebé: Beneficios y Técnicas Avanzadas", description: "Enfocado en padres interesados en aprender técnicas avanzadas de porteo para mejorar el vínculo con sus hijos. Explora los beneficios físicos y emocionales del porteo y brinda orientación sobre diferentes tipos de portabebés.", price: "70", imagen:"porteo-4.png", icono:"porteo-4.png"},
                {id: "T1", name: "Taller de Posiciones para Amamantar", description: "Aprende distintas posiciones cómodas y efectivas para amamantar.", price: "30", imagen:"lactancia-4.jpg", icono:"lactancia-4.png"},
                {id: "T2", name: "Taller de Lactancia y Nutrición Materna", description: "Enfoque en la dieta de la madre y su influencia en la lactancia.", price: "60", imagen:"lactancia-5.png", icono:"lactancia-5.png"},
                {id: "T3", name: "Taller de Estrategias para Dormir al Bebé", description: "Métodos efectivos para ayudar al bebé a conciliar el sueño.", price: "40", imagen:"sueno-i-5.png", icono:"sueno-5.png"},
                {id: "T4", name: "Taller de Creación de un Ambiente de Sueño Adecuado", description: "Cómo configurar el entorno para fomentar un buen descanso.", price: "65", imagen:"sueno-i-6.png", icono:"sueno-6.png"},
                {id: "T5", name: "Taller sobre Alimentación Complementaria", description: "Introducción de alimentos sólidos y transición de la lactancia.", price: "45", imagen:"destete-i-6.png", icono:"destete-6.png"},
                {id: "T6", name: "Taller de Estrategias para un Destete Exitoso", description: "Herramientas para un proceso de destete sin traumas.", price: "55", imagen:"destete-i-7.png", icono:"destete-7.png"},
                {id: "T7", name: "Taller de Extracción de Leche para Donación", description: "Técnicas específicas para la extracción de leche para donación.", price: "40", imagen:"leche-6.png", icono:"leche-6.png"},
                {id: "T8", name: "Taller sobre Gestión de Bancos de Leche", description: "Aspectos logísticos y administrativos de los bancos de leche.", price: "80", imagen:"leche-7.png", icono:"leche-7.png"},
                {id: "T9", name: "Taller sobre Beneficios del Porteo para el Bebé", description: "Impacto positivo del porteo en el desarrollo del bebé.", price: "35", imagen:"porteo-5.png", icono:"porteo-5.png"},
                {id: "T10", name: "Taller de Porteo en Situaciones Especiales", description: "Porteo adaptado para bebés con necesidades especiales.", price: "95", imagen:"porteo-6.png", icono:"porteo-6.png"},
            ]);
        }, 500);
    }, []);

    return recursos;
}