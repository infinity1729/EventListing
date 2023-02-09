# Generated by Django 4.1.6 on 2023-02-09 16:07

import ckeditor_uploader.fields
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import events.image


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Host',
            fields=[
                ('name', models.CharField(max_length=255, primary_key=True, serialize=False)),
                ('logo', models.ImageField(blank=True, upload_to=events.image.rename)),
            ],
        ),
        migrations.CreateModel(
            name='User_detail',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, unique=True)),
                ('email', models.CharField(max_length=255, unique=True)),
                ('rollno', models.CharField(max_length=255, unique=True)),
                ('department', models.CharField(max_length=255, unique=True)),
                ('join_date', models.DateField()),
                ('photo', models.FileField(blank=True, null=True, upload_to='')),
                ('created_date', models.DateField(auto_now_add=True)),
                ('username', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Event',
            fields=[
                ('name', models.CharField(max_length=255, unique=True)),
                ('uid', models.AutoField(primary_key=True, serialize=False)),
                ('description', ckeditor_uploader.fields.RichTextUploadingField(blank=True)),
                ('venue', models.CharField(max_length=255)),
                ('start_date', models.DateField()),
                ('end_date', models.DateField()),
                ('start_time', models.TimeField()),
                ('end_time', models.TimeField()),
                ('image', models.ImageField(blank=True, upload_to=events.image.rename)),
                ('created_date', models.DateField(auto_now_add=True)),
                ('status', models.CharField(choices=[('active', 'Active'), ('completed', 'Completed')], max_length=10)),
                ('host', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='events.host')),
            ],
        ),
    ]