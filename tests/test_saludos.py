"""Pruebas para el módulo de saludos."""

from saludos import saludar, despedir


def test_saludar():
    assert saludar("Eduard") == "¡Hola, Eduard!"


def test_despedir():
    assert despedir("Eduard") == "¡Hasta pronto, Eduard!"
