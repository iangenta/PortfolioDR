from django.db import models

# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=255)
    date= models.DateField()
    description= models.TextField(blank=True)
    technologies = models.CharField(max_length=100)
    image= models.ImageField(upload_to="files/covers")
    
    def __str__(self):
        return self.title