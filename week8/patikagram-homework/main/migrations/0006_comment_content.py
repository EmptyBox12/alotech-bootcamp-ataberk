# Generated by Django 4.0 on 2021-12-13 13:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0005_comment'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='content',
            field=models.TextField(default=2, max_length=100),
            preserve_default=False,
        ),
    ]