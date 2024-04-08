// Declaração de tipo para a propriedade testeInstance no escopo global
declare global {
    interface Window {
        testeInstance: any;
    }
}


export class MockApi {
    async Teste() {
        const url = 'https://660f44b4356b87a55c510e3f.mockapi.io/schedule'
        try {
            var resposta = await fetch(url);
            if (resposta.ok) {
                var respostaJson = await resposta.json();
                console.log('JSON: ', respostaJson)
            }
        } catch (erro) {
            console.log("Erro: ", erro);
        }
    }
}

// Instanciando a classe e atribuindo-a a uma propriedade global
window.testeInstance = new MockApi();