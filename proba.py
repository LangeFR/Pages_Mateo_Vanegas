from itertools import permutations

# Función para verificar si un número cumple con las condiciones
def cumple_condiciones(numero):
    # Verifica si el número es impar
    
    # Verifica si el número es mayor que 330
    if int(numero) <= 330:
        return False
    
    # Verifica si el número tiene 3 dígitos
    if len(numero) != 3:
        return False
    
    # Verifica si el número contiene únicamente los dígitos 0 al 6 y cada dígito aparece solo una vez
    digitos = set(numero)
    if len(digitos) != 3 or not all(digito in '0123456' for digito in digitos):
        return False
    
    return True

# Genera todas las permutaciones de los dígitos del 0 al 6
permutaciones = permutations('0123456', 3)

# Lista para almacenar los números que cumplen con las condiciones
numeros_cumplen_condiciones = []

# Verifica cada permutación y agrega los números que cumplen con las condiciones a la lista
for perm in permutaciones:
    numero = ''.join(perm)
    if cumple_condiciones(numero):
        numeros_cumplen_condiciones.append(numero)

# Imprime los números que cumplen con las condiciones
for numero in numeros_cumplen_condiciones:
    print(numero)

# Imprime el conteo de los números que cumplen con las condiciones
print("Total de números que cumplen con las condiciones:", len(numeros_cumplen_condiciones))

