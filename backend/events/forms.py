from django import forms
from betterforms.multiform import MultiModelForm

from .models import Event#, EventImage#, EventAgenda


class EventForm(forms.ModelForm):


    class Meta:
        model = Event
        fields = ['host', 'name', 'uid', 'description', 'venue', 'start_date', 'end_date','image', 'status']
        widgets = {
            'start_date': forms.TextInput(attrs={'class': 'form-control', 'type': 'date'}),
            'end_date': forms.TextInput(attrs={'class': 'form-control', 'type': 'date'}),
        }


# class EventImageForm(forms.ModelForm):


#     class Meta:
#         model = EventImage
#         fields = ['image']


'''
class EventAgendaForm(forms.ModelForm):


    class Meta:
        model = EventAgenda
        fields = ['session_name', 'speaker_name', 'start_time', 'end_time', 'venue_name']

        widgets = {
            'start_time': forms.TextInput(attrs={'class': 'form-control', 'type': 'time'}),
            'end_time': forms.TextInput(attrs={'class': 'form-control', 'type': 'time'}),
        }
'''
# class EventCreateMultiForm(MultiModelForm):
#     form_classes = {
#         'event': EventForm,
#         'event_image': EventImageForm,
        
#     }