from django.db import models

# Create your models here.
class Experience(models.Model):
    title = models.CharField(max_length=100)
    company = models.CharField(max_length=250)
    description=models.TextField()
    date_start= models.DateField( auto_now=False, auto_now_add=False)
    date_end= models.DateField( auto_now=False, auto_now_add=False)
    
    def __str__(self):
        return self.title
