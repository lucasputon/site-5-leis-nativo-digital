# 5 Leis do Nativo Digital

Website do projeto **5 Leis do Nativo Digital**, desenvolvido para a disciplina / módulo *Desafios da Profissão*.

🔗 **Acesse o site publicado:** [https://lucasputon.github.io/site-5-leis-nativo-digital/](https://lucasputon.github.io/site-5-leis-nativo-digital/)

---

## 📁 Estrutura de Arquivos

```text
site-5-leis-nativo-digital/
├── assets/             # Arquivos de mídia (imagens, ícones, logos)
│   └── images/
├── css/                # Folhas de estilo
│   └── style.css       # Estilo base e temas
├── js/                 # Scripts JavaScript
│   └── main.js         # Lógica e interatividades
├── index.html          # Documento principal da aplicação
├── .gitignore          # Arquivos e pastas ignorados pelo Git
└── README.md           # Documentação do projeto
```

---

## 🚀 Como Executar Localmente

Como se trata de um projeto estático em HTML, CSS e JavaScript, você pode executá-lo de várias formas simples:

1. **Extensão Live Server (VS Code):**
   - Abra a pasta no VS Code.
   - Clique com o botão direito em `index.html` e selecione **Open with Live Server**.

2. **NPM / NPX:**
   ```bash
   npx serve .
   ```

3. **Python:**
   ```bash
   python -m http.server 8000
   ```
   Acesse no navegador: `http://localhost:8000`

---

## 👥 Colaboração em Equipe

Para colaborar com outros desenvolvedores:

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/lucasputon/site-5-leis-nativo-digital.git
   cd site-5-leis-nativo-digital
   ```

2. **Fluxo recomendado de branches:**
   - Crie uma branch para cada feature ou ajuste:
     ```bash
     git checkout -b feature/nome-da-funcionalidade
     ```
   - Faça as alterações, comite e envie para o GitHub:
     ```bash
     git add .
     git commit -m "feat: descrição da alteração"
     git push origin feature/nome-da-funcionalidade
     ```
   - Abra um **Pull Request (PR)** para revisão e integração na branch `main`.

---

## 🌐 Publicação no GitHub Pages

> **Nota importante:** Se a sua conta do GitHub estiver no plano gratuito (Free), o recurso GitHub Pages só pode ser ativado se o repositório for **público**. Caso o repositório permaneça **privado**, o Pages requer uma assinatura **GitHub Pro** ou plano de organização.

Para habilitar o GitHub Pages:
1. No repositório no GitHub, acesse **Settings** > **Pages**.
2. Em **Build and deployment** > **Source**, selecione **Deploy from a branch**.
3. Selecione a branch `main` e a pasta `/ (root)`.
4. Clique em **Save**. Em instantes, o site estará disponível na web.
