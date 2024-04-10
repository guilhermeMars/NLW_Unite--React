# NLW Unite
Evento feito com a Rocketseat em uma semana de aprendizado.
Carga horária de 5 horas, dividias em 3 aulas liberadas durante a semana
## Certificado
[Link do Certificado oficial](https://app.rocketseat.com.br/certificates/3533103f-baec-4060-8355-e68a015ee2af)
![Certificado](https://img001.prntscr.com/file/img001/w1ZOs9cPSiGMsJ06qLujCQ.png)
# Minha contribuição
Anotações sobre conceitos. Alguns eu já tinha conecimento prévio, porém preferi anotar pra relembrar e memorizar
## Aula 01
Ctrl + shift + P > Restart TS server
   - Atualiza os erros do TS

```HTML
className="antialiased"
```
- Deixa os textos muito mais bem definidos na página

```HTML
className="flex gap-5"
```
- Utilizar mais pra espaçar elementos dentro do código

```HTML
className="border-white/10"
```
- Utilizar "/" após uma cor adiciona opacidade nela

Lucide
- Boa biblioteca de ícones do React

```HTML
className="size-4"
```
- Coloca um width e heigh com o mesmo valor
Selecionar tag + ctrl + D
- Adiciona um cursor nas outras linhas
- Similar com o alt + click
Selecionar tag ou num + ctrl + shift + L
- Seleciona TODOS os valores do código

```JavaScript
Array.from({ length: 8 }).map((_, chave) => {
```
- Faz uma lista com vários itens, evita ctrl c ctrl v. Cria um Array e percorre ele pelo map e ussa a "chave" no key
inline-flex
- Ainda faz uma flex-box, porém fica com display inline ao invés de block
- Isso ajuda quando precisar que seja afetado por tag's de texto, por exemplo
## Aula 02
```HTML
<NavLink href="/eventos">Eventos</NavLink>
```
- Conteúdo de dentro de um component é o children, sendo acessado por props.children
interface NavLinkProps extends ComponentProps<'a'>{
- Utilizado no typescript
- Faz com que um componente possa extender todas as funções de uma tag HTML
  - Depois é só utilizar spred nas props e as funções padrão serão utilizadas
  - ```HTML
    <a {...props} className='font-medium text-sm'>{props.children}</a>
    ```

```HTML
<button {...props} className='bg-white/10 border border-white/10 rounded-md p-1.5'/>
```
- Não é necessário passar o props.childrens dentro da tag, na desestruturação já pega automático
export function IconButton({transparent, ...props}: IconButtonProps){
- Pega um valor e separa ele do spread
- Nesse caso o "transparent" é customizado

```JavaScript
transparent?: boolean
```
- Interface
- Faz com que não seja um parâmetro obrigatório

```HTML
<IconButton transparent>
```
- Enviar apenas o nome da tag já presume que é true
- Mandar a tag apenas com o `transparent`, o JS já entende que ele é true

Tailwind Merge
- Biblioteca do Tailwind para unir estilização, de dentro do componente, com as de quando ele é instanciado
- Utilizado quando precisa de alguma alteração específica em um componente que já irá ser herdado

Estados no React
- São variáveis que, quando alteradas, renderizam novamente algum componente

Faker.js
- Biblioteca que cria dados fictícios

Date-fns
- Biblioteca que auxilia a formatar datas
