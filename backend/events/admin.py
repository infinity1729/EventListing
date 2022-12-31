from django.contrib import admin
# from mapbox_location_field.admin import MapAdmin

from .models import (
    Host,
    Event,
    User_detail,
)

admin.site.register(Host)
admin.site.register(Event)
admin.site.register(User_detail)
# admin.site.register(EventMember)
# admin.site.register(EventUserWishList)
# admin.site.register(UserCoin)
