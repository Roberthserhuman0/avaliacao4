let slides = [];
function cadastrar(slides) {
    let slide = controlar_cadastro()
    slides.push(slide)
}
function controlar_cadastro() {
    let imagem = document.getElementById("imagem")
    let descricao = document.getElementById("descricao")
    let slide  = {
        imagem: imagem,
        descricao: descricao
    }
    return slide
}
function atualizar(slides) {
    id = 0
    let section = document.querySelector('#slides')
    section.innerHTML ='';
    for (let slide of slides) {
        let artigos = document.createElement('article')
        let imagem = document.createElement('img')
        let descricao = document.createElement('p')
        imagem.innerHTML = <img src="slide.imagem"></img>
        descricao.innerText = slide.descricao
        artigos.appendChild(descricao)
        artigos.appendChild(imagem)
        section.appendChild(artigos)
        id++;
    }
    document.getElementById('slideTotal').innerHTML=`/${id}`
}
class sucesso{

}
class erro{

}