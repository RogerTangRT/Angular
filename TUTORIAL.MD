# TUTORIAL

## Instalar o Angular

link vídeo: https://www.youtube.com/watch?v=xqWovo6Enq0

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

## Criando projeto hcode

```console
ng new hcode
```

Seleciona Y e o tipo de CSS como SCSS

Para iniciar o projeto. O parâmetro --open abre o chome automaticamene

```console
cd hcode
ng serve --open
```

## Criando projeto netflix

```console
ng new netflix
```
