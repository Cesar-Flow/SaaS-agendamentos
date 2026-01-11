import 'package:flutter/material.dart';

class Configuracao extends StatefulWidget {
  const Configuracao({super.key});

  @override
  State<Configuracao> createState() => _ConfiguracaoState();
}

class _ConfiguracaoState extends State<Configuracao> {
  @override
  Widget build(BuildContext context) {
    return Column(children: [Text("Configuração")]);
  }
}
