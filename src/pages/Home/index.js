import React from 'react'
import { Helmet } from 'react-helmet-async'
import styles from 'styles.module.css'

function Home() {
  return (
    <>
      <Helmet>
        <title>Home | EETP N° 477</title>
        <meta
          name="description"
          content='Escuela de Educación Técnico Profesional N°477 "Combate de San Lorenzo". Avenida San Martín 3575, San Lorenzo, Santa Fe, Argentina. Ofrece títulos en: Técnico Electromecánico, Técnico Electrónico y Técnico en Energías Renovables.'
        />

        <meta property="og:title" content="Home | EETP N° 477" />
        <meta
          property="og:description"
          content='Escuela de Educación Técnico Profesional N°477 "Combate de San Lorenzo". Avenida San Martín 3575, San Lorenzo, Santa Fe, Argentina. Ofrece títulos en: Técnico Electromecánico, Técnico Electrónico y Técnico en Energías Renovables.'
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="./logo310.png" />
      </Helmet>
      <h1 className={styles.title}>
        Escuela de Educación Técnico Profesional Nº 477
      </h1>
      <p className={styles.p}>
        Aquí podrán leer testimonios de estudiantes avanzados, de profesionales,
        y de mujeres en ciencia y tecnología. También aprenderán datos sobre las
        escuelas técnicas en todo el país y el tipo de formación que ofrecen.
        Porque la Técnica requiere de pasión, voluntad y dedicación, incluimos
        algunos consejos sobre cómo prepararse, cómo organizar el tiempo tanto
        en materias teóricas como prácticas, cómo aprovechar los talleres, y
        cómo pedir ayuda cuando algo les cueste. Creemos que esta información,
        junto con las clases que sus profes les están proponiendo, les ayudarán
        a continuar.{' '}
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://drive.google.com/file/d/1pQzVE4Pt4UHTO9S_k6FkYhOPjewUNExI/view"
        >
          Más información
        </a>
      </p>
    </>
  )
}

export default Home
