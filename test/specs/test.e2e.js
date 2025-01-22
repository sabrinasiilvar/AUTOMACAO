import { expect, browser, $ } from '@wdio/globals'

describe('Lojinha híbrida', () => {
    it('Realizar login no app', async () => {
        const usuario = 'sabrina2024'
        const senha = 'sabrina2024'
        const txtUsario = $('android=new UiSelector().resourceId("usuario")')
        await txtUsario.setValue(usuario)
        const txtSenha = $('android=new UiSelector().resourceId("senha")')
        await txtSenha.setValue(senha)
        const btnEntrar = $('android=new UiSelector().resourceId("btn-entrar")')
        await btnEntrar.click()

        const lblListaDeProduto = $('android=new UiSelector().packageName("com.example.lojinha").text("Lista de Produtos")')
        const listaDeProduto = await lblListaDeProduto.getText()
        expect(listaDeProduto).toEqual('Lista de Produtos') //espero
        await driver.saveScreenshot('./teste.png')//salvando a screenshot
    })

    it('Criar produto', async () => {
        const txtadicionarProdutoButton = $('android=new UiSelector().text("ADICIONAR PRODUTO")');
        await expect(txtadicionarProdutoButton).toBeDisplayed();
        const textoBotao = await txtadicionarProdutoButton.getText(); 
        await txtadicionarProdutoButton.click();
        const txtNomeProduto = $('android=new UiSelector().resourceId("produtonome")');
        await txtNomeProduto.setValue("Azul")
        const nomeProduto = await txtNomeProduto.getText();
        await expect(nomeProduto).toEqual("Azul"); 
        const txtValorProduto = $('android=new UiSelector().resourceId("produtovalor")');
        await txtValorProduto.setValue(50)
        const valorProdutoValor = await txtValorProduto.getText();
        await expect(valorProdutoValor).toEqual("50"); 
        const txtCoresProduto = $('android=new UiSelector().resourceId("produtocores")');
        await txtCoresProduto.setValue("Rosa")
        const coresProdutoValor = await txtCoresProduto.getText();
        await expect(coresProdutoValor).toEqual("Rosa");
        const btnSalvarProduto  = $('android=new UiSelector().resourceId("btn-salvar")');
        await btnSalvarProduto.click()
    })


     it('Adicionar Componente ao produto', async () => {
        const txtAdicionarComponente = await $('android=new UiSelector().text("ADICIONAR COMPONENTE")');
        await expect(txtAdicionarComponente).toBeDisplayed();
        const textoBotaoAdicionar = await txtAdicionarComponente.getText();
        expect(textoBotaoAdicionar).toEqual('ADICIONAR COMPONENTE');
        await txtAdicionarComponente.click();
        const txtNome = $('android=new UiSelector().resourceId("componentenomeadicionar")');
        await txtNome.setValue("verde")
        const nomeComponenteTexto = await txtNome.getText();
        expect(nomeComponenteTexto.trim()).toEqual('verde');
        const txTQuantidade = $('android=new UiSelector().resourceId("componentequantidadeadicionar")');
        await txTQuantidade.setValue(10)
        const quantidadeTexto = await txTQuantidade.getText();
        expect(quantidadeTexto.trim()).toEqual('10');
        const btnSalvarComponente  = $('android=new UiSelector().text("SALVAR COMPONENTE")');
        await expect(btnSalvarComponente).toBeDisplayed();
        const textoBotaoSalvar = await btnSalvarComponente.getText();
        expect(textoBotaoSalvar.trim()).toEqual('SALVAR COMPONENTE');
        await btnSalvarComponente.click()
    })
})
