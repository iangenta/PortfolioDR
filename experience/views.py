from rest_framework import viewsets
from .serializer import ExperienceSerializer
from .models import Experience
# Create your views here.
class ExperienceView(viewsets.ModelViewSet):
    serializer_class= ExperienceSerializer
    queryset = Experience.objects.all()