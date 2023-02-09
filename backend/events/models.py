from django.db import models
from django.urls import reverse
# from mapbox_location_field.models import LocationField
from ckeditor_uploader.fields import RichTextUploadingField
from django.contrib.auth.models import User
from .image import rename

class Host(models.Model):
    name = models.CharField(max_length=255, primary_key=True)
    logo = models.ImageField(upload_to=rename, blank=True)
    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('host-list')

class Event(models.Model):
    host = models.ForeignKey(Host, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, unique=True)
    uid = models.PositiveIntegerField(primary_key=True)
    description = RichTextUploadingField(blank=True)
    venue = models.CharField(max_length=255)
    start_date = models.DateField()
    end_date = models.DateField()
    start_time=models.TimeField()
    end_time = models.TimeField()
    image = models.ImageField(upload_to=rename, blank=True)
    # location = LocationField()
    created_date = models.DateField(auto_now_add=True)
    status_choice = (
        ('active', 'Active'),
        ('completed', 'Completed'),
    )
    status = models.CharField(choices=status_choice, max_length=10)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('event-list')

    def created_updated(model, request):
        obj = model.objects.latest('pk')
        if obj.created_by is None:
            obj.created_by = request.user
        obj.updated_by = request.user
        obj.save()
'''class EventImage(models.Model):
    event = models.OneToOneField(Event, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='event_image/')
'''
'''class EventAgenda(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    session_name = models.CharField(max_length=120)
    speaker_name = models.CharField(max_length=120)
    start_time = models.TimeField()
    end_time = models.TimeField()
    venue_name = models.CharField(max_length=255)
class EventMember(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    attend_status_choice = (
        ('waiting', 'Waiting'),
        ('attending', 'Attending'),
        ('completed', 'Completed'),
        ('absent', 'Absent'),
        ('cancelled', 'Cancelled'),
    )
    attend_status = models.CharField(choices=attend_status_choice, max_length=10)
    created_user = models.ForeignKey('auth.User', on_delete=models.CASCADE, related_name='eventmember_created_user')
    updated_user = models.ForeignKey('auth.User', on_delete=models.CASCADE, related_name='eventmember_updated_user')
    created_date = models.DateField(auto_now_add=True)
    updated_date = models.DateField(auto_now_add=True)
    status_choice = (
        ('disabled', 'Disabled'),
        ('active', 'Active'),
        ('deleted', 'Deleted'),
        ('blocked', 'Blocked'),
        ('completed', 'Completed'),
    )
    status = models.CharField(choices=status_choice, max_length=10)


    class Meta:
        unique_together = ['event', 'user']

    def __str__(self):
        return str(self.user)

    def get_absolute_url(self):
        return reverse('join-event-list')

class EventUserWishList(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    created_user = models.ForeignKey('auth.User', on_delete=models.CASCADE, related_name='eventwishlist_created_user')
    updated_user = models.ForeignKey('auth.User', on_delete=models.CASCADE, related_name='eventwishlist_updated_user')
    created_date = models.DateField(auto_now_add=True)
    updated_date = models.DateField(auto_now_add=True)
    status_choice = (
        ('disabled', 'Disabled'),
        ('active', 'Active'),
        ('deleted', 'Deleted'),
        ('blocked', 'Blocked'),
        ('completed', 'Completed'),
    )
    status = models.CharField(choices=status_choice, max_length=10)


    class Meta:
        unique_together = ['event', 'user']

    def __str__(self):
        return str(self.event)

    def get_absolute_url(self):
        return reverse('event-wish-list')

class UserCoin(models.Model):
    user = models.OneToOneField('auth.User', on_delete=models.CASCADE)
    CHOICE_GAIN_TYPE = (
        ('event', 'Event'),
        ('others', 'Others'),
    )
    gain_type = models.CharField(max_length=6, choices=CHOICE_GAIN_TYPE)
    gain_coin = models.PositiveIntegerField()
    created_user = models.ForeignKey('auth.User', on_delete=models.CASCADE, related_name='usercoin_created_user')
    updated_user = models.ForeignKey('auth.User', on_delete=models.CASCADE, related_name='usercoin_updated_user')
    created_date = models.DateField(auto_now_add=True)
    updated_date = models.DateField(auto_now_add=True)
    status_choice = (
        ('disabled', 'Disabled'),
        ('active', 'Active'),
        ('deleted', 'Deleted'),
        ('blocked', 'Blocked'),
        ('completed', 'Completed'),
    )
    status = models.CharField(choices=status_choice, max_length=10)

    def __str__(self):
        return str(self.user)

    def get_absolute_url(self):
        return reverse('user-mark')
'''

class User_detail(models.Model):
    username = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, unique=True)
    email = models.CharField(max_length=255, unique=True)
    rollno = models.CharField(max_length=255, unique=True)
    department = models.CharField(max_length=255, unique=True)
    join_date = models.DateField()
    photo = models.FileField(null=True, blank=True)
    created_date = models.DateField(auto_now_add=True)


    def __str__(self):
        return self.name