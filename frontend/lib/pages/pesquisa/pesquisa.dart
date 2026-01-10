import 'package:flutter/material.dart';
import '../../components/bottom_nav.dart';

class Pesquisa extends StatefulWidget {
  const Pesquisa({super.key});

  @override
  State<Pesquisa> createState() => _PesquisaState();
}

class _PesquisaState extends State<Pesquisa> {
  @override
  Widget build(BuildContext context) {
    return Column(children: [Text("Pesquisa")]);
  }
}
