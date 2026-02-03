# 🛠️ OpenWebUI Microsoft Group Resolver

Script para **Tampermonkey** desenvolvido para otimizar a interface administrativa de instâncias do Open WebUI. Ele converte identificadores complexos (IDs/Hashes) de Grupos da Microsoft em nomes amigáveis e legíveis.

## 🌟 Funcionalidades
- **Mapeamento de IDs:** Converte automaticamente Hashes alfanuméricos em nomes definidos por você.
- **Suporte a Modais:** Algoritmo de busca profunda que funciona inclusive em janelas flutuantes de Controle de Acesso e Permissões.
- **Identificação Visual:** Os itens resolvidos são destacados em negrito e com cor diferenciada para facilitar a conferência rápida.

## 🚀 Como Instalar

1.  Tenha a extensão **Tampermonkey** instalada em seu navegador.
2.  Crie um novo script no painel de controle da extensão.
3.  Copie o conteúdo do arquivo `openwebui-microsoftgroup-resolver.user.js` deste repositório e cole no editor.
4.  Salve (Ctrl+S) e acesse sua plataforma.

## 📝 Personalização

Como este é um script focado em flexibilidade para o usuário, você deve gerenciar sua própria lista de tradução. Localize o seguinte bloco no início do código para editar:

```javascript
const mapaDeGrupos = {
    "ID-DA-MICROSOFT-1": "NOME-AMIGAVEL-1",
    "ID-DA-MICROSOFT-2": "NOME-AMIGAVEL-2",
};
