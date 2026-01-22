class Perfil {
  String _name;
  String _email;
  String _role;

  Perfil(this._name, this._email, this._role);

  factory Perfil.fromJson(Map<String, dynamic> json) {
    return Perfil(
      json['name'],
      json['email'],
      json['role']?["name"] ?? "CUSTOMER",
    );
  }
}
