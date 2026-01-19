import 'package:flutter/material.dart';

import 'package:frontend/repository/estabelecimento.dart';

class EstabelecimentoPage extends StatelessWidget {
  const EstabelecimentoPage({super.key});

  @override
  Widget build(BuildContext context) {
    final args =
        ModalRoute.of(context)!.settings.arguments
            as Map<String, Estabelecimento>;
    final estabelecimento = args['estabelecimento'];

    return Scaffold(
      appBar: AppBar(title: Text(estabelecimento!.getName())),
      body: Text("Isso é um estabelecimento"),
    );
  }
}
