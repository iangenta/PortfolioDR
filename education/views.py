from rest_framework import viewsets
from .serializer import EducationSerializer
from .models import Education
# Create your views here.
class EducationView(viewsets.ModelViewSet):
    serializer_class= EducationSerializer
    queryset = Education.objects.all()