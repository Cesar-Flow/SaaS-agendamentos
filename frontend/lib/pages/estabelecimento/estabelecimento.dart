import 'package:flutter/material.dart';
import '../../components/bottom_nav.dart';

class Estabelecimento extends StatefulWidget {
  const Estabelecimento({super.key});

  @override
  State<Estabelecimento> createState() => _EstabelecimentoState();
}

class _EstabelecimentoState extends State<Estabelecimento> {
  @override
  Widget build(BuildContext context) {
    return Column(children: [Text("Estabelecimento")]);
  }
}
