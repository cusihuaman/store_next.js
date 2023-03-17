import Layout from "@/components/layout"
import style from '../styles/faq.module.css'

const Faq = () => {
  return (
    <Layout>
        <h2>Preguntas frecuentes</h2>
        <div className={style.faq}>
          <h4>Do you ship internationally</h4>
          <p>
          Imaginación y creatividad. La imaginación es nuestra capacidad de producir imágenes mentales, ideas, pensamientos e incluso sentimientos que no existen en la realidad y que no están disponibles a nuestros sentidos. La creatividad es el proceso de transformar la imaginación en realidad.
          </p>
        </div>
    </Layout>
  )
}

export default Faq