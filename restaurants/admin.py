from django.contrib import admin
from .models import Restaurant, MenuItem


class MenuItemAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "price")
    list_display_links = ["name"]
    search_fields = ("name",)

class RestaurantAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "address")
    list_display_links = ["name"]
    search_fields = ("name", "address")




admin.site.register(Restaurant, RestaurantAdmin)
admin.site.register(MenuItem, MenuItemAdmin)

