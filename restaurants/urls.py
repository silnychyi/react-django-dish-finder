from rest_framework import routers
from .api import RestaurantViewSet, MenuItemMainViewSet

router = routers.DefaultRouter()
router.register("rests", RestaurantViewSet, "rests")
router.register("ms", MenuItemMainViewSet, "meals")

urlpatterns = router.urls

