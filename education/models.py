from django.db import models

# Create your models here.
class  Education(models.Model):
    college= models.CharField(max_length=250)
    degree= models.CharField(max_length=200)
    certification= models.TextField()
    date_start= models.DateField()
    date_end=models.DateField()


    def __str__(self):
        return self.college
