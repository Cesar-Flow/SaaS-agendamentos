import 'package:flutter/material.dart';

class DesagendamentoModal extends StatelessWidget {
  final String itemName;
  final String day;
  final String time;
  final void Function() confirmCallback;

  const DesagendamentoModal({super.key, required this.confirmCallback, required this.itemName, required this.day, required this.time});

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: Text('Desagendamento'),
      content: Column( 
        mainAxisSize: MainAxisSize.min,
        children: [
        Text('Você tem certeza que deseja desagendar no estabelecimento $itemName no dia $day às $time ?'),
        TextField(decoration: InputDecoration(labelText: '(opcional) Motivo do desagendamento')),
      ],),
      actions: [
        TextButton(
          onPressed: () => Navigator.of(context).pop(false),
          child: const Text('Cancelar'),
        ),
        TextButton(
          onPressed: () {
            confirmCallback();
            Navigator.of(context).pop(true);
          },
          child: const Text('Confirmar'),
        ),
      ],
    );
  }
}