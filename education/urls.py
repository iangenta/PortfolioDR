from django.urls import path,include
from rest_framework import routers
from education import views
#api versioning
router = routers.DefaultRouter()
router.register(r'education', views.EducationView,'education')
urlpatterns = [

]
