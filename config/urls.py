from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path

urlpatterns = [

    path(settings.ADMIN_URL, admin.site.urls),

    path(
        'products/', 
        include(('products.urls', 'other_name_for_products'), namespace='products'),
    ),
    path(
        'payments/', 
        include('payments.urls')
    ),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
