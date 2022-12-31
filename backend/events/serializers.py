from rest_framework import serializers
from .models import *

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('host', 'name', 'uid', 'description', 'venue', 'start_date', 'end_date','image', 'status')

class HostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Host
        fields = ('__all__')

