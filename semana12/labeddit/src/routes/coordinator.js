

export const irParaPaginaLogin = (history) => {
    history.push('/')
}

export const irParaPaginaCadastro = (history) => {
    history.push('/cadastro')
}

export const irParaListaPost = (history, id) => {
    history.push(`/lista/post/${id}`)
}

export const irParaPaginaPost = (history) => {
    history.push('/post')
}