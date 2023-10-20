from django.db import models

# Create your models here.
class Testimonial(models.Model):
    author = models.CharField(max_length=50)
    company= models.CharField(max_length=50)
    testimonial = models.TextField()
    date= models.DateField( auto_now=False, auto_now_add=False)
    
    def __str__(self):
        return self.author
