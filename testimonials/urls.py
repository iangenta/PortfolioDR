from django.urls import path,include
from rest_framework import routers
from testimonials import views
#api versioning
router = routers.DefaultRouter()
router.register(r'testimonials', views.TestimonialView,'testimonial')
urlpatterns = [

]
