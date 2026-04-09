# BIAWC_project
Aplikacja lista to-do z wykorzystaniem mikroserwisów

Celem projektu jest budowa aplikacji chmurowej w architekturze mikroserwisowej z pełnym wsparciem sztucznej inteligencji w całym cyklu programowania. Projekt realizowany jest z wykorzystaniem techniki "Vibe Coding", w której AI generuje kod na podstawie opisów w języku naturalnym, a programista pełni rolę nadzorcy i weryfikatora. Aplikacja opiera się na trzech głównych mikroserwisach:
•	Task Service: Odpowiada za zarządzanie zadaniami (operacje CRUD – tworzenie, odczytywanie, aktualizacja, usuwanie).
•	User Service: Obsługuje rejestrację, logowanie oraz autoryzację z wykorzystaniem tokenów JWT.
•	Recommendation Service: Analizuje treść zadania i podpowiada optymalny priorytet lub czas realizacji.
Architektura systemu opiera się w głównej mierze na ekosystemie JavaScript/TypeScript, co pozwala na ujednolicenie technologii zarówno po stronie serwera, jak i klienta, optymalizując czas pracy jednoosobowego zespołu. Mikroserwisy zostaną zaimplementowane w środowisku Node.js, co zapewni dużą elastyczność oraz szybkie prototypowanie kodu wspierane przez narzędzia AI. Aplikacja będzie zrobiona w stylu SPA przy użyciu biblioteki React w celu stworzenia płynnej interakcji z listą zadań. Mikroserwisy i cała aplikacja zostaną skonteneryzowane za pomocą konfiguracji docker-compose. Do wdrożenia kontenerów do chmury obliczeniowej wykorzystana zostanie platforma GCP ze względu na prostą konteneryzację.
