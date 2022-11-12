"""events URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# from django.contrib import admin
# ToDo
from django.urls import path

from .views import (
    HostListView,
    NewHostView,
    # EventCategoryUpdateView,
    # EventCategoryDeleteView,
    EventCreateView,
    EventListView,
    EventUpdateView,
    EventDetailView,
    EventDeleteView,
    AddEventMemberCreateView,
    JoinEventListView,
    RemoveEventMemberDeleteView,
    EventUserWishListView,
    AddEventUserWishListCreateView,
    RemoveEventUserWishDeleteView,
    UpdateEventStatusView,
    CompleteEventList,
    AbsenseUserList,
    CompleteEventUserList,
    CreateUserMark,
    UserMarkList,
    search_host,
    search_event,
    create_event,
)
urlpatterns = [
    path('host-list/', HostListView.as_view(), name='host-list'),
    path('new-host/', NewHostView.as_view(), name='new-host'),
    # path('host/<int:pk>/edit/', EventCategoryUpdateView.as_view(), name='edit-event-category'),
    # path('host/<int:pk>/delete/', EventCategoryDeleteView.as_view(), name='delete-event-category'),
    path('event-create/', EventCreateView.as_view(), name='event-create'),
    path('event-list/', EventListView.as_view(), name='event-list'),
    path('event/<int:pk>/edit/', EventUpdateView.as_view(), name='event-edit'),
    path('detail/<int:pk>', EventDetailView.as_view(), name='event-detail'),
    path('delete/<int:pk>', EventDeleteView.as_view(), name='event-delete'),
    path('add-event-member/', AddEventMemberCreateView.as_view(), name='add-event-member'),
    path('join-event-list/', JoinEventListView.as_view(), name='join-event-list'),
    path('event-member/<int:pk>/remove/', RemoveEventMemberDeleteView.as_view(), name='remove-event-member'),
    path('event-wish-list/', EventUserWishListView.as_view(), name='event-wish-list'),
    path('add-event-wish-user/', AddEventUserWishListCreateView.as_view(), name='add-event-wish-user'),
    path('event-user-wish/<int:pk>/remove/', RemoveEventUserWishDeleteView.as_view(), name='remove-event-user-wish'),
    path('update-status/<int:pk>/event/', UpdateEventStatusView.as_view(), name='update-event-status'),
    path('complete-event/', CompleteEventList.as_view(), name='complete-event'),
    path('absense-user/', AbsenseUserList.as_view(), name='absense-user'),
    path('complete-event-user/', CompleteEventUserList.as_view(), name='complete-event-user'),
    path('create-user-mark/', CreateUserMark.as_view(), name='create-user-mark'),
    path('user-mark/', UserMarkList.as_view(), name='user-mark'),
    path('search_host/', search_host, name='search-host'),
    path('search_event/', search_event, name='search-event'),
    path('create/', create_event, name='create'),
]



