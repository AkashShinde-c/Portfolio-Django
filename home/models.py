from django.db import models

class projectsCard(models.Model):
    projectName = models.CharField(max_length=100)
    projectTags = models.CharField(max_length=100)
    refImg = models.ImageField(upload_to = 'pics/')
