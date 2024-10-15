import pywhatkit as kit

# Número de teléfono en formato internacional, ejemplo: "+34123456789"
numero_destino = "+34603148970"

# Mensaje que quieres enviar
mensaje = "¡Hola! Este mensaje fue enviado usando Python."

# Hora a la que se enviará el mensaje (hora y minutos)
hora = 9  # 4 PM
minutos = 28

# Enviar el mensaje
kit.sendwhatmsg(numero_destino, mensaje, hora, minutos)

print("Mensaje programado con éxito.")
