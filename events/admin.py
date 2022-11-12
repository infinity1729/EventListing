from django.contrib import admin
# from mapbox_location_field.admin import MapAdmin

from .models import (
    Host,
    Event,
    EventMember,
    EventUserWishList,
    UserCoin,
)

admin.site.register(Host)
admin.site.register(Event)
admin.site.register(EventMember)
admin.site.register(EventUserWishList)
admin.site.register(UserCoin)
