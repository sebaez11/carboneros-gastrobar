from .base import *  # noqa
from .base import env

# GENERAL
DEBUG = True
SECRET_KEY = env(
    "DJANGO_SECRET_KEY",
    default="URLmIgk29q3VSGaK6WvvVhQR5XxdH7ZGH0iz7pJAptHfcFFgjK4UOJN3xJWW1zPt",
)
ALLOWED_HOSTS = ["localhost", "0.0.0.0", "127.0.0.1"]

# CACHES
CACHES = {
    "default": {
        "BACKEND": "django.core.cache.backends.locmem.LocMemCache",
        "LOCATION": "",
    }
}

# EMAIL
EMAIL_BACKEND = env(
    "DJANGO_EMAIL_BACKEND", default="django.core.mail.backends.console.EmailBackend"
)

# WhiteNoise
# ------------------------------------------------------------------------------
# http://whitenoise.evans.io/en/latest/django.html#using-whitenoise-in-development
INSTALLED_APPS = ["whitenoise.runserver_nostatic"] + INSTALLED_APPS  # noqa F405




# django-extensions
INSTALLED_APPS += ["django_extensions"]  # noqa F405
