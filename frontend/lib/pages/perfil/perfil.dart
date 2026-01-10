import 'package:flutter/material.dart';
import '../../components/bottom_nav.dart';

class Perfil extends StatefulWidget {
  const Perfil({super.key});

  @override
  State<Perfil> createState() => _PerfilState();
}

class _PerfilState extends State<Perfil> {
  @override
  Widget build(BuildContext context) {
    return Column(children: [Text("Perfil")]);
  }
}
