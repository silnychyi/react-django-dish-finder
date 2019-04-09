from django.db import models

class Restaurant(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=1000)
    phone = models.CharField(max_length=13, blank=True)
    email = models.EmailField(max_length=70, blank=True)
    description = models.TextField(blank=True)
    working_from_hour = models.TimeField(blank=True, null=True)
    working_to_hour = models.TimeField(blank=True, null=True)
    photo = models.ImageField(upload_to="images", default="null", blank=True)
    website = models.CharField(max_length=100, blank=True)
    
    class Meta:
        verbose_name_plural = "Restaurants"
    
    def __str__(self): 
        return self.name



class MenuItem(models.Model):
    name = models.CharField(max_length=150)
    price = models.FloatField()
    description = models.CharField(max_length=1000, blank=True)
    restaurant = models.ForeignKey(to=Restaurant, related_name='meals', on_delete=models.CASCADE)

    def __str__(self):
        return self.name



