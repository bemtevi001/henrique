//Usando querySelector para selecionar os elementos do DOM
const botaoSalvar = document.querySelector('#BotaoSalvar'); // Ou pelo ID/Classe do botão
const campoNome = document.querySelector('#nome'); // Ou pelo ID do campo Nome
const campoEmail = document.querySelector('#email'); // Ou pelo ID do campo Email


//Usando getElementById para selecionar os elementos do DOM
// USA UM OUTRO MÉTODO PARA SELECIONAR OS ELEMENTOS DO DOM
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const botao = document.getElementById('BotaoSalvar');


botaoSalvar.addEventListener('click', () => {
    // 1. Pega os valores digitados pelo usuário
    const nome = campoNome.value;
    const email = campoEmail.value;


    // 2. Define o conteúdo que será escrito no arquivo .txt
    const conteudo = `Nome: ${nome}\nEmail: ${email}`;


    // 3. Cria um Blob (objeto que representa dados brutos) com o texto
    const blob = new Blob([conteudo], { type: 'text/plain;charset=utf-8' });


    // 4. Cria um link temporário na memória para fazer o download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'dados_usuario.txt'; // Nome do arquivo que será baixado


    // 5. Simula o clique no link para iniciar o download e depois o remove
    link.click();
    URL.revokeObjectURL(link.href);
});


