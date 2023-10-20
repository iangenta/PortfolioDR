from rest_framework import viewsets
from .serializer import TestimonialSerializer
from .models import Testimonial
# Create your views here.
class TestimonialView(viewsets.ModelViewSet):
    serializer_class= TestimonialSerializer
    queryset = Testimonial.objects.all()