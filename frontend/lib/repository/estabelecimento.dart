import 'package:frontend/components/estabelecimento_card_large.dart';

class Estabelecimento {
  final String name;
  final String type;

  Estabelecimento({required this.name, required this.type});

  EstabelecimentoCardLarge widgetCardLarge() {
    return EstabelecimentoCardLarge(name: name, type: type);
  }
}
