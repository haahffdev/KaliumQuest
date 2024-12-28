import { Question } from './types';

export const questions: Question[] = [
  {
    id: 1,
    text: "Una contraseña como 'kalium123' es segura para usar en cuentas importantes.",
    answer: false
  },
  {
    id: 2,
    text: "El phishing es una técnica para robar información personal mediante correos o sitios web falsos.",
    answer: true
  },
  {
    id: 3,
    text: "Usar la misma contraseña en todas las cuentas es una buena práctica de seguridad.",
    answer: false
  },
  {
    id: 4,
    text: "Un antivirus actualizado ayuda a proteger contra Malware.",
    answer: true
  },
  {
    id: 5,
    text: "Las redes Wi-Fi públicas son completamente seguras para realizar transacciones bancarias.",
    answer: false
  },
  {
    id: 6,
    text: "La autenticación de dos factores aumenta la seguridad de las cuentas.",
    answer: true
  },
  {
    id: 7,
    text: "Los hackers solo atacan a grandes empresas, no a usuarios comunes",
    answer: false
  },
  {
    id: 8,
    text: "Actualizar regularmente el software ayuda a prevenir vulnerabilidades de seguridad.",
    answer: true
  },
  {
    id: 9,
    text: "Un firewall puede ayudar a prevenir accesos no autorizados a una red.",
    answer: true
  },
  {
    id: 10,
    text: "Los virus informáticos son el único tipo de malware que existe.",
    answer: false
  },
  {
    id: 11,
    text: "El cifrado de datos asegura que la información solo sea accesible para quienes tienen la clave correcta.",
    answer: true
  },
  {
    id: 12,
    text: "El software antivirus es suficiente para proteger un sistema de todos los tipos de ataques cibernéticos.",
    answer: false
  },
  {
    id: 13,
    text: "El malware puede propagarse a través de correos electrónicos adjuntos.",
    answer: true
  },
  {
    id: 14,
    text: "La ingeniería social se refiere a técnicas que manipulan a las personas para obtener información confidencial.",
    answer: true
  },
  {
    id: 15,
    text: "Un ataque DDoS tiene como objetivo robar información sensible.",
    answer: false
  },
  {
    id: 16,
    text: "Los certificados SSL son utilizados para asegurar la comunicación en línea.",
    answer: true
  },
  {
    id: 17,
    text: "El acceso remoto a un sistema siempre es seguro si se utiliza una VPN.",
    answer: false
  },
  {
    id: 18,
    text: "El uso de HTTPS garantiza que los datos transmitidos entre el cliente y el servidor estén completamente seguros.",
    answer: false
  },
  {
    id: 19,
    text: "El Cross-Site Scripting (XSS) permite a un atacante ejecutar scripts en el navegador de un usuario.",
    answer: true
  },
  {
    id: 20,
    text: "Un WAF puede ayudar a proteger contra ataques de inyección SQL.",
    answer: true
  },
  {
    id: 21,
    text: "Las cookies de sesión son seguras y no pueden ser manipuladas por un atacante.",
    answer: false
  },
  {
    id: 22,
    text: "El almacenamiento de datos sensibles en el lado del cliente es una práctica recomendada en el desarrollo web.",
    answer: false
  },
  {
    id: 23,
    text: "La ingeniería inversa puede ser utilizada para descubrir vulnerabilidades en aplicaciones web.",
    answer: true
  },
  {
    id: 24,
    text: "Los certificados SSL son innecesarios para aplicaciones que no manejan información sensible.",
    answer: false
  },
  {
    id: 25,
    text: "El uso de HTTPS garantiza que los datos transmitidos entre el cliente y el servidor estén completamente protegidos contra ataques de intermediarios.",
    answer: false
  },
  {
    id: 26,
    text: "Los ataques de XSS pueden ser mitigados mediante la validación y el escape adecuado de los datos de entrada del usuario.",
    answer: true
  },
  {
    id: 27,
    text: "La inyección SQL es una técnica que permite a un atacante ejecutar comandos SQL arbitrarios en una base de datos.",
    answer: true
  },
  {
    id: 28,
    text: "El protocolo Kerberos no permite la autenticación de usuarios en un entorno de Active Directory.",
    answer: false
  },
  {
    id: 29,
    text: "La escalada de privilegios a través de vulnerabilidades en servicios de Windows es una técnica común en el Pentesting.",
    answer: true
  },
  {
    id: 30,
    text: "La enumeración de usuarios en Active Directory puede realizarse mediante el uso de herramientas como BloodHound.",
    answer: true
  },
  {
    id: 31,
    text: "Los ataques de Pass-the-Hash son ineficaces en entornos que utilizan autenticación de dos factores.",
    answer: false
  },
  {
    id: 32,
    text: "El comando chmod se utiliza para cambiar la propiedad de un archivo en Linux.",
    answer: false
  },
  {
    id: 33,
    text: "En Linux, el archivo /etc/passwd contiene información sobre los usuarios del sistema, incluyendo su contraseña encriptada.",
    answer: false
  },
  {
    id: 34,
    text: "El sistema de archivos ext4 permite la creación de volúmenes de hasta 1 exabyte.",
    answer: true
  },
  {
    id: 35,
    text: "El comando grep se utiliza para buscar patrones dentro de archivos de texto y puede utilizar expresiones regulares.",
    answer: true
  },
  {
    id: 36,
    text: "En Linux, el proceso con el PID 1 es el proceso init, que es el primer proceso que se ejecuta al iniciar el sistema.",
    answer: true
  },
  {
    id: 37,
    text: "La criptografía simétrica utiliza la misma clave para cifrar y descifrar la información.",
    answer: true
  },
  {
    id: 38,
    text: "El algoritmo RSA es un ejemplo de criptografía simétrica.",
    answer: false
  },
  {
    id: 39,
    text: "Los sistemas de firma digital garantizan la integridad y autenticidad de un mensaje.",
    answer: true
  },
  {
    id: 40,
    text: "El ataque de fuerza bruta es el método más eficiente para romper un cifrado fuerte.",
    answer: false
  },
  {
    id: 41,
    text: "El protocolo Diffie-Hellman se utiliza para el intercambio seguro de claves.",
    answer: true
  },
  {
    id: 42,
    text: "La declaración int *ptr; en C y C++ crea un puntero a un entero.",
    answer: true
  },
  {
    id: 43,
    text: "En C, el operador sizeof devuelve el tamaño de un tipo de dato en bytes.",
    answer: true
  },
  {
    id: 44,
    text: "En Assembly, el registro EAX se utiliza comúnmente para almacenar direcciones de memoria.",
    answer: false
  },
  {
    id: 45,
    text: "El lenguaje C permite la sobrecarga de funciones.",
    answer: false
  },
  {
    id: 46,
    text: "En C++, el operador new se utiliza para asignar memoria dinámica.",
    answer: true
  },
  {
    id: 47,
    text: "En Assembly, las instrucciones son independientes de la arquitectura del procesador.",
    answer: false
  },
  {
    id: 48,
    text: "El puntero NULL en C y C++ es un puntero que no apunta a ninguna dirección válida.",
    answer: true
  },
  {
    id: 49,
    text: "En C, la función printf puede ser utilizada para imprimir variables de tipo float sin necesidad de especificar un formato.",
    answer: false
  },
  {
    id: 50,
    text: "El lenguaje Assembly permite un control más directo sobre el hardware en comparación con C y C++.",
    answer: true
  },
  {
    id: 51,
    text: "En C++, el uso de #define permite definir constantes que no pueden ser modificadas.",
    answer: false
  },
  {
    id: 52,
    text: "La función map() en Python devuelve un objeto iterable que aplica una función a cada elemento de un iterable dado.",
    answer: true
  },
  {
    id: 53,
    text: "En Python, el uso de *args y **kwargs permite a una función aceptar un número variable de argumentos posicionales y de palabra clave, respectivamente.",
    answer: true
  },
  {
    id: 54,
    text: "El método __init__ en una clase de Python se utiliza para definir métodos estáticos.",
    answer: false
  },
  {
    id: 55,
    text: "Las listas en Python son inmutables, lo que significa que no se pueden modificar después de su creación.",
    answer: false
  },
  {
    id: 56,
    text: "En Assembly, las instrucciones son independientes de la arquitectura del procesador.",
    answer: false
  },
  {
    id: 57,
    text: "El decorador @staticmethod se utiliza para definir un método que no requiere acceso a la instancia o a la clase.",
    answer: true
  },
  {
    id: 58,
    text: "El phishing solo se realiza a través de correos electrónicos y nunca a través de redes sociales.",
    answer: false
  },
  {
    id: 59,
    text: "Los ataques de denegación de servicio (DoS) son siempre perpetrados por hackers externos.",
    answer: false
  },
  {
    id: 60,
    text: "Un firewall de red puede proteger completamente un sistema contra ataques de malware.",
    answer: true
  },
  {
    id: 61,
    text: "El sistema de gestión de paquetes apt es exclusivo de distribuciones basadas en Red Hat.",
    answer: false
  },
  {
    id: 62,
    text: "El directorio /root es el directorio home del usuario root.",
    answer: true
  },
  {
    id: 63,
    text: "El comando kill se utiliza para finalizar procesos en Linux.",
    answer: true
  },
  {
    id: 64,
    text: "El comando ls se utiliza para mostrar el contenido de un archivo.",
    answer: false
  }
];