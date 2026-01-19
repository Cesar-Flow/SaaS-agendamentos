# Frontend

O frontend é produzido em Flutter.

## Como executar

### Requisitos

- SDK do Flutter instalado e presente no PATH do sistema (https://docs.flutter.dev/get-started/custom).
- Android Studio com pelo menos um _device_ instalado. Eu estou usando o Medium Phone com API 35 "VanillaIceCream"; Android 15.0.

### Comandos em ordem

1. Execute primeiro no terminal: `flutter doctor`. Vai descrever se tem algo faltando ou não funcionando direito. Arrume tudo antes de continuar.
2. Execute o device instalado no Android Studio.
3. Execute no terminal: `flutter pub get`. Instala as dependências.
4. Execute no terminal: `flutter run`. Executa o Flutter. Vai aparecer opções de conexão, escolha o do Android. A primeira vez que executa demora, mas depois fica mais rápido.

## Convenções

Todas as convenções do código vem das convenções oficiais de Dart e Flutter: <https://dart.dev/effective-dart/style>

## Arquitetura

A arquitetura do app é construída usando como base o modelo MVVM descrito pelo próprio site oficial do Flutter: <https://docs.flutter.dev/app-architecture/guide>
![Arquitetura App Flutter](docs/images/modelo%20arquitetura.png)

## Pastas

### pages
> Toda pasta em pages tem dois arquivos: um com o widget e eventos (file.dart), e um com a lógica de manipulação dos eventos (file_model.dart).

### theme
> Todo o estilo está encapsulado nos arquivos dentro da pasta "theme". app_theme.dart é o estilo dos widgets nativos do Flutter, theme_constants.dart são variáveis de estilo gerais do app.
