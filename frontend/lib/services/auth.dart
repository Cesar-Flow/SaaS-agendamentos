import 'package:flutter/material.dart';
import 'package:dio/dio.dart';

class Auth {
  final baseUrl = "http://10.0.2.2:3000";
  final Dio _dio = Dio();

  // void initialize() {
  //   _dio.options.headers = {
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json',
  //   };
  //   _dio.options.baseUrl = baseUrl;
  //   _dio.options.connectTimeout = 5000; // 5 seconds
  //   _dio.options.receiveTimeout = 3000; // 3 seconds
  // }

  Future<String> registerCustomer() async {
    try {
      debugPrint("Trying to register customer...");
      final response = await _dio.post('$baseUrl/auth/registerCustomer', options: Options(
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      ) ,data: {
          "email": "cliente2@email.com",
          "name": "Caio Henrique",
          "password": "123456",
          "phone": "+5511999999999",
          "notes": "Cliente VIP"
      });
      return response.data['customer_id'].toString();
    } catch (e) {
      debugPrint(e.toString());
      rethrow;
    }
  }

  Future<String> getUser() async {
    try {
      debugPrint("Trying to get user...");
      final response = await _dio.get('$baseUrl/auth/getUser', options: Options(
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      ));
      return response.data.toString();
    } catch (e) {
      debugPrint(e.toString());
      rethrow;
    }
  }

  Future<String> login() async {
    try {
      debugPrint("Trying to login...");
      final response = await _dio.post('$baseUrl/auth/login', options: Options(
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      ), data: {
        "email": "cliente2@email.com",
        "password": "123456",
      });
      debugPrint(response.data.toString());
      return response.data.toString();
    } catch (e) {
      debugPrint(e.toString());
      rethrow;
    }
  }

  Future<String> logout() async {
    try {
      debugPrint("Trying to logout...");
      final response = await _dio.post('$baseUrl/auth/logout', options: Options(
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      ));
      return response.data.toString();
    } catch (e) {
      debugPrint(e.toString());
      rethrow;
    }
  }
} 