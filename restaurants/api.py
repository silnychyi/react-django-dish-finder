from .models import Restaurant, MenuItem
from rest_framework import viewsets, permissions, pagination, filters
from .serializers import RestaurantSerializer, MenuItemMainSerializer
from random import shuffle


class MenuItemMainPagination(pagination.PageNumberPagination):
    page_size = 20 

    
class RestaurantPagination(pagination.PageNumberPagination):
    page_size = 20 


class RestaurantViewSet(viewsets.ModelViewSet):
    queryset = Restaurant.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = RestaurantSerializer
    pagination_class = RestaurantPagination


class MenuItemMainViewSet(viewsets.ModelViewSet):

    queryset = MenuItem.objects.all()
        
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = MenuItemMainSerializer
    pagination_class = MenuItemMainPagination
    filter_backends = (filters.OrderingFilter, filters.SearchFilter)
    ordering_fields = ('price',)
    search_fields = ('name', 'description')