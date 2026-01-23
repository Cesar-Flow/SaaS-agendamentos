import 'package:flutter/material.dart';

import 'package:frontend/providers/auth_provider.dart';

class Login extends StatelessWidget {
  Login({super.key});

  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();

  void onLogin() async {
    final AuthProvider auth = AuthProvider();
    final response = await auth.login(
      _emailController.text,
      _passwordController.text,
    );
    debugPrint('Login response: $response');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Login')),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(36.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              TextField(
                controller: _emailController,
                decoration: const InputDecoration(labelText: 'Email'),
              ),
              TextField(
                controller: _passwordController,
                decoration: const InputDecoration(labelText: 'Password'),
              ),
              TextButton(
                onPressed: () {
                  Navigator.pushNamed(context, '/register');
                },
                child: const Text('Registre-se'),
              ),
              ElevatedButton(onPressed: onLogin, child: const Text('Login')),
            ],
          ),
        ),
      ),
    );
  }
}
