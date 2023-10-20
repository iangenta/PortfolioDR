from django.urls import path,include
from rest_framework import routers
from experience import views
#api versioning
router = routers.DefaultRouter()
router.register(r'experiences', views.ExperienceView,'experience')
urlpatterns = [

]
