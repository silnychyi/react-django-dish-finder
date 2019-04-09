from rest_framework import serializers
from .models import Restaurant, MenuItem



class MenuItemSerializer(serializers.ModelSerializer):
    # tracks = serializers.StringRelatedField(many=True)  


    restaurant = serializers.StringRelatedField()
    class Meta:
        model = MenuItem
        fields = ("name", "price", "description", "restaurant_id", "restaurant")

class RestaurantSerializer(serializers.ModelSerializer):

    meals = MenuItemSerializer(many=True)

    class Meta:
        model = Restaurant
        fields = "__all__"
    
    def create(self, validated_data):
        print(f"validated_data: {validated_data}")
        meals_data = validated_data['meals']
        del validated_data['meals']
        instance = super(RestaurantSerializer, self).create(validated_data)


        # 2
        for meal in meals_data:
            meal_instance = MenuItem(**meal)
            meal_instance.restaurant_id = instance.id
            meal_instance.save()
            # instance.meals.append(meal_instance)

        # 3
        # for meal in meals_data:
        #     meal['restaurant_id'] = instance.id
        # print(f"!!!!!!!!!! meals_data: {meals_data}")
        # serializer = MenuItemSerializer(data=meals_data, many=True)
        # print(serializer)
        # serializer.is_valid()
        # serializer.save()
        return instance


class RestaurantSerializer_(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ("name", "address", "phone", "email", "description", "working_from_hour", "working_to_hour", "photo", "website", "id" )


class MenuItemMainSerializer(serializers.ModelSerializer):

    restaurant = RestaurantSerializer_()
    
    class Meta:
        model = MenuItem
        fields = "__all__"
