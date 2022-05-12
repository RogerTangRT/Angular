# TUTORIAL

## 1 Angular Instalando o Angular CLI e criando o primeiro projeto #01

link vídeo: https://www.youtube.com/watch?v=xqWovo6Enq0

###Instalar o Angular

Para instalar o Angular
https://angular.io/cli

O parâmetro -g é para instalar globalmente e funcionar em todos os dietórios

```console
npm install -g @angular/cli
```

Para visualizar o help do angular e ver se está funcionado digite:

```console
ng help
```

Caso apareça mensagem de erro negando

```console
"... não pode ser carregado porque a execução de scripts foi desabilitada neste sistema. Para obter mais informações, consulte about_Execution_Policies e..."
```

Execute o seguinte comando:

```console
Set-ExecutionPolicy -ExecutionPolicy Bypass
Set-ExecutionPolicy -Scope CurrentUser
```

### Criando projeto hcode

```console
ng new hcode
```

Seleciona Y e o tipo de CSS como SCSS

Para iniciar o projeto. O parâmetro --open abre o chome automaticamene

```console
cd hcode
ng serve --open
```

## 2 Angular Estrutura do Projeto Netflix Clone #02

link vídeo:https://www.youtube.com/watch?v=tJBzKgh-qGM

###Criando projeto netflix

```console
ng new netflix
```

Para iniciar o projeto. O parâmetro --open abre o chome automaticamene

```console
cd netflix
ng serve --open
```

## 3 Angular Básico de Template, IF e FOR #03

link vídeo:https://www.youtube.com/watch?v=DC9EIo_U3mo

Listar Carros

## 4 Angular Componentes da Tela Principal do Netflix Clone #04

link vídeo:https://www.youtube.com/watch?v=-LwGgIOEvCM

Clonar repositório: https://github.com/hcodebr/netflix-layout-clone

### Instalar o Bootstrap

```console
npm install bootstrap
```

Apontar o arquivo do bootstrap no Css

### Instalar componente FullBanner

Na pasta netflix
Para criar o componente FullBanner na pasta shared

```console
ng generate component shared\FullBanner
```

### Instalar componente ListTitles

Na pasta netflix
Para criar o componente ListTitles na pasta shared.
É possível substituir generate por g e component por c

```console
ng g c shared\ListTitles
```

### Instalar componente Footer

Na pasta netflix
Para criar o componente Footer na pasta shared.
É possível substituir generate por g e component por c

```console
ng g c shared\Footer
```
