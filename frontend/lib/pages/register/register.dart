import 'package:flutter/material.dart';

import 'package:frontend/services/auth.dart';

class Register extends StatelessWidget {
  Register({super.key});
  final Auth auth = Auth();

  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _phoneController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();

  Future<void> registerUser() async {
    String status = await auth.registerCustomer(
      _nameController.text,
      _emailController.text,
      _passwordController.text,
      _phoneController.text,
      "No notes",
    );
    debugPrint('Registration status: $status');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Register')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: _nameController,
              decoration: const InputDecoration(labelText: 'Nome'),
            ),
            TextField(
              controller: _emailController,
              decoration: const InputDecoration(labelText: 'Email'),
            ),
            TextField(
              controller: _phoneController,
              decoration: const InputDecoration(labelText: 'Telefone'),
            ),
            TextField(
              controller: _passwordController,
              decoration: const InputDecoration(labelText: 'Senha'),
            ),
            ElevatedButton(
              onPressed: () async {
                await registerUser();
              },
              child: const Text('Resgistrar Cliente'),
            ),
          ],
        ),
      ),
    );
  }
}
