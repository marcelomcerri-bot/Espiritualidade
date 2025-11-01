import ReferenceItem from '../ReferenceItem'

export default function ReferenceItemExample() {
  return (
    <div className="p-8 max-w-3xl space-y-4">
      <ReferenceItem
        type="Artigo"
        citation="FABRI, J. M. G. et al. Espiritualidade como recurso terapêutico no ambulatório de cardiologia. Revista Enfermagem UERJ, Rio de Janeiro, v. 30, n. 1, p. e62722, 2022. DOI: https://doi.org/10.12957/reuerj.2022.62722."
        url="https://www.e-publicacoes.uerj.br/index.php/enfermagemuerj/article/view/62722"
      />
      <ReferenceItem
        type="Livro"
        citation="KOENIG, H. G. Spirituality in Patient Care: Why, How, When, and What. 3. ed. Philadelphia: Templeton Press, 2013."
      />
    </div>
  )
}
