from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index' ),
    path('cv', views.cv, name='cv'),
    path('bio', views.bio, name='bio'),
    path('Semence Matinale', views.sm, name='sm')
]